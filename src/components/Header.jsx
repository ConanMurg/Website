import React from 'react'
import {  HiHome  } from "react-icons/hi2"
import HeaderItem from './HeaderItem'

function Header() {
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiHome
        },
        {
            name:'WATCH LIST',
            icon:HiHome
        }
    ]
  return (
    <div>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} />
        ))}
    </div>
  )
}

export default Header