import { ResponsivePieCanvas } from "@nivo/pie";
import { data } from "../data/pieChart.data";

export const MyResponsivePie = () => (
  <ResponsivePieCanvas
    data={data}
    margin={{ top: 40, right: 0, bottom: 40, left: 0, }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "paired", }}
    borderColor={{
      from: "color",
      modifiers: [
        [
          "darker",
          0.6
        ]
      ],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color", }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor="#333333"
  />
);
