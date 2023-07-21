import { useNavigate } from "react-router-dom"
import style from '../style/error.module.css'
import { useEffect, useState } from "react"
export default function Wrong({issue}){
    const nav=useNavigate()
    const[time,setTime]=useState({min:0,sec:50})
    let functio=()=>{
    let seconds=50
    let minute=0
    let total=(minute*60)+seconds
    
    let id=setInterval(()=>{
        
        let Seconds;
       
        let Minutes=total/60
        
        if(Minutes.toString().split('.')[1]!==undefined){
            Seconds= '0.'+Minutes.toString().split('.')[1]
            Seconds=Number(Seconds)
            Seconds=Math.round(Seconds*60)
           
        }
        else{
            Seconds=0
        }
        //console.log(Number(Minutes.toString().split('.')[0])+ " Minutes and Seconds "+Seconds)
        setTime({min:Number(Minutes.toString().split('.')[0]),sec:Seconds})
        total--
        if(total<0){
            clearInterval(id)
        }
    },1000)}
    useEffect(()=>{
        functio()
    },[])
    return(
        <div className={style.main}>
            <h1>Oops Something went wrong</h1>
            <h2>Error code:{issue.code}</h2>
            <h3>{issue.code===429?"Too many request":null}</h3>
            <span>Wait till  {time.min}:{time.sec}</span>
           {time.sec===0? <button
            onClick={()=>{
             nav('/')
            }}
            >Try Again</button>:null}
        </div>
    )
}