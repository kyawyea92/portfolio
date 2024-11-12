import React, { Component }  from 'react';
export default function Home(){
    const data = JSON.parse(localStorage.getItem("data"));
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}