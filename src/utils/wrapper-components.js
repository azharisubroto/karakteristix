// wrapper-component.js
import React from 'react'
import { StyleSheetManager } from 'styled-components'

// import { ThemeProvider } from '@material-ui/core/styles'
// import theme from './theme'

const Component = (props) => {
  const { frameContext } = props
  console.log(frameContext.document.head)
  return (
    <StyleSheetManager target={frameContext.document.head}>
      <>{props.children}</>
    </StyleSheetManager>
  )
}

export default Component
