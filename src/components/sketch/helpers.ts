import type p5 from "p5";
import z from "zod";

// Using separate file for these because
// sketch.tsx can't be imported on the server

export type PSketch = InstanceType<typeof p5>;

// TODO These might be useful...
export const P5_PROPS_SCHEMA = z.enum([
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
]);
export type P5Prop = z.infer<typeof P5_PROPS_SCHEMA>;

export function isP5Prop(key: unknown): key is P5Prop {
  return P5_PROPS_SCHEMA.safeParse(key).success;
}

// TODO This is gross...
export type WithP<T extends () => unknown> = (
  p: PSketch,
  ...args: Parameters<T>
) => ReturnType<T>;

// TODO potential use with accepting these directly as props...
export type P5Callbacks = {
  [prop in P5Prop]: WithP<p5[prop]>;
};
