import React from 'react'
import PropTypes from 'prop-types'
import MuiCard from '@material-ui/core/Card'

/**
 * @classdesc
 * Cards are surfaces that display content and actions on a single topic,
 * They should be easy to scan for relevant and actionable information.
 *
 * ## Import
 * ```jsx
 * import Card from '@/components/Card'
 * ```
 *
 * @category UI
 * @component
 * @example <caption>Default</caption>
 * const text = 'some example text'
 * return (
 *  <Card headerText={text}>
 *  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 *  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 *  when an unknown printer took a galley of type and scrambled
 *  </Card>
 * )
 *
 * @example <caption>With Image</caption>
 * return (
 *   <Card headerText="My Image">
 *     <img src="https://placeimg.com/300/300/any" />
 *   </Card>
 * )
 * @return {React.ReactElement} - React component
 */
const Card = (props) => {
  const { headerText, children, ...others } = props
  return (
    <div {...others}>
      <MuiCard>
        {headerText && (
          <div className="kx-card-header">
            <h5>{headerText}</h5>
          </div>
        )}

        <div className="kx-card-body">{children}</div>

        <style jsx>{`
          .kx-card-header {
            background-color: initial;
            border-bottom: 2px solid #f0f0f0;
            padding: 15px 10px;
            position: relative;
            margin: 0 15px;

            h5 {
              font-size: 24px;
              font-family: 'Open Sans', sans-serif;
              font-weight: 700;
              margin-bottom: 0;
              color: #707070;
              padding: 8px 0;
              display: inline-block;
              margin-right: 10px;
              position: relative;

              &:before {
                content: '';
                background-color: #00326b;
                position: absolute;
                left: -25px;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 5px;
                height: 35px;
              }
            }
          }

          .kx-card-body {
            padding: 15px 25px;
          }
        `}</style>
      </MuiCard>
    </div>
  )
}

Card.propTypes = {
  /**
   * Content of the card.
   */
  children: PropTypes.node,
  /** Card title. */
  headerText: PropTypes.string
}

Card.defaultProps = {
  headerText: ''
}

export default Card
