import React, { Component } from 'react'
import Card from './card'

export default class Home extends Component {
  render() {
    return (
      <div className='container mt-5'>

        <div className='row'>
          <h1 className='ml-2'>Available Tests</h1>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-md-6 col-12  mt-5'>
            <Card name="General Knowledge" id="9" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Sports" id="21" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Computers" id="18" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Mathematics" id="19" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Gadgets" id="30" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Science & Nature" id="17" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Geography" id="22" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="History" id="23" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Politics" id="24" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Art" id="25" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Mythology" id="20" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Celebrities" id="26" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Vehicles" id="28" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Animals" id="27" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Books" id="10" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Films" id="11" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Music" id="12" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Musicals & Theatres" id="13" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Television" id="14" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Video Games" id="15" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Board Games" id="16" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Comics" id="29" />
          </div>
          <div className='col-lg-4 col-md-6 col-12 mt-5'>
            <Card name="Cartoon & Animations" id="32" />
          </div>
        </div>
      </div>
    )
  }
}
