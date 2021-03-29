import React, {useState} from 'react'
import '../App.css'
import Button from './Button'
import InputField from './inpuField'

const Box = ()=>{
    const[initialState, setInitialState] =  useState('Your Pass will show up here!');
    const GeneratePass = (size)=>{
            var chars = '!@#$%^&*()_+,./?:;[]{}~`abcdefghijklmnopqrstuvwxyz1234567890';
            var len = chars.length;
            let randChar= '';
            while(size >= 0){          
            var randNo = Math.random()*len+1;
            randChar += chars.charAt(randNo);
            size--;

            }
        return randChar;
    }
    const s = GeneratePass(5);
    return (
        <div className = "Box">
            <h4 className = 'head'>Click Button to Generate 👇</h4>
            <InputField handleClick = {s} title= {initialState}/>
            <div className = 'buttons'>     
            <Button  title = "Generate" />
            <Button onClick = {()=>setInitialState('')} title = "Clear"/>
            </div>
      </div>
    )
}
export default Box;