"use client"
import Image from "next/image";
import React from "react";

function HeroImage() {
  return (
    
      <div className="hidden md:block overflow-hidden">
        <Image src="/hero.png" width={800} height={600} alt="Hero"/>
      </div>
    
  );
}

export default HeroImage;
