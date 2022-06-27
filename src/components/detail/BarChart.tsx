import styled from "styled-components";

import ApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface iBarChart {
  data: number[];
}

export default function BarChart({ data }: iBarChart) {
  const series = [{ name: "", data }];
  const options: ApexOptions = {
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["10대", "20대", "30대", "40대", "50대", "60대~"],
      position: "bottom",
    },
    tooltip: {
      marker: { show: false },
      style: {
        fontSize: "18px",
        fontFamily: "Noto Serif KR",
      },
      y: {
        formatter: (v: number) => v + "%",
      },
    },
    colors: ["#ffaa00"],
    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <Wrapper>
      <ApexChart type="bar" series={series} options={options} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 400px;
`;
