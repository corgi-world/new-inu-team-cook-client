import React, { useCallback, useMemo } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useRecoilValue } from "recoil";
import {
  ageSelector,
  genderSelector,
  linkSelector,
  relatedKeywordSelector,
  summarySelector,
} from "../../data/atom";

import DonutChart from "./DonutChart";
import BarChart from "./BarChart";

import { iNodeItem, iNodeItems, iLinkItems } from "../../forceGraph/types";
import Graph from "../../forceGraph/Graph";

interface iDetail {
  selectedNode: iNodeItem;
  onOverlayClick: () => void;
}

export default function Detail({ selectedNode, onOverlayClick }: iDetail) {
  const { name } = selectedNode;

  const gender = useRecoilValue(genderSelector(name));
  const age = useRecoilValue(ageSelector(name));
  const link = useRecoilValue(linkSelector(name));
  const summary = useRecoilValue(summarySelector(name));
  const relatedKeywords = useRecoilValue(relatedKeywordSelector(name));

  const getNodeItems = useCallback(
    (data: string[]): iNodeItems => {
      const items = data.map((keyword, index) => {
        return { id: index + 1, name: keyword };
      });
      return [{ id: 0, name }, ...items];
    },
    [name]
  );
  function getLinkItems(data: string[]): iLinkItems {
    if (!data) return [];

    return data.map((keyword, index) => {
      return { source: 0, target: index + 1, id: index };
    });
  }

  const nodeItems = useMemo<iNodeItems>(
    () => getNodeItems(relatedKeywords),
    [relatedKeywords, getNodeItems]
  );
  const linkItems = useMemo<iLinkItems>(
    () => getLinkItems(relatedKeywords),
    [relatedKeywords]
  );

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Overlay
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={onOverlayClick}
    >
      <ContentsWrapper onClick={stopPropagation}>
        <Title>{name}</Title>
        <ChartWrapper>
          <DonutChart data={gender} />
          <BarChart data={age} />
        </ChartWrapper>
        <Link href={link} target="_blank">
          {link}
        </Link>
        <SummaryBox>{summary}</SummaryBox>
      </ContentsWrapper>
      <GraphWrapper onClick={stopPropagation}>
        <Graph
          width={550}
          height={720}
          nodeItems={nodeItems}
          linkItems={linkItems}
          calcFontSize={(id) => (id === 0 ? 45 : 25)}
          calcFontWeight={(id) => (id === 0 ? "600" : "200")}
          onNodeClick={(id, name) => {
            window.open(`https://www.google.com/search?q=${name}`, "_blank");
          }}
        />
      </GraphWrapper>
    </Overlay>
  );
}

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 720px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 600;
`;

const ContentsWrapper = styled(Wrapper)`
  width: 1000px;
  flex-direction: column;
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  font-size: 20px;
  color: black;
`;

const SummaryBox = styled.div`
  margin-top: 35px;
  font-size: 22px;
  line-height: 33px;
  word-spacing: 8px;
`;

const GraphWrapper = styled(Wrapper)`
  width: 550px;
`;

const variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
};
