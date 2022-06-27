import styled from "styled-components";

import ApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface iDonutChart {
  data: number[];
}

export default function DonutChart({ data }: iDonutChart) {
  const series = data;
  const options: ApexOptions = {
    chart: {},
    dataLabels: { enabled: false },
    labels: ["남성", "여성"],
    colors: ["#52a8f3", "#ff6d6e"],
    legend: {
      fontSize: "18px",
      fontFamily: "Noto Serif KR",
      fontWeight: 400,
      position: "right",
      offsetY: 30,
    },
    tooltip: {
      style: {
        fontSize: "18px",
        fontFamily: "Noto Serif KR",
      },
      y: {
        formatter: (v) => v + "%",
      },
    },
  };

  return (
    <Wrapper>
      <ApexChart type="donut" series={series} options={options} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 350px;
`;
