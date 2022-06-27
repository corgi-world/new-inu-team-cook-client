import styled from "styled-components";

export default function Loader() {
  return <Wrapper>불러오는 중</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  font-size: 50px;
  font-weight: 600;
`;
