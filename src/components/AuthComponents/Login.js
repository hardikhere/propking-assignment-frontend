import { Paper } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import APIS from '../../utils/endpoints';
import Base from '../Base/Base'
import AuthForm from './AuthForm';
import "./style.css";



const Login = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password: ""
    });
    const history = useHistory();
    const handleChange = name => (e) => {
        setUserInput({
            ...userInput,
            [name]: e.target.value
        })
    };
    const clear = () => {
        setUserInput({
            name: "",
            email: "",
            password: ""
        })
    };
    const [loading, setLoading] = useState(false)
    const submitHandler = () => {
        setLoading(true)
        axios.post(APIS.login, userInput).then(res => {
            //console.log("got res", res.data);
            window.localStorage.setItem("token", res.data.token);
            setLoading(false);
            clear()
            history.push("/")
        })
    }
    return (
        <Base title="Login" desc="login to explore Lands">
            <center>
                <Paper className="loginform">
                    <AuthForm name={userInput.name}
                        email={userInput.email}
                        password={userInput.password}
                        handleChange={handleChange}
                        submitHandler={submitHandler}
                        loading={loading}
                        type="Login"
                    />

                </Paper>
            </center>
        </Base>
    )
}

export default Login
