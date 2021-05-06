import React from 'react'
import NavBar from '../LandPage/NavBar'

const Base = (props) => {
    return (
        <div className={props.className}>
            <NavBar />
            <center>
                <h1>{props.title}</h1>
                <h5>{props.desc}</h5>
            </center>
            {
                props.children
            }
        </div>
    )
}

export default Base
