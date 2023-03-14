import React from 'react'

function Greeting() 
{
    let currDate = new Date();
    currDate = currDate.getHours();
    let greeting = "";

    if(currDate>1&&currDate<12){
        greeting = "Good Morning"
    }
    else if(currDate>=12&&currDate<18){
        greeting = "Good Afternoon"
    }
    else if(currDate>=18&&currDate<21){
        greeting = "Good Evening"
    }
    else if(currDate>=21&&currDate<=24){
        greeting = "Good Night"
    }
    return (
        <>
            <h2>{greeting}</h2>
        </>
    )
}

export default Greeting