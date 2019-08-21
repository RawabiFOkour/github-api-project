import React, { Component } from 'react';
import Table from './component/Table';
import Search from './component/Search'
import axios from 'axios';


export default class App extends Component {
  state = {
    repos: [],
    username: "",
    statusCode: "",
    noRepos:""
  };

  component = (usernameGithub) => {
    // let urlApi = `http://api.github.com/users/${usernameGithub}/repos`
    //let urlApi = `http://localhost:6000/users/${usernameGithub}`
    this.setState({noRepos:""})
    this.setState({statusCode:""})

    // let username =encodeURIComponent(usernameGithub);

    axios.get(`http://localhost:8000/component/${usernameGithub}`)
      .then(res => {
        this.setState({
          repos:
            res.data.filter((repo, index) => {
              return index < 5
            })

           
        });


        this.setState({noRepos:"No User Repos"})
        // console.log(this.state.repos)
        // console.log(this.state.repos.length)
      })
      .catch((error) => {
        console.log(error.response.statusText)
        this.setState({ statusCode: error.response.statusText })

      })
  }

  render() {
    const { repos } = this.state;
    
    return (
      <React.Fragment>
        <div className="container w-75 ">
          <div className="row" style={{ marginTop: "60px", marginLeft: "120px" }}>
            <Search component={this.component} reposnumber={repos} />
          </div>

          <div className="row">
            {
             
             (this.state.statusCode === "Not Found")
              ?
              <p style={{marginLeft:"300px"}}>{this.state.statusCode}</p>
               
              :
              <Table repos={repos} />

            
            }
           {
             
             (this.state.repos.length === 0)
              ?
              <p style={{marginLeft:"300px"}}>{this.state.noRepos}</p>
               
              :
              <p></p>

            
            }

          </div>

        </div>

      </React.Fragment>
    );
  }
}

