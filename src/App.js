import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {keyword} = this.state;

    const book = {
     keyword
    };

    axios.post('http://localhost:8080/', book)
      .then(() => console.log('Keyword Posted'))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <br />
       
          <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-control"
                name="keyword"
                id="searchbox"
                placeholder="Enter Keyword"
                onChange={this.handleInputChange}
              />
              <button className="btn btn-success" type="submit">
                Create
              </button>
              <div id="output">F</div>
            
          </form>
      </div>
      
    );
    
  }
}

export default Create;