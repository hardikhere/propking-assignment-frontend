import React, { useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import isAuthenticated from '../../utils/isAuthenticated';
import axiosInstance from '../../utils/axiosInstance';
import APIS from '../../utils/endpoints';

const DeleteModal = (props) => {
    const history = useHistory();
    useEffect(() => {
        if (props.open) {
            isAuthenticated().then(res => {
                if (!res.success) {
                    console.log("adasd", res);
                    window.localStorage.clear();
                    history.push("/login");
                }
            })
        }
    }, [props.open]);

    const handleDelete = () => {
        axiosInstance.delete(APIS.delete(props._id))
            .then(res => {
                console.log(res.data);
                window.location.reload();
            })
    }
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {`Are you sure you want to delete ${props.name}?`}
            </DialogTitle>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Close
                </Button>
                <Button onClick={handleDelete} color="primary" autoFocus>
                    Delete
               </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteModal
