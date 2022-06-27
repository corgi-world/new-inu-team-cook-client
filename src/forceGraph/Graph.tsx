import { useMemo, useState, useRef, useEffect } from "react";

import getForce from "../forceGraph/force";
import { iForce, iGraph } from "./types";
import Node from "./Node";
import Link from "./Link";

import styled from "styled-components";

export default function Graph({
  width,
  height,
  nodeItems,
  linkItems,
  calcFontSize,
  calcFontWeight,
  onNodeClick,
}: iGraph) {
  const FORCE = useMemo<iForce>(() => getForce(width, height), [width, height]);

  const [isInitialize, setIsinitialize] = useState(false);

  useEffect(() => {
    FORCE.initForce(nodeItems, linkItems);

    setIsinitialize(true);
  }, [FORCE, nodeItems, linkItems]);

  const gRef = useRef<SVGSVGElement>(null);

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
    <SVG
      className="graph"
      ref={gRef}
      width={FORCE.width}
      height={FORCE.height}
      isInitialize={isInitialize}
    >
      <g>{links}</g>
      <g>{nodes}</g>
    </SVG>
  );
}

interface iSVG {
  isInitialize: boolean;
}

const SVG = styled.svg<iSVG>`
  overflow: visible;
  visibility: ${(props) => (props.isInitialize ? "visible" : "hidden")};
`;
