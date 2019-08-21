import React, { Component } from 'react';


export default class RowRepos extends Component {

  render() {

    return (

      <React.Fragment>
        
        <tr>
          <th scope="row">{this.props.index}</th>
          <td>{this.props.repoProps.name}</td>
          <td>{this.props.repoProps.private?"Private":"Public"}</td>
          <td>{this.props.repoProps.private?<input type="checkbox" checked/>:<input type="checkbox" />}</td>
          <td>{this.props.repoProps.private?"YES":"NO"}</td>
          <td>{this.props.repoProps.language}</td>
          <td><a href={this.props.repoProps.html_url}><button>Go</button></a></td>
        </tr>

      </React.Fragment>
    );
  }
}