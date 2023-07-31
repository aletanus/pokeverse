import dynamic from "next/dynamic";
import { data } from "../data/pieChart.data";
import { ColorSchemeId } from "@nivo/colors";
import { useMediaQuery } from "react-responsive";

const ResponsivePieCanvas = dynamic(
  () => import("@nivo/pie").then((mod) => mod.ResponsivePieCanvas),
  { ssr: false, }
);

const chartTheme = {
  labels: {
    text: {
      fontSize: 14,
    },
  },
};

export function MyResponsivePie() {

  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)", });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)", });
  let fontSize = 14;
  if (isMediumScreen) fontSize = 20;
  if (isLargeScreen) fontSize = 22;

  return (
    <ResponsivePieCanvas
      data={data}
      padAngle= {0.8}
      cornerRadius= {5}
      innerRadius= {0.4}
      sortByValue= {false}
      activeOuterRadiusOffset= {8}
      colors = {{ scheme: "purple_orange" as ColorSchemeId, }}
      margin= {{ top: 40, right: 0, bottom: 40, left: 0, }}
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
}
