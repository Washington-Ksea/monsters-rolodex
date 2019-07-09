import React, {Component} from 'react';
//import logo from './logo.svg';

import {CardList} from  './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))

    
  }
  /*
  handleChange(e){
    console.log(this); //undefined
    console.log(1)
    //this.setState({searchField : e.target.value});
    
  }
  */
  handleChange = (e) => {
    this.setState({searchField : e.target.value});
    console.log(this);
  }
  

  render() {
    const {monsters, searchField} = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1 className='appName'>Monster Rolodex</h1>
        
        <SearchBox 
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonsters} />>
      </div>
    );
  }
}

export default App;
