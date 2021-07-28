import React from 'react'

const Component = (props) => {
  return (
    <div className="example-box">
      <link rel="stylesheet" href="./build/entry.css" />
      <>{props.children}</>

      <style jsx>{`
        .example-box {
          background: #f5f5f5;
          padding: 20px;
          border-radius: 10px;
          display: flex;
          width: 100%;
          margin: auto;
          display: flex;
          outline: 0;
          position: relative;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Component
