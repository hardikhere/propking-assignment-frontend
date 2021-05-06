import React, { useEffect, useState } from 'react'
import { AppBar, Button, Toolbar, makeStyles, IconButton } from '@material-ui/core'
import { useHistory } from 'react-router';
const useStyle = makeStyles((theme) => ({
    mybtn: {
        color: "white"
    },
    appbar: {
        height: '4rem'
    },
    root: {
        flexGrow: 1
    }
}))
const NavBar = () => {
    const classes = useStyle();
    const history = useHistory();
    const [isLoggedout, setisLoggedout] = useState(!!!window.localStorage.getItem("token"));

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <Button className={classes.mybtn}
                        onClick={() => {
                            history.push("/")
                        }}
                    >Home</Button>
                    {
                        isLoggedout ? <React.Fragment>
                            <Button className={classes.mybtn}
                                onClick={() => {
                                    history.push("/login")
                                }}
                            >Login</Button>
                            <Button className={classes.mybtn}
                                onClick={() => {
                                    history.push("/signup")
                                }}
                            >Signup</Button>
                        </React.Fragment> : <Button
                            className={classes.mybtn}
                            onClick={() => {
                                window.localStorage.removeItem("token");
                                setisLoggedout(true)
                            }}>
                            Logout
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
