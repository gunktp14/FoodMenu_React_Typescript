import { useState, useEffect } from 'react'
import menu from './utils/menu'
import './App.css'

interface MenuProp {
  id: number,
  title: string,
  category: string,
  price: number,
  img: string,
  desc: string
}

function App() {
  const [menuList, setMenuList] = useState<MenuProp[]>(menu)

  return (
    <div className="app">
      <h1 className="text-logo">Our Menu</h1>
      <div>
        <ul className="menu-bar">
          <li className='active'>All</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Shakes</li>
        </ul>
      </div>
      <div className="menu-list">
        {menu.map((item, index) => {
          return (
            <div className='card-menu'>
              <img src={item.img} alt="" />
              <div className="menu-detail">
                <div className="inline-title">
                  <h5>{item.title}</h5>
                  <h6>{item.price}</h6>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
