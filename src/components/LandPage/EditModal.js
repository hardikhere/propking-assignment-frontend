import React, { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, DialogContent, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import isAuthenticated from '../../utils/isAuthenticated';
import axiosInstance from '../../utils/axiosInstance';
import APIS from '../../utils/endpoints';

const EditModal = (props) => {
    const history = useHistory();
    const [name, setname] = useState(props.name)
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

    const handleEdit = () => {
        axiosInstance.put(APIS.update(props._id), {
            name: name
        })
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
                {`Edit ${props.name}?`}
            </DialogTitle>
            <DialogContent>
                <TextField label="Name"
                    onChange={(e) => {
                        setname(e.target.value)
                    }}
                    value={name} />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Close
                </Button>
                <Button onClick={handleEdit}
                    color="primary" autoFocus>
                    Update
               </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditModal
