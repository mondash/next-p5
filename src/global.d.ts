// TODO Make this only apply to global sketch pages

import "p5/global";
import P5 from "p5";

declare global {
  interface Window extends P5 {
    p5: typeof P5;
  }
}

export as namespace p5;
