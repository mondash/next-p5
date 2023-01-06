"use client";

import React from "react";

import useIsUnmounted from "@/hooks/useIsMounted";
import cn from "@/lib/cn";
import type { PSketch } from "./helpers";

// TODO Global p5 mode?
// import p5 from "p5";
// declare global {
//   interface Window {
//     p5: typeof p5;
//   }
// }
// window.p5 = p5;

// TODO somehow make `p` global in function closure
// to allow calling p5 functions without prefix.
// Note that `p` is an instance of the sketch...

// TODO Sizing options, fullscreen, expandable, etc.

// TODO some actual error handling

export type Props = {
  app: (p: PSketch) => void;
  className?: string;
};

export default function Sketch({ app, className }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const sketch = React.useRef<PSketch>();
  const isUnmounted = useIsUnmounted();

  // For use with global p5 mode.
  // React.useEffect(() => {
  //   console.log("effect", ref.current);

  //   function cleanup() {
  //     console.log("cleanup");
  //     sketch.current?.remove();
  //     sketch.current = undefined;
  //   }

  //   if (!ref.current) return cleanup;
  //   if (sketch.current) cleanup();

  //   sketch.current = new p5(app, ref.current);

  //   return cleanup;
  // }, [app]);

  React.useEffect(() => {
    console.log("effect", ref.current);

    function cleanup() {
      console.log("cleanup");
      sketch.current?.remove();
      sketch.current = undefined;
    }

    async function init() {
      const p5 = (await import("p5")).default;
      if (isUnmounted()) return;
      console.log("p5", p5);

      if (!ref.current) return cleanup; // TODO don't like this...
      if (sketch.current) cleanup(); // TODO don't like this either...

      sketch.current = new p5(app, ref.current);
    }

    void init();
    return cleanup;
  }, [app, isUnmounted]);

  return <figure className={cn("min-w-min min-h-min", className)} ref={ref} />;
}
