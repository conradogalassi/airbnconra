import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value:''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class="title">Se encontraron XXX hoteles</h1>
          <h1 class="subtitle">desde la fecha hasta la fecha</h1>
        </header>
        <div className="Filtros">
          <div class="column">
            <div class="dropdown ">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Dropdown button</span>
              <span class="icon is-small">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
              </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Dropdown item
              </a>
              <a class="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" class="dropdown-item is-active">
                Active dropdown item
              </a>
              <a href="#" class="dropdown-item">
                Other dropdown item
              </a>
            </div>
          </div>
          </div>
        </div>
        
        </div>
      </div>
    );
  }
}

export default App;
