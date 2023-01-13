import React from "react";

import * as bar from "@/sketches/bar";
import * as foo from "@/sketches/foo";

const HANDLERS = [
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
type Handler = (typeof HANDLERS)[number];
type SketchModule = Partial<Record<Handler, () => void>>;

const SKETCHES: Record<string, SketchModule> = { bar, foo };

// TODO Investigate typing and runtime handling of empty handlers
const EMPTY = () => undefined;

function cleanup() {
  if (typeof window.remove === "function") window.remove();
  HANDLERS.forEach((h) => (window[h] = EMPTY));
  window.p5 = null!;
}

// TODO Investigate stale handlers and their side effects
function loadHandlers(id: string) {
  const sketch = SKETCHES[id];
  HANDLERS.forEach((h) => (window[h] = sketch?.[h] ?? EMPTY));
}

function loadP5() {
  void import("p5").then((mod) => (window.p5 = mod.default));
  return cleanup;
}

export function useSketch(id: string) {
  React.useEffect(() => loadHandlers(id), [id]);
  React.useEffect(() => loadP5(), []);
}
