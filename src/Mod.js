import React, { Component } from 'react';
import './style.css';

import axios from 'axios'

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bid:'',
        bname:'',
        author: '',
       cost: '',
        image:'',
        description:'',
        readonline:''
    };
  }

  handleIdChange = (event) => {
    this.setState({ bid: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ bname: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ author: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ cost: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ image: event.target.value });
  };
  handleDescChange = (event) => {
    this.setState({ description: event.target.value });
  };
  handleReadChange = (event) => {
    this.setState({ readonline: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        bid: this.state.bid,
        bname: this.state.bname,
        author: this.state.author,
       cost: this.state.cost,
        image: this.state.image,
        description: this.state.description,
        readonline: this.state.readonline,
        
      };
    
      axios.put('http://127.0.0.1:8080/updateDetails', data)
  };

  render() {
    return (
        <>
        

       
        <div className="header">
            <div className="row1">
           
            </div>
            <div className="row2">
                <h2 id="dels">Modify Book</h2>
            </div>
            </div>
           
      <form onSubmit={this.handleSubmit} className="ad">
      <div className='ad'>
        <label className="sign-label">Id</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.bid}
          onChange={this.handleIdChange}
        /><br/>

        <label className="sign-label">Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.bname}
          onChange={this.handleNameChange}
        />
        <br/>

        <label className="sign-label">author</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.author}
          onChange={this.handleEmailChange}
        />
        <br/>
        <label className="login-label">cost</label>
        <input
          className="login-input"
          type="number"
          value={this.state.cost}
          onChange={this.handlePasswordChange}
        />
        <br/>

        <label className="sign-label">image</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.image}
          onChange={this.handlePhoneChange}
        />
          <br/>
         <label className="sign-label">descr</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.description}
          onChange={this.handleDescChange}
        />
          <br/>
         <label className="sign-label">read</label>
        <input
          className="sign-input"
          type="read"
          value={this.state.readonline}
          onChange={this.handleReadChange}
        />
          <br/>
        <button className="login-button" type="submit">
         Modify
        </button>
        </div>
      </form>
     
      
      </>
    );
  }
}

export default Add;