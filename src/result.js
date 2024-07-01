import React, { Component } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export function withRouter(Children) {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    return <Children {...props} params={params} navigate={navigate} location={location} />
  }
}

class Result extends Component {
  render() {
    return (
      <div className='container'>

        <div className='row mt-5'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h3>You Scored {this.props.location.state.marks} marks</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 ml-1'>
            <h2 className='text-center m-5 text-danger'>Overview of Test :</h2>
            {
              this.props.location.state.questions.map((item, index) => {
                return <div className='row mt-4'>
                  <h3>{index + 1}. {item.question}</h3>

                  {
                    this.props.location.state.options[index].map((item, idx) => {
                      return <div className='col-12' key={idx}>
                        <h5>
                          <input style={{ height: 20, width: 20, verticalAlign: 'middle', marginRight: 20 }}
                            type='radio' checked={this.props.location.state.userAns[index] === item}
                          /> {item}
                        </h5>
                      </div>
                    })
                  }

                  <h4 className='text-success'>Correct Answer :</h4>
                  <h4>
                    <input style={{ height: 20, width: 20, verticalAlign: 'middle', marginLeft: 20, marginRight: 10 }} type='radio' checked={true} />
                    {this.props.location.state.correctAns[index]}
                  </h4>
                </div>
              })
            }

          </div>

        </div>


      </div>
    )
  }
}

export default withRouter(Result);
