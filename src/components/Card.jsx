"use client";

import { motion, useSpring, useTransform } from "motion/react";

const sheenSize = 1000;
const cardRotation = 15;
const cardScale = 1.07;

export const Card = ({ children }) => {
  const xPcnt = useSpring(0, { bounce: 0 });
  const yPcnt = useSpring(0, { bounce: 0 });
  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });
  const scale = useSpring(1, { bounce: 0 });

  // Calculated rotation values for styling
  const rotateX = useTransform(
    yPcnt,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );
  const rotateY = useTransform(
    xPcnt,
    [-0.5, 0.5],
    [`${cardRotation}deg`, `-${cardRotation}deg`]
  );

  // Calculated sheen values for styling
  const sheenX = useTransform(() => mouseX.get() - sheenSize / 2);
  const sheenY = useTransform(() => mouseY.get() - sheenSize / 2);

  // Helper function for getting mouse position
  const getMousePosition = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const currentMouseX = e.clientX - left;
    const currentMouseY = e.clientY - top;

    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    };
  };

  // Mouse event handlers
  const handleMouseMove = (e) => {
    const { currentMouseX, currentMouseY, containerWidth, containerHeight } =
      getMousePosition(e);

    xPcnt.set(currentMouseX / containerWidth - 0.5);
    yPcnt.set(currentMouseY / containerHeight - 0.5);

    mouseX.set(currentMouseX);
    mouseY.set(currentMouseY);
  };

  const handleMouseEnter = (e) => {
    const { currentMouseX, currentMouseY } = getMousePosition(e);

    mouseX.jump(currentMouseX);
    mouseY.jump(currentMouseY);
    scale.set(cardScale);
  };

  const handleMouseLeave = (e) => {
    xPcnt.set(0);
    yPcnt.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="overflow-hidden relative duration-100 rounded-xl hover:dark:bg-zinc-800/10 group md:gap-8 border border-zinc-400 hover:dark:border-zinc-400/50 dark:border-zinc-700 shadow-md hover:shadow-xl"
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        scale,
      }}
    >
      <motion.div
        className="absolute z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-100 rounded-full blur-md"
        style={{
          height: sheenSize,
          width: sheenSize,
          background: "radial-gradient(white, #3984ff00 80%)",
          left: sheenX,
          top: sheenY,
        }}
      />
      {children}
    </motion.div>
  );
};
