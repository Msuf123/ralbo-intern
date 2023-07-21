import { useEffect, useState } from 'react'
import style from '../style/first.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import img from '../Untitled.png'
import req from './request'
export default function Detail({details}){
    const nav=useNavigate()

    const id=useParams()
    let info=details.filter((i)=>i.id===Number(id.id))
    console.log(info)
    // useEffect(()=>{

    //     const url=`https://dummy.restapiexample.com/api/v1/employee/${id.id}`
    //  req(url).then((res)=>{
    //   console.log(res)
    //   if(res.status==='sucess'){
    //     console.log(res.status)
    //   setDelt(res.data)}
      
    //  }
    //   )
     
      
    // },[])
    return(
        <div className={style.detail}>

    <div className={style.img}>
    <img src={img}></img>
    <button
    onClick={()=>{
       nav('/')
    }}
    >&#x2190;</button>
    </div>
    <div className={style.info}>
    <span>Name:{info[0].employee_name}</span>
    <span>Salary:{info[0].employee_salary}</span>
    <span>Age:{info[0].employee_age}</span>
    <span>Id:{id.id}</span>
    </div>
    
        </div>
    )
}