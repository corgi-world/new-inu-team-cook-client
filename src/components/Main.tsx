import { useState, useMemo } from "react";

import Clock from "react-live-clock";

import { useQuery } from "react-query";
import { fetchTopic, iTopic } from "../data/api";

import { iForce, iNodeItem, iNodeItems, iLinkItems } from "../forceGraph/types";
import getForce from "../forceGraph/force";
import Graph from "../forceGraph/Graph";

import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import Detail from "./Detail";

export default function Main() {
  const { data } = useQuery<iTopic[]>("topic", fetchTopic, {
    onSuccess: (data) => {},
    onError: (err) => {},
    suspense: true,
  });

  const FORCE = useMemo<iForce>(
    () => getForce(window.innerWidth * 0.9, window.innerHeight - 120),
    []
  );

  const nodeItems = useMemo<iNodeItems>(() => getNodeItems(data), [data]);
  const linkItems = useMemo<iLinkItems>(() => getLinkItems(data), [data]);

  function getNodeItems(data: iTopic[] | undefined): iNodeItems {
    if (!data) return [];

    return data.map(({ keyword }, index) => {
      return { id: 30 - index, name: keyword };
    });
  }
  function getLinkItems(data: iTopic[] | undefined): iLinkItems {
    if (!data) return [];

    return [];
  }

  const [selectedNode, setSelectedNode] = useState<iNodeItem | null>(null);

  const onNodeClick = (id: number, name: string) => {
    setSelectedNode({ id, name });
  };

  const onOverlayClick = () => {
    setSelectedNode(null);
  };

  return (
    <>
      <Wrapper>
        <ClockBox>
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"} />
        </ClockBox>
        <Graph
          FORCE={FORCE}
          nodeItems={nodeItems}
          linkItems={linkItems}
          calcFontSize={(id) => Math.floor(15 + 2.5 * id)}
          calcFontWeight={(id) => {
            const arr = ["200", "300", "400", "500", "600", "700", "900"];
            const v = Math.floor(id / 5);
            return arr[v];
          }}
          onNodeClick={onNodeClick}
        />
      </Wrapper>
      <AnimatePresence>
        {selectedNode && (
          <Detail selectedNode={selectedNode} onOverlayClick={onOverlayClick} />
        )}
      </AnimatePresence>
    </>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ClockBox = styled.div`
  font-size: 50px;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 30px;
`;
