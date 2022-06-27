import { useRef, useEffect } from "react";
import * as d3 from "d3";

import { iNode } from "./types";

export default function Node({ FORCE, data, fontSize, fontWeight, onNodeClick }: iNode) {
  const gRef = useRef<SVGGElement>(null);

  const { id, name } = data;

  useEffect(() => {
    d3.select(gRef.current)
      .datum(data)
      .call(FORCE.enterNode)
      .style("font-weight", fontWeight)
      .style("font-size", `${fontSize}px`);

    const widthFactor = id === 0 ? 45 : 25;
    const xFactor = widthFactor / 2;
    const height = id === 0 ? 60 : 40;
    const y = id === 0 ? 35 : 25;
    const backgroundColor = id === 0 ? "white" : "transparent";

    d3.select(gRef.current)
      .select("rect")
      .attr("width", name.length * widthFactor)
      .attr("height", height)
      .attr("x", -name.length * xFactor)
      .attr("y", -y)
      .style("fill", backgroundColor);
  }, [FORCE, id, name, data, fontSize, fontWeight]);

  return (
    <g className="node" ref={gRef}>
      <rect />
      <text onClick={() => onNodeClick(id, name)}>{name}</text>
    </g>
  );
}
