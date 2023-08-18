/*import React from 'react'
import {Link} from "react-router-dom"
import "../stylesheet/HotAccesoriesMenu.css"

const HotAccesoriesMenu = () => {
  return (
	<div className = "HotAccesoriesMenu">
		<Link className ="HotAccesoriesLink" to="/music">Music Store</Link>
		<Link className ="HotAccesoriesLink" to="/music"> Smart Devices</Link>
		<Link className ="HotAccesoriesLink" to="/home"> Home</Link>
		<Link className ="HotAccesoriesLink" to="/Lifestyle"> Lifestyle</Link>
		<Link className ="HotAccesoriesLink" to="/MobileAccesories"> Mobile Accesories</Link>

	  
	</div>
  )
}

export default HotAccesoriesMenu*/

import React from 'react'
import {Link} from "react-router-dom"
import "../stylesheet/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
    return (
         <div className="HotAccessoriesMenu">
             <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
             <Link className="HotAccessoriesLink" to="/smartDevice">Smart Devices</Link>
             <Link className="HotAccessoriesLink" to="/home">Home</Link>
             <Link className="HotAccessoriesLink" to="/lifestyle">Lifestyle</Link>
             <Link className="HotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
            
        </div>
    )
}

export default HotAccessoriesMenu


