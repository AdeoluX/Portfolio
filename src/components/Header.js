import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import Typed from "react-typed"
import avatar from '../avatar.png'


//======== CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#fff"
    },
    subtitle: {
        color: '#ffeb3b',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))



const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid  container justify="center">
            <Avatar src={avatar} alt="Adejuwon Tayo" className={classes.avatar}/>
            </Grid>
            <Typography variant="h4" className={classes.title}>
                <Typed strings={["Adejuwon Tayo"]} typeSpeed={40}/>
            </Typography>
            <br />
             <Typography variant="h5" className={classes.subtitle}>
                <Typed
                    strings={["React Native", "React js", "Google Appscript", "Node js", "MERN Stack", "Unity3D", "Data Science", "Python"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header
