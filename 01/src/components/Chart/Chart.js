import './Chart.css'

import ChartBar from "./ChartBar"

const Chart = ({dataPoints}) => {
  const values = dataPoints.map(dataPoint => dataPoint.value)
  const max = Math.max(...values)

  return (
    <div className="chart">
      {dataPoints.map(data => <ChartBar key={data.label} data={data} max={max}/>)}
    </div>
  )
}

export default Chart