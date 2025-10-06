import React from 'react'
import { Link } from 'react-router-dom';
export default function () {
  return (
<div className=''>
<div className="header d-none d-md-block">
    <ul className="h2222 icon-menu revealator-slideup revealator-once revealator-delay1">
      <li className="icon-box react-tabs__tab--selected">
        <h2>Home</h2>
        <Link className='ii' to="" > 
          <i className="fa fa-home" /></Link>
      </li>

      <li className="icon-box" >
        <h2>About</h2>  
          <Link className='ii' to="about" > 
         <i className="fa fa-user" />
        </Link>
      </li><li className="icon-box"> <h2 >Portfolio</h2>
        <Link className='ii' to="prot" > 
          <i className="fa fa-briefcase" />

        </Link>
      </li>
      <li className="icon-box" ><h2>Contact</h2>
        <Link to="contact" className='ii'>           
              <i className="fa fa-envelope-open" />
        </Link>
      </li>


    </ul>
    </div>
    <div className="down d-md-none ">
    <ul className=" icon-menu2 d-flex revealator-slideup revealator-once revealator-delay1">
      <li className="icon-box react-tabs__tab--selected">
       
        <Link className='ii' to="" > 
          <i className="fa fa-home" /></Link>
      </li>

      <li className="icon-box" >
      
          <Link className='ii' to="about" > 
         <i className="fa fa-user" />
        </Link>
      </li>
      <li className="icon-box"> 
        <Link className='ii' to="prot" > 
          <i className="fa fa-briefcase" />

        </Link>
      </li>
      <li className="icon-box" >
        <Link to="contact" className='ii'>           
              <i className="fa fa-envelope-open" />
        </Link>
      </li>


    </ul>
    </div>
    </div>
  )
}
