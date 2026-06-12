
import { Chart } from "react-google-charts";

// export const data = [
//   ["Datetime", "Value"]
// ];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export function GoogleChart({data}: any) {
  return (
    <Chart
      chartType="ScatterChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
