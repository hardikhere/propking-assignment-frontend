import React, { useState } from 'react';
import { Button, makeStyles, Paper, TextField } from '@material-ui/core'
import axios from 'axios';
import APIS from '../../utils/endpoints';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const AuthForm = (props) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField label="name"
                value={props.name}
                onChange={props.handleChange("name")} />
            <TextField label="email"
                value={props.email}
                onChange={props.handleChange("email")} />
            <TextField label="password"
                type="password"
                value={props.password}
                onChange={props.handleChange("password")} />
            <Button size="small"
                disabled={props.loading}
                onClick={props.submitHandler}
                color="primary" variant="contained">
                {props.type}
            </Button>
        </form>
    )
}

export default AuthForm
