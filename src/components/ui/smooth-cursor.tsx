"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "motion/react";

export function SmoothCursor() {
  const [mounted, setMounted] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isOverPointer, setIsOverPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);

  // Spring physics untuk gerakan luwes dan responsif
  const cursorX = useSpring(0, { stiffness: 1200, damping: 80, mass: 0.2 });
  const cursorY = useSpring(0, { stiffness: 1200, damping: 80, mass: 0.2 });
  const rotation = useSpring(0, { stiffness: 800, damping: 60, mass: 0.3 });
  const scale = useSpring(1, { stiffness: 1000, damping: 65, mass: 0.25 });

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
    }
  }, []);

  useEffect(() => {
    if (!mounted || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (e.clientX - lastMousePos.current.x) / deltaTime,
          y: (e.clientY - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = { x: e.clientX, y: e.clientY };

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!hasMoved) setHasMoved(true);

      // Hitung kecepatan gerak kursor
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);

      if (speed > 0.15) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI);
        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;
      }

      // Deteksi elemen interaktif di bawah kursor
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isClickable =
          element.closest("a, button, input, textarea, select, [role='button'], label") !== null ||
          window.getComputedStyle(element).cursor === "pointer";
        setIsOverPointer(isClickable);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      scale.set(0.85);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      scale.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mounted, isTouchDevice, hasMoved, cursorX, cursorY, rotation, scale]);

  if (!mounted || isTouchDevice || !hasMoved) {
    return null;
  }

  return (
    <>
      {/* 1. Titik Kursor Utama (Dot) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isClicking
              ? "h-2 w-2 bg-blue-700"
              : isOverPointer
              ? "h-2.5 w-2.5 bg-blue-600 shadow-sm"
              : "h-2 w-2 bg-slate-900"
          }`}
        />
      </motion.div>

      {/* 2. Cincin Kursor Luar (Interactive Halo Ring) dengan Spring Lag & Rotasi */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          rotate: rotation,
          scale,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ease-out ${
            isOverPointer
              ? "h-11 w-11 border-blue-600/70 bg-blue-500/10 backdrop-blur-[1px]"
              : isClicking
              ? "h-7 w-7 border-blue-700/80 bg-blue-600/15"
              : "h-8 w-8 border-slate-400/50 bg-slate-400/5"
          }`}
        />
      </motion.div>
    </>
  );
}
