import './ChartBar.css'

const ChartBar = ({data}) => {
  const {label, value, max} = data
  const fillHeight = '' + (value/max * 100) + '%'

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