import React, { Component } from 'react'

class Ratio extends Component {
    render() {
        return (
            <div>
                <input style={{ height: 20, width: 20, verticalAlign: 'middle', marginRight: 20 }}
                    onClick={() => this.props.handleClick(this.props.Qindex, this.props.name)}
                    checked={this.props.checked} type='radio'
                />
                {this.props.name}
            </div>
        )
    }
}

export default Ratio;
