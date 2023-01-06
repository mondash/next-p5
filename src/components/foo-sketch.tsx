"use client";

import foo from "@/sketches/foo";
import Sketch from "./sketch";

export default function FooSketch() {
  return <Sketch className="p-24" app={foo} />;
}
