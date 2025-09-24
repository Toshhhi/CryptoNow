import React, { useContext } from 'react'
import './NavBar.css'
import { CoinContext } from '../../context/context.js'

const NavBar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (e)=>{
    switch (e.target.value){
      case "usd":{
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur":{
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "inr":{
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      default :{
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }
  return (
    <div className='navbar'>
        <img src="src/assets/logo.png" alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
        <button>Sign Up <img src="src/assets/icon.png" alt="" className='icon'/></button>
        </div>
        
    </div>
  )
}

export default NavBar