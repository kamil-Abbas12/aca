// app/api/contact/route.ts
import clientPromise from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, zip, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 1. Save the lead to MongoDB
    const client = await clientPromise;
    const db = client.db("topdogleads");
    const result = await db.collection("contact_submissions").insertOne({
      name,
      email,
      phone,
      zip: zip || null,
      message: message || null,
      source: "affordablecareact.topdoglead.com",
      createdAt: new Date(),
    });

    // 2. Email the internal team
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Top Dog Leads Website" <${process.env.GMAIL_USER}>`,
      to: "topdogleadsbackend@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>ZIP Code:</strong> ${zip || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Lead ID: ${result.insertedId}</p>
      `,
    });

    // 3. Auto-reply to the client
    await transporter.sendMail({
      from: `"Top Dog Leads LLC" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We've received your message — Top Dog Leads LLC",
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color:#534AB7;">Thanks for reaching out, ${name.split(" ")[0]}!</h2>
          <p>We've received your message and a licensed insurance specialist will contact you within one business day.</p>
          <p>If you need immediate assistance, call us directly at <strong>+1 866 896 0447</strong> (Mon–Fri, 8am–8pm EST).</p>
          <p style="margin-top:24px;">— The Top Dog Leads LLC Team</p>
          <hr style="margin-top:24px;border:none;border-top:1px solid #eee;" />
          <p style="font-size:12px;color:#999;">
            Top Dog Leads LLC is an independent marketing company, not an insurance carrier.
            This email was sent because you submitted a contact form at affordablecareact.topdoglead.com.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}