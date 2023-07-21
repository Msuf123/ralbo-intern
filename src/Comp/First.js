import { useEffect, useState } from 'react'
import style from  '../style/first.module.css'
import Cards from './Cards'
import req from './request'
import List from './List'
import { Outlet } from 'react-router-dom'
export default function First(){
    
    
    return(
        <div className={style.first}>
      <h1>Rablo.in</h1>
      
      <Outlet></Outlet>
        </div>
    )
}