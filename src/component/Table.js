import React, { Component } from 'react';
import RowRepos from './RowRepos';

export default class Table extends Component {

  render() {
    // const { tasks ,toggleComplete,delTodoItems} = this.props;
    
    return (
      <React.Fragment>

        
        <table className="table table-dark" style={{marginTop:"50px"}}>
          <thead >
            <tr>
              <th scope="col">number</th>
              <th scope="col">name</th>
              <th scope="col">repo state</th>
              <th scope="col">check</th>
              <th scope="col">private</th>
              <th scope="col">language</th>
              <th scope="col">url</th>
            </tr>
          </thead>
          <tbody>
           {this.props.repos.map((repo,index)=>
            (<RowRepos repoProps={repo} index={index+1} key={index+1}/>))}
          </tbody>
        </table>
       

      </React.Fragment>
    );
  }
}