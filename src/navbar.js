import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-info'>
        <h3 className='navbar-brand text-white'>Pariksha</h3>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to='/' className='nav-link text-white'>Dashboard</Link>
            </li>
        </ul>
      </nav>
    )
  }
}
