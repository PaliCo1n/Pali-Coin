import React, { Suspense, lazy } from "react";

// Dynamically import the whitepaper parts
const WhitepaperPart1 = lazy(() => import("./WhitepaperPart1"));
const WhitepaperPart2 = lazy(() => import("./WhitepaperPart2"));
const WhitepaperPart3 = lazy(() => import("./WhitepaperPart3"));
const WhitepaperPart4 = lazy(() => import("./WhitepaperPart4"));

const About = () => {
  return (
    <div className="whitepaper-container px-4 sm:px-6 lg:px-10 py-6">
      {/* Lazy load each part */}
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <div className="mb-8">
          <WhitepaperPart1 />
        </div>
        <div className="mb-8">
          <WhitepaperPart2 />
        </div>
        <div className="mb-8">
          <WhitepaperPart3 />
        </div>
        <div className="mb-8">
          <WhitepaperPart4 />
        </div>
      </Suspense>
    </div>
  );
};

export default About;
