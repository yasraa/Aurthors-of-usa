import React from 'react'
import '../styles/location.css'
import { Link } from 'react-router-dom'
const Location = () => {
    
  return (
    <div className='location'>
<h4>Find Ghostwriters All Across United States</h4>

<div className="cities">
 <ul>
      <li><Link to="/atlanta">Atlanta</Link></li>
      <li><Link to="/berkeley">Berkeley</Link></li>
      <li><Link to="/boston">Boston</Link></li>
      <li><Link to="/boulder">Boulder</Link></li>
      <li><Link to="/brooklyn">Brooklyn</Link></li>
      <li><Link to="/charlotte">Charlotte</Link></li>
      <li><Link to="/chicago">Chicago</Link></li>
      <li><Link to="/colorado-springs">Colorado Springs</Link></li>
      <li><Link to="/columbus">Columbus</Link></li>
      <li><Link to="/dallas">Dallas</Link></li>
      <li><Link to="/denver">Denver</Link></li>
      <li><Link to="/fair-oaks">Fair Oaks</Link></li>
      <li><Link to="/fort-worth">Fort Worth</Link></li>
      <li><Link to="/indianapolis">Indianapolis</Link></li>
      <li><Link to="/kansas-city">Kansas City</Link></li>
      <li><Link to="/los-angeles">Los Angeles</Link></li>
      <li><Link to="/miami">Miami</Link></li>
      <li><Link to="/nashville">Nashville</Link></li>
      <li><Link to="/phoenix">Phoenix</Link></li>
      <li><Link to="/portland">Portland</Link></li>
      <li><Link to="/salt-lake-city">Salt Lake City</Link></li>
      <li><Link to="/san-francisco">San Francisco</Link></li>
      <li><Link to="/sarasota">Sarasota</Link></li>
    </ul>
</div>

    </div>
  )
}

export default Location