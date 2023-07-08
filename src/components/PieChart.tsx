import { useMediaQuery } from "react-responsive";
import { ResponsivePieCanvas } from "@nivo/pie";
import { data } from "../data/pieChart.data";

const chartTheme = {
  labels: {
    text: {
      fontSize: 14,
    },
  },
};

export const MyResponsivePie = () => {

  let fontSize;
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)", });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)", });
  if (isMediumScreen) {
    fontSize = 20;
  } else if (isLargeScreen) {
    fontSize = 22;
  } else {
    fontSize = 14;
  }

  return (
    <ResponsivePieCanvas
      data={data}
      padAngle={0.8}
      cornerRadius={5}
      innerRadius={0.4}
      sortByValue={false}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "purple_orange", }}
      margin={{ top: 40, right: 0, bottom: 40, left: 0, }}

      arcLinkLabelsOffset={3}
      arcLinkLabelsDiagonalLength={4}
      arcLinkLabelsStraightLength={8}
      arcLinkLabelsTextOffset={3}
      arcLinkLabelsThickness={1}
      arcLinkLabelsTextColor="#726B8E"
      arcLinkLabelsColor="#CACAEF"
      arcLabelsTextColor="#3564b1"

      theme={{
        ...chartTheme,
        labels: {
          ...chartTheme.labels,
          text: {
            ...chartTheme.labels.text,
            fontSize: fontSize,
          },
        },
      }}
    />
  );
};
