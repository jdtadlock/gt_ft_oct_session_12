import React, { Component } from 'react';
import axios from 'axios';
import { Header, Landing, About } from './components';
// import Header from './components/Header';
// import Landing from './components/Landing';
import { Route } from 'react-router-dom';

window.axios = axios;

class App extends Component {
  // componentDidMount() {
  //   axios.get('/api/test')
  //     .then(res => {
  //       console.log(res.data);
  //     }).catch(err => console.log(err));
  // }

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  createUser = (e) => {
    e.preventDefault();

    axios.post('/api/create', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      console.log(res.data);
    });
  }

  handleChange = (e) => {
    let prop = e.target.name;

    this.setState({ [prop]: e.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        
        <form onSubmit={this.createUser}>
          <input 
            type="text" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            placeholder="Email" />
          <input 
            type="password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            placeholder="Password" />
          <button>Submit</button>
        </form>

        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
