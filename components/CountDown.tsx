"use client"
import Countdown from 'react-Countdown'
import React from 'react'

const endingDate = new Date("2023-11-8")
const CountDown = () => {
    return (
        <Countdown className="font-bold text-5xl text-yellow-300" date={endingDate} />
    )
}


export default CountDown