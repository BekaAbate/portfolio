"use client";
import Particles from "./react-bits/Particles";
export default function Backgroud() {
  return (
    <div className="absolute inset-0 z-0">
      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        // moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
    </div>
  );
}
