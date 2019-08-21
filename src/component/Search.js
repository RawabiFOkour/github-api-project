import React, { Component } from 'react';


export default class Search extends Component {
state={
    username:""
}
    changeUsername = (event) => {
        this.setState({ username: event.target.value })
        
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.component(this.state.username)
    }
    // cheeck=()=>{
    //     if(this.props.reposnumber.length === 0 || this.state.username === null){
    //         console.log('not found')
    //     }
    // }
    render() {
        // const { tasks ,toggleComplete,delTodoItems} = this.props;
        
       
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit} >
                    <div className="form-row">

                        <div className="form-group col-md-5">

                            <input type="text" className="form-control" placeholder="username for github .." style={{ width: '350px' }}
                                onChange={this.changeUsername} />
                        </div>


                        <div className="form-group col-md-5">
                            <button type="submit" className="btn btn-primary" style={{ marginLeft: '130px' }}>Sign in</button>
                        </div>
                        <div className="form-group col-md-2" id='notValid'>
                            {/* <p>{this.props.reposnumber.length === 0 ? "not defined" :""}</p> */}
                        </div>

                    </div>

                </form>

            </React.Fragment>
        );
    }
}