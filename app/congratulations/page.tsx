import { Suspense } from "react";
import CongratulationsContent from "./CongratulationsContent";

export default function CongratulationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CongratulationsContent />
    </Suspense>
  );
}