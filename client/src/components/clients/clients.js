import React, { Component } from 'react';
import './clients.css';

class Clients extends Component {
  constructor(){
      super();
      this.state = {
        clients: []
      };
      this.handleClick = this.handleClick.bind(this);
  }    

  componentDidMount(){
    
    fetch('/api/clients')
        .then(res => res.json())
        .then(clients => this.setState({clients}, () => console.log('Clients fetched..',
        clients)));
  }

  handleClick(){
    this.setState({clients: this.state.clients.reverse()})
  }

  render() {
    return (
      <div>
          <h2 onClick={this.handleClick}>Clients:</h2>
          <ul>
              {this.state.clients.map(client =>
                <li key={client.id}> {client.firstName} {client.lastName}</li>
              )}
          </ul>

      </div>
    );
  }
}

export default Clients;
