import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import {Link} from "react-router-dom"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avatar from "../avatar.png"
import {makeStyles} from '@material-ui/core/styles'

//====== CSS STYLES ============
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: '#9e9d24',
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: '#524c00'
    }
}))
//===============================

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    },
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open})
    })
    const classes = useStyles()

    const sideList = slider => (
         <Box component="div" className={classes.menuSliderContainer} onClick={toggleSlider('right', false)}>
                <Avatar className={classes.avatar} src={avatar} alt="Adejuwon Tayo" />
                <Divider />
                <List>
                    {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                    ))}
                </List>
            </Box>
    )
    return (
        <>

            <Box component="nav">
                <AppBar position="static" style={{background: '#ffeb3b'}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{color: '#000'}}/>
                        </IconButton>
                        <Typography variant ="h5" style ={{color: "#000"}}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider('right', false)}
                        >
                            {sideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
