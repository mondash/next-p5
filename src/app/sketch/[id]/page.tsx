"use client";

import { useSketch } from "@/lib/p5";
import React from "react";

export type Props = {
  params: { id: string };
};

export default function SketchPage({ params }: Props) {
  console.log("render", JSON.stringify(params));

  useSketch(params.id);

  return <body />;
}
