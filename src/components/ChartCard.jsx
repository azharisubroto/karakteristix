import PropTypes from 'prop-types'
import React from 'react'
import CanvasJSReact from '../utils/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

/**
 * @classdesc
 * To display cart data
 *
 * ## Import
 * ```jsx
 * import ChartCard from '@/components/ChartCard'
 * ```
 *
 * @category UI
 * @component
 *
 * @example <caption>Basic</caption>
 * const data = {
 *  "form_id":1,
 *  "title":null,
 *  "description":null,
 *  "question_id":6,
 *  "parent_id":null,
 *  "question":"Edukasi",
 *  "format":"short_answer",
 *  "answers":[
 *      {
 *        "value":"S1",
 *        "color":"#90f3c8",
 *        "size":17
 *      },
 *      {
 *        "value":"SD",
 *        "color":"#25f45c",
 *        "size":1
 *      },
 *      {
 *        "value":"Tidak Sekolah",
 *        "color":"#527de5",
 *        "size":1
 *      },
 *      {
 *        "value":"SMP",
 *        "color":"#d2ed59",
 *        "size":1
 *      },
 *      {
 *        "value":"SMA",
 *        "color":"#3d3d92",
 *        "size":1
 *      },
 *      {
 *        "value":"Komunikasi",
 *        "color":"#d4eafe",
 *        "size":1
 *      }
 *  ],
 *  "childrens":null
 * }
 *
 * return (
 *  <>
 *  <ChartCard object={data} key="data-1" />
 *  <ChartCard object={data} key="data-2" />
 *  </>
 * )
 *
 * @return {React.ReactElement} - React component
 */
const ChartCard = (props) => {
  const { object } = props

  const [options, setItems] = React.useState([])

  React.useEffect(() => {
    let datas = object.answers
    let tempDatas = []

    if (datas && datas.length > 0) {
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

ChartCard.propTypes = {
  /**
   * An Object that should be passed to display the chart data
   */
  object: PropTypes.object.isRequired
}

export default ChartCard
