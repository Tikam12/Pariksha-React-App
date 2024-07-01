import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    return (
        <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title">{this.props.name}</h5>
          <p class="card-text">Check your knowledge about the field of {this.props.name}.</p>
          <Link to={`/testDetail/${this.props.id}`}  className='btn btn-block btn-info card-link'>Take Test</Link>
        </div>
      </div>
    )
  }
}
