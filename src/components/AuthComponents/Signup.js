import { Paper } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import APIS from '../../utils/endpoints';
import Base from '../Base/Base'
import AuthForm from './AuthForm';
import "./style.css";

const Signup = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null);
    const [success, setsuccess] = useState(false);
    const [error, seterror] = useState(false);

    const handleChange = name => (e) => {
        setUserInput({
            ...userInput,
            [name]: e.target.value
        })
    }
    const clear = () => {
        setUserInput({
            name: "",
            email: "",
            password: ""
        })
    };

    const submitHandler = () => {
        axios.post(APIS.signup, userInput).then(res => {
            console.log("got res", res.data)
            setLoading(false);
            clear()
            setMessage(<>
                You have successfully signed up <Link to="/login">Login here</Link>
            </>)
            setsuccess(true);
        })
    }
    return (
        <Base title="Signup" desc="Lands are waiting for you">

            <center>
                <Paper className="loginform">
                    <AuthForm name={userInput.name}
                        email={userInput.email}
                        password={userInput.password}
                        handleChange={handleChange}
                        submitHandler={submitHandler}
                        loading={loading}
                        type="Signup"
                    />
                    {
                        success && message
                    }
                </Paper>
            </center>
        </Base>
    )
}

export default Signup
