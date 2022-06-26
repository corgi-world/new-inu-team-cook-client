import { useRef, useEffect } from "react";

import { iGraph } from "./types";

import Node from "./Node";
import Link from "./Link";

import styled from "styled-components";

export default function Graph({
  FORCE,
  nodeItems,
  linkItems,
  calcFontSize,
  calcFontWeight,
  onNodeClick,
}: iGraph) {
  const gRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    FORCE.initForce(nodeItems, linkItems);
  }, [FORCE, nodeItems, linkItems]);

  useEffect(() => {
    FORCE.tick(gRef.current);
    FORCE.drag();
  });

  const nodes = nodeItems.map((nodeItem) => {
    return (
      <Node
        key={nodeItem.id}
        FORCE={FORCE}
        data={nodeItem}
        fontSize={calcFontSize(nodeItem.id)}
        fontWeight={calcFontWeight(nodeItem.id)}
        onNodeClick={onNodeClick}
      />
    );
  });

  const links = linkItems.map((linkItem) => {
    return <Link key={linkItem.id} FORCE={FORCE} data={linkItem} />;
  });

  return (
    <SVG className="graph" ref={gRef} width={FORCE.width} height={FORCE.height}>
      <g>{links}</g>
      <g>{nodes}</g>
    </SVG>
  );
}

const SVG = styled.svg`
  overflow: visible;
`;
