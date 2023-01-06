import type { PSketch } from "@/components/sketch";

export default function foo(p: PSketch) {
  let angle = 0;
  let hue = 0;
  p.preload = () => {
    console.log("preload");
  };
  p.setup = () => {
    console.log("p", p);
    p.createCanvas(600, 400);
    p.frameRate(60);
  };
  p.draw = () => {
    p.background(0, 0.05);
    p.colorMode(p.HSB);
    p.fill(hue, 100, 100);

    p.circle(200, 200, 50 + (Math.random() - 0.5) * 10);

    p.push();
    p.translate(300, 200);
    p.rotate(angle);
    p.rect(0, 0, 50, 50);
    p.pop();

    angle += 0.05;
    angle %= 2 * Math.PI;
    hue += 2;
    hue %= 360;
  };
}
