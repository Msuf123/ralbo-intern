import Cards from "./Cards";
import style from '../style/first.module.css'
import { useEffect, useState } from 'react'


import req from './request'
import { useNavigate, useSearchParams } from "react-router-dom";

export default function List({setIssue,setDetails}){
    
    const [color_t,setColor_t]=useState()
    const nav=useNavigate()
    const [val,setVal]=useState('')
    const[color,setColor]=useState({})
    const[emp,setemp]=useState([])
    const [searchPrams,setPram]=useSearchParams()
    const url='https://dummy.restapiexample.com/api/v1/employees'
    useEffect(()=>{
        
     req(url).then((res)=>{
      console.log(res)
      if(res.status==='success'){
        
       setemp(res.data)
       setDetails(res.data)
    
      }
      else{
        console.log(res.status)
        nav('/error')
        setIssue({code:res.status})
    
    }
     }
      )
     
    
    },[])
    useEffect(()=>{
        console.log(searchPrams.get('id'))
        console.log(emp.filter((i)=>i.id.toString().includes(searchPrams.get('id'))))
    },[searchPrams])
    if(searchPrams.get('id')===null){
        return(
            <div className={style.list}>
            <div className={style.listinput}>
                <input
                 value={val}  style={color}onChange={(e)=>{
                    if(Number(e.target.value)||e.target.value===''){
                     setVal(e.target.value)
                    }
                    
                    else{
                      setColor({backgroundColor:'red'})
                      setTimeout(()=>{
                        setColor({})
                      },100)
                    }
                   }}
                ></input>
                <button style={color_t}
                onClick={()=>{
                    if(val===''){
                        console.log('hi')
                    }

                    else{
                        
                        
                    nav({
                        pathname:'/',search:`?id=${val}`
                    })}
                    console.log(val)
                    
                }
           
            }
                >&#128269;</button>
            </div>
            <div className={style.cards}>
            {emp.length===0?<div className={style.lodouter}><span className={style.loading}>Loading</span></div>:emp.map((i,k)=><Cards details={i} emp={emp} setemp={setemp} key={k}></Cards>)}
            </div>
        </div>
        )
    }
    else{return(
        <div className={style.list}>
            <div className={style.listinput}>
                <input placeholder="Enter id to filter"
                 value={val}  style={color}onChange={(e)=>{
                    if(Number(e.target.value)||e.target.value===''){
                     setVal(e.target.value)
                    }
                    
                    else{
                      setColor({backgroundColor:'red'})
                      setTimeout(()=>{
                        setColor({})
                      },100)
                    }
                   }}
                ></input>
                <button style={color_t}
                onClick={()=>{
                    if(val===''){
                        searchPrams.delete('id')
                        setPram(searchPrams)
                        console.log('hi')

                    }

                    else{
                        
                        
                    nav({
                        pathname:'/',search:`?id=${val}`
                    })}
                    
                    
                }}
                >&#128269;</button>
            </div>
            <div className={style.cards}>
            {emp.length===0?<div className={style.lodouter}><span className={style.loading}>Loading</span></div>:emp.filter((i)=>i.id.toString().includes(searchPrams.get('id'))).map((i,k)=><Cards details={i} emp={emp} setemp={setemp} key={k}></Cards>)}
            </div>
        </div>
    )}
}