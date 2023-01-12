"use client";

import React from "react";

import * as bar from "@/sketches/bar";
import * as foo from "@/sketches/foo";

type SketchId = keyof typeof sketchMap;
const sketchMap = { bar, foo } as const;
const SKETCH_IDS = Object.keys(sketchMap) as SketchId[];

function isSketchId(s: unknown): s is SketchId {
  return SKETCH_IDS.includes(s as SketchId);
}

type P5Handler = typeof P5_HANDLERS[number];
const P5_HANDLERS = [
  "draw",
  "windowResized",
  "preload",
  "mouseClicked",
  "doubleClicked",
  "mouseMoved",
  "mousePressed",
  "mouseWheel",
  "mouseDragged",
  "mouseReleased",
  "keyPressed",
  "keyReleased",
  "keyTyped",
  "touchStarted",
  "touchMoved",
  "touchEnded",
  "deviceMoved",
  "deviceTurned",
  "deviceShaken",
] as const;

export type Props = {
  params: { id: string };
};

export default function SketchPage({ params }: Props) {
  console.log("render", JSON.stringify(params));

  React.useEffect(() => {
    console.log("effect");

    // TODO Don't like this...
    function cleanup() {
      if (typeof window.remove === "function") window.remove();
      window.p5 = null!;
      P5_HANDLERS.forEach((h) => (window[h] = null!));
    }

    async function init() {
      cleanup();
      if (!isSketchId(params.id)) return;
      Object.assign(window, sketchMap[params.id]);
      window.p5 = await import("p5").then((m) => m.default);
      console.log("after");
    }

    void init();
    return cleanup;
  }, [params.id]);

  return <body />;
}
