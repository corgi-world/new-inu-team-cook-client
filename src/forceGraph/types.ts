export interface iForce {
  width: number;
  height: number;
  enterNode: (
    selection: d3.Selection<SVGGElement | null, iNodeItem, null, undefined>
  ) => void;
  updateNode: (
    selection: d3.Selection<SVGGElement | null, iNodeItem, null, undefined>
  ) => void;
  enterLink: (
    selection: d3.Selection<SVGLineElement | null, iLinkItem, null, undefined>
  ) => void;
  updateLink: (
    selection: d3.Selection<SVGLineElement | null, iLinkItem, null, undefined>
  ) => void;
  updateGraph: (
    selection: d3.Selection<SVGSVGElement | null, iNodeItem, null, undefined>
  ) => void;
  initForce: (nodeItems: iNodeItems, linkItems: iLinkItems) => void;
  drag: () => void;
  tick: (that: SVGSVGElement | null) => void;
}

export interface iNodeItem {
  id: number;
  name: string;
}
export type iNodeItems = iNodeItem[];

export interface iLinkItem {
  source: number;
  target: number;
  id: number;
}
export type iLinkItems = iLinkItem[] | [];

export interface iGraph {
  FORCE: iForce;
  nodeItems: iNodeItems;
  linkItems: iLinkItems;
  calcFontSize: (id: number) => number;
  calcFontWeight: (id: number) => string;
  onNodeClick: (id: number, name: string) => void;
}

export interface iNode {
  FORCE: iForce;
  data: iNodeItem;
  fontSize: number;
  fontWeight: string;
  onNodeClick: (id: number, name: string) => void;
}

export interface iLink {
  FORCE: iForce;
  data: iLinkItem;
}
