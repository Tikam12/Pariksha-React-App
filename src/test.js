import React, { Component } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Timer from './timer';
import Ratio from './ratio';

export function withRouter(Children) {
    return (props) => {
        const params = useParams();
        const navigate = useNavigate();
        const location = useLocation();
        return <Children {...props} params={params} navigate={navigate} location={location} />
    }
}

class Test extends Component {
    state = {
        questions: [],
        options: [],
        correctAns: [],
        userAns: [],
        index: 0
    };

    next = () => {
        this.setState({ index: this.state.index + 1 });
    }

    prev = () => {
        this.setState({ index: this.state.index - 1 });
    }

    grid = (index) => {
        this.setState({ index: index });
    }

    returnQuestion = (index) => {
        let length = this.state.questions.length;
        if (length !== 0) {
            return this.state.questions[index].question;
        }
    }

    returnOptions = (index) => {
        if (this.state.options.length !== 0) {
            return this.state.options[index];
        }
        return [];
    }

    PreviousButtonShow = (index) => {
        if (index !== 0) {
            return <button onClick={this.prev} className='btn btn-info'>Previous</button>
        }
    }

    NextButtonShow = (index) => {
        if (index < this.state.questions.length - 1) {
            return <button onClick={this.next} className='btn btn-info'>Next</button>
        }
        else {
            return <button onClick={this.submit} className='btn btn-danger btn-lg'>Submit</button>
        }
    }

    submit = () => {
        let marks = this.evaluate();
        const data = {
            marks: marks,
            questions: this.state.questions,
            options: this.state.options,
            userAns: this.state.userAns,
            correctAns: this.state.correctAns
        };
        this.props.navigate(
            "/result",
            { state: data }
        );
    }

    handleClick = (QuestionIndex, name) => {
        // update the UserAns
        let UpdatedAns = this.state.userAns.map((item, index) => {
            if (index === QuestionIndex) {
                return item === name ? "" : name;
            }
            else {
                return item;
            }
        })
        // set the user answers 
        this.setState({ userAns: UpdatedAns });
    }

    evaluate = () => {
        let marks = 0;
        for (let i = 0; i < this.state.correctAns.length - 1; i++) {
            if (this.state.userAns[i] !== "") {
                if (this.state.correctAns[i] === this.state.userAns[i]) {
                    marks += 3;
                }
                else {
                    marks -= 0.25;
                }
            }
        }
        return marks;
    }

    componentDidMount() {
        const categoryId = this.props.location.state.id;
        const amount = this.props.location.state.amount;
        const difficulty = this.props.location.state.difficulty;
        const type = this.props.location.state.type;
        axios
            .get(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=${type}`)
            .then((response) => {
                let ans = [];
                let userAns = [];
                let option = [];

                // All options are stored in a array
                response.data.results.map((item) => {
                    let allOption = [];

                    item.incorrect_answers.map((items) => {
                        return allOption.push(items);
                    })
                    allOption.push(item.correct_answer);
                    allOption.sort(() => Math.random() - 0.5);
                    option.push(allOption);
                })

                // Correct Answer stored in a array
                response.data.results.map((item, index) => {
                    return ans.push(item.correct_answer);
                })

                // user Answer initilaize with NULL string
                response.data.results.map((item, index) => {
                    return userAns.push("");
                })

                this.setState({ questions: response.data.results, index: 0, correctAns: ans, userAns: userAns, options: option });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const options = this.returnOptions(this.state.index);
        if (this.state.questions.length !== 0) {
            return (
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-4 col-12'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-4  mt-3'>
                                    <div  className='card'>
                                        <div className='card-body'>
                                            {
                                                <Timer secs={this.props.location.state.time * 60} evaluate={this.evaluate} />
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-12 col-md-8 mt-3'>
                                <h4 className='col-12'>Question Map :</h4>
                                {
                                    this.state.questions.map((item, index) => {
                                        if (index === this.state.index) {
                                            return <button style={{ padding: 13 }} onClick={() => this.grid(index)} className='btn btn-info btn-sm m-2'>{index + 1}</button>
                                        }
                                        else {
                                            return <button style={{ padding: 13 }} onClick={() => this.grid(index)} className='btn btn-secondary btn-sm m-2'>{index + 1}</button>
                                        }
                                    })
                                }
                            </div>
                            </div>
                            
                        </div>

                        <div className='col-lg-8 col-md-9 col-12 ml-10'>
                            <div style={{ minHeight: 400 }}>
                                <h2 className='mb-3'>{this.state.index + 1}. {this.returnQuestion(this.state.index)}</h2>
                                {
                                    options.map((item, idx) => (
                                        <div key={idx}>
                                            <h5>
                                                <Ratio handleClick={this.handleClick} checked={this.state.userAns[this.state.index] === item} Qindex={this.state.index} name={item} />
                                            </h5>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='mt-5'>
                                <span className='float-left'>
                                    {this.PreviousButtonShow(this.state.index)}
                                </span>
                                <span className='float-right'>
                                    {this.NextButtonShow(this.state.index)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='Container'>
                    <div className='row'>
                        <div className='col-12 text-center mt-5'>
                            <h3 className='float-center'>Wait for 15s or try with diffrent info </h3>
                        </div>

                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Test);
