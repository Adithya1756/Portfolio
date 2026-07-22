"use client";

import dynamic from "next/dynamic";

const NetworkBackground = dynamic(() => import("./NetworkBackground"), {
  ssr: false,
});

export default function NetworkBackgroundClient({ className }: { className?: string }) {
  return <NetworkBackground className={className} />;
}
