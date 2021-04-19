import MuiCard from '@material-ui/core/Card'
const Card = ({ headerText, children }) => {
  return (
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
  )
}

export default Card