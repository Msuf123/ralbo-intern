import { useNavigate } from 'react-router-dom'
import style from '../style/card.module.css'
import img from '../Untitled.png'
import { useEffect } from 'react'
export default function Cards(props){
    useEffect(()=>{
       // console.log(props.details)
    })
    const nav=useNavigate()
    return(
        <div className={style.main}>
            <img src={img}></img>
            <div className={style.options}>
            <span className={style.name}>{props.details.employee_name?props.details.employee_name:'Not available'}</span>
            <span>{props.details.id?'Id:'+props.details.id:'No id'}</span>
            <div className={style.button}>
            <button
            onClick={()=>{
                nav(`${props.details.id}`)
            }}
            >More</button>
            <button>Edit</button>
            <button
            onClick={()=>{
                props.setemp(props.emp.filter((a)=>(a.employee_name!==props.details.employee_name)))
            }}
            >Delete</button>
            </div>
            </div>

        </div>
    )
}