import './Chart.css'

import ChartBar from "./ChartBar"

const Chart = ({dataPoints}) => {
  return (
    <div className="chart">
      {dataPoints.map(data => <ChartBar key={data.label} data={data}/>)}
    </div>
  )
}

export default Chart