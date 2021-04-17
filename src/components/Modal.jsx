import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Modal = (props) => {
  const { open, heading, children } = props
  const border = '1px solid #dee2e6'
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="sm"
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle style={{ borderBottom: border, padding: '1rem' }}>{heading}</DialogTitle>
        <div>{children}</div>
      </Dialog>
    </>
  )
}

export default Modal
