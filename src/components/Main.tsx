import { useState, useMemo } from "react";

import Clock from "react-live-clock";

import { useQuery } from "react-query";
import { fetchTopic, iTopic, SAMPLE_DATA } from "../data/api";

import { useRecoilState } from "recoil";
import { topicAtom } from "../data/atom";

import { iNodeItem, iNodeItems, iLinkItems } from "../forceGraph/types";
import Graph from "../forceGraph/Graph";

import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import Detail from "./detail/Detail";

export default function Main() {
  const [topic, setTopic] = useRecoilState<iTopic[]>(topicAtom);

  useQuery<iTopic[] | null>("topic", fetchTopic, {
    onSuccess: (data) => {
      if (!data) {
        setTopic(SAMPLE_DATA);
      } else {
        setTopic(data);
      }
    },
    suspense: true,
  });

  const nodeItems = useMemo<iNodeItems>(() => getNodeItems(topic), [topic]);
  const linkItems = useMemo<iLinkItems>(() => getLinkItems(topic), [topic]);

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
          width={window.innerWidth * 0.9}
          height={window.innerHeight - 120}
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
