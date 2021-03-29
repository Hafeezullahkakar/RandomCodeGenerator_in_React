import React from 'react'
import '../App.css'
const Button = (props) =>{
    return (
        <div >
        <button className="singleBtn" >{props.title}{}</button>
        </div>
    )
}
export default Button;