import { useRef, useEffect } from "react";
import * as d3 from "d3";

import { iLink } from "./types";

export default function Link({ FORCE, data }: iLink) {
  const gRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    d3.select(gRef.current).datum(data).call(FORCE.enterLink);
  }, [FORCE, data]);

  return <line className="link" ref={gRef} />;
}
