"use client";

import { useEffect, useState } from "react";

export default function Animation () {

  const [showAnimationComponent, setShowAnimationComponent] = useState(true);
  const [showFirstAnimation, setShowFirstAnimation] = useState(true);
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  useEffect(() => {
    const firstAnimationDuration = 2600;
    const secondAnimationDuration = 4000;

    const timer = setTimeout(() => {
      setShowFirstAnimation(false);
      setShowSecondAnimation(true);
      setTimeout(() => {
        setShowAnimationComponent(false);
      }, secondAnimationDuration);
    }, firstAnimationDuration);

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimationComponent) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 top-0 left-0 h-screen w-screen bg-black flex items-center justify-center animate-change">
      <div className="flex justify-center h-[100%] w-[100%]">
        {showFirstAnimation && (
          <img
            src="/images/Poké-ball_animation.jpg"
            alt="Poké Ball"
            className="animate-poke-ball object-contain w-full"
          />
        )}
        {showSecondAnimation && (
          <img
            src="/images/Pikachu_animation.jpg"
            alt="Pikachu"
            className="animate-pikachu object-contain w-full"
          />
        )}
      </div>
    </div>
  );
}
