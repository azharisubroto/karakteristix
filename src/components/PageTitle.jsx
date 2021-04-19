const PageTitle = ({ title }) => {
  return (
    <>
      <div className="d-flex">
        <h5>{title}</h5>
      </div>

      <style jsx>{`
        h5 {
          font-size: 30px;
          color: #00326b;
          margin: 0;
          font-weight: 700;
        }
        div {
          border-bottom: 2px solid #d1d1d1;
          margin-bottom: 30px;
          padding-bottom: 10px;
        }
      `}</style>
    </>
  )
}

export default PageTitle
