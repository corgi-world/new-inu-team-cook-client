import { useRef, useEffect } from "react";
import * as d3 from "d3";

import { iNode } from "./types";

export default function Node({ FORCE, data, fontSize, fontWeight, onNodeClick }: iNode) {
  const gRef = useRef<SVGGElement>(null);

  useEffect(() => {
    d3.select(gRef.current)
      .datum(data)
      .call(FORCE.enterNode)
      .style("font-weight", fontWeight)
      .style("font-size", `${fontSize}px`);
  }, [FORCE, data, fontSize, fontWeight]);

  const { id, name } = data;

  return (
    <g className="node" ref={gRef}>
      <text onClick={() => onNodeClick(id, name)}>{name}</text>
    </g>
  );
}
