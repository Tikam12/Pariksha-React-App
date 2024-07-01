import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export function withRouter(Children) {
    return (props) => {
        const params = useParams() ;
        const navigate = useNavigate();
        const location = useLocation();
        return <Children {...props} params={params} navigate={navigate} location={location}/>
    }
}

class TestDetail extends Component {

    onClick=()=>{
        let amount = document.querySelector('#number').value || 10;
        let difficulty = document.querySelector('#difficulty').value || 'medium';
        let type = document.querySelector('#type').value || 'multiple';
        let time = document.querySelector('#time').value || 10;
        let data = {
                        id:this.props.params.id,
                        amount:amount,
                        difficulty:difficulty,
                        type:type,
                        time:time
                    }
        this.props.navigate(
            "/test/",
            {state:data}
        )
    }


    render() {
        return (
            <div className='container mt-5' >
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='mb-4'>Basic Details for Test </h1>
                        <div className='card bg-info'>
                            <div className='card-body'>

                                <div className='col-12 mt-1'>
                                    <labal>Number of Questions:</labal>
                                    <input className='form-control' id='number' placeholder='Enter the Number of Questions (maximum 30)' type='input'></input>
                                </div>

                                <div className='col-12 mt-3'>
                                    <labal>Select Difficulty:</labal>
                                    <select className='form-control' id='difficulty'>
                                        {/* <option value="any">Any</option> */}
                                        <option value="easy">easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>

                                <div className='col-12 mt-3'>
                                    <label >Select Type:</label>
                                    <select className='form-control' id='type'>
                                        {/* <option value="any">Any</option> */}
                                        <option value="multiple">Multiple Choice</option>
                                        <option value="boolean">True/False</option>
                                    </select>
                                </div>

                                <div className='col-12 mt-3'>
                                    <labal>Time for Complete the test</labal>
                                    <input className='form-control' id='time' placeholder='Enter the Time in Minutes' type='input'></input>
                                </div>

                                <button
                                    onClick={this.onClick} 
                                    type='button' 
                                    className='mt-3 btn btn-lg btn-danger float-right' 
                                >Test Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(TestDetail);