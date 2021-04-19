import React from 'react'
import CanvasJSReact from '@/utils/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const ChartCard = (props) => {
  const { object } = props

  const [options, setItems] = React.useState([])

  React.useEffect(() => {
    let datas = object.answers
    let tempDatas = []

    if (datas.length > 0) {
      datas.forEach((el) => {
        let obj = {
          y: el.size,
          label: el.value,
          color: el.color
        }
        tempDatas.push(obj)
      })
      // console.log(tempDatas)
    }

    let options = {
      exportEnabled: true,
      animationEnabled: true,
      height: 290,

      legend: {
        verticalAlign: 'center',
        horizontalAlign: 'right'
      },
      data: [
        {
          type: 'doughnut',
          startAngle: 180,
          toolTipContent: '<b>{label}</b>: {y}',
          showInLegend: 'true',
          legendText: '{label}',
          indexLabelFontSize: 12,
          indexLabel: ' {label} ',
          dataPoints: tempDatas
        }
      ]
    }

    setTimeout(() => {
      setItems(options)
    }, 1000)
  }, [object])

  return (
    <>
      <CanvasJSChart options={options} />
    </>
  )
}

export default ChartCard
