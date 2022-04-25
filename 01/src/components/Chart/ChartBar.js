import './ChartBar.css'

const ChartBar = ({data, max}) => {
  const {label, value} = data
  const fillHeight = max > 0 ? '' + (value/max * 100) + '%' : '0%'

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: fillHeight}}></div>
      </div>
      <div className="chart-bar__label">
        {label}
      </div>
    </div>
  )
}

export default ChartBar