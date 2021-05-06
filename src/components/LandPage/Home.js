
import React, { useState } from 'react'
import Base from '../Base/Base'
import CardsArea from './CardsArea'
import LandCard from './LandCard'


const Home = () => {

    return (
        <Base title="Welcome to Propking Land"
            desc="Below are Lands Available">
            <center>
                <CardsArea />
            </center>
        </Base>
    )
}

export default Home
