import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function page() {
  return (
    <div>
      <Map position={[18.8082363, 98.9546953]} />
    </div>
  );
}
