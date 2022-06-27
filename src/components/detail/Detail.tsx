import React from "react";

import { iNodeItem } from "../../forceGraph/types";

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

interface iDetail {
  selectedNode: iNodeItem;
  onOverlayClick: () => void;
}

export default function Detail({ selectedNode, onOverlayClick }: iDetail) {
  const { id, name } = selectedNode;

  const gender = useRecoilValue(genderSelector(name));
  const age = useRecoilValue(ageSelector(name));
  const link = useRecoilValue(linkSelector(name));
  const summary = useRecoilValue(summarySelector(name));
  const relatedKeywords = useRecoilValue(relatedKeywordSelector(name));

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
      <ContentsWrapper onClick={stopPropagation}></ContentsWrapper>
      <GraphWrapper onClick={stopPropagation}></GraphWrapper>
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
  justify-content: center;
  align-items: center;

  padding: 30px;
`;

const ContentsWrapper = styled(Wrapper)`
  width: 1000px;
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
