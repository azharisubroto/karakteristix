import React from 'react'
import { makeStyles } from '@material-ui/styles'
import useUser from '@/utils/useUser'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import { AiOutlineLineChart } from '@react-icons/all-files/ai/AiOutlineLineChart'
import { IoNotificationsOutline } from '@react-icons/all-files/io5/IoNotificationsOutline'
import { CgPoll } from '@react-icons/all-files/cg/CgPoll'
import { RiSurveyLine } from '@react-icons/all-files/ri/RiSurveyLine'
import { RiArticleLine } from '@react-icons/all-files/ri/RiArticleLine'
import { RiCouponLine } from '@react-icons/all-files/ri/RiCouponLine'
import { GoChevronDown } from '@react-icons/all-files/go/GoChevronDown'
import { GoChevronUp } from '@react-icons/all-files/go/GoChevronUp'

const useStyles = makeStyles(() => ({
  listtext: {
    color: '#fff',
    '& .MuiTypography-body1': {
      fontSize: 20
    }
  }
}))

const SidebarMenu = (props) => {
  const { ...other } = props
  const classes = useStyles()
  const { user } = useUser({ redirectTo: '/login' })
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div {...other}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItem button>
            <ListItemIcon>
              <AiOutlineLineChart size={30} color="#fff" />
            </ListItemIcon>
            <ListItemText className={classes.listtext} primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IoNotificationsOutline size={30} color="#fff" />
            </ListItemIcon>
            <ListItemText className={classes.listtext} primary="Notifications" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <RiSurveyLine size={30} color="#fff" />
            </ListItemIcon>
            <ListItemText className={classes.listtext} primary="Survey" />
            {open ? <GoChevronUp size={30} color="#fff" /> : <GoChevronDown size={30} color="#fff" />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>{'i'}</ListItemIcon>
                <ListItemText className={classes.listtext} primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <CgPoll size={30} color="#fff" />
            </ListItemIcon>
            <ListItemText className={classes.listtext} primary="Polling" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <RiArticleLine size={30} color="#fff" />
            </ListItemIcon>
            <ListItemText className={classes.listtext} primary="Article Report" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <RiCouponLine size={30} color="#fff" />
            </ListItemIcon>
            <ListItemText className={classes.listtext} primary="Manage Redeem" />
          </ListItem>
        </List>
      </div>
    </>
  )
}

export default SidebarMenu
