import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Button, CardActions, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "60%",
        marginTop: "2%",
        marginBottom: "2%"
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },
    danger: {
        color: "red"
    }
});

const LandCard = ({ name, city, state, country, _id, ToggleShowDeleteModal, toggleEditModal }) => {
    const classes = useStyles();
    const [openDeleteModal, setopenDeleteModal] = useState(false);
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}
                    color="textSecondary" gutterBottom>
                    {name}
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                    {city}, {state}, {country}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" onClick={toggleEditModal}>Edit</Button>
                <Button size="small"
                    color="primary"
                    onClick={ToggleShowDeleteModal}
                    handleClose={ToggleShowDeleteModal}
                    className={classes.danger}>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default LandCard
