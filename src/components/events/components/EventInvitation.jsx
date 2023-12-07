"use client";

import confetti from "canvas-confetti";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const EventInvitation = () => {
  // do this for 1 seconds
  var duration = 1 * 1000;
  var end = Date.now() + duration;

  setTimeout(function () {
    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, 500);

  const handleClick = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    });
  };

  return (
    <section className="text-center space-y-6 flex flex-col justify-between">
      <h2 className="text-4xl text-center">Congratulations!!! 🥳</h2>
      <div className="space-y-6">
        <Button color="danger" onClick={handleClick}>
            More <span className="font-bold">surprise</span> for you, click me!
        </Button>
        <Link className="block underline" href={"/"}>Explore More Events</Link>
      </div>
    </section>
  );
};
