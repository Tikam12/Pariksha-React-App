import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        const navigate = useNavigate()
        return <Children {...props} match={match} navigate={navigate} />
    }
}

class Timer extends Component {
    state={
        counter:this.props.secs
    }

    componentDidMount =()=>{
        let x = setInterval(()=>{

            if(this.state.counter > 0){
                this.setState({counter:this.state.counter-1});
            }
            else{
                clearInterval(x);
                let marks = this.props.evaluate();
                let datapass = {marks:marks}
                this.props.navigate(
                    '/result',
                    {state:datapass}
                );
            }

        },1000)
    }


    render() {
        return (
            <div className='text-center'>
                <h3 >{Math.floor(this.state.counter/60)} mins {this.state.counter%60} secs</h3>
            </div>
        )
    }
}

export default withRouter(Timer);
