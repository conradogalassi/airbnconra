import React from 'react';
import Header from './components/header/header';
import Navegacion from './components/navegacion/navegacion';
import Hoteles from './components/hoteles/hoteles';
import Moment from 'moment';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    const today = new Date()
    const todayFormatted = Moment(today).format("YYYY-MM-DD")
    const nextMonthFormatted = Moment(today).add(1,'month').format("YYYY-MM-DD")

    this.state = {
      value: '',
      hoteles:[],
      hotelesFiltrados:[],
      filtros : {
        dateFrom:todayFormatted,
        dateTo:nextMonthFormatted,
        pais:'select',
        precio:'select',
        habitaciones:'select'
      },
      cargaInicialHoteles : false
    };
  }

  logConsole(){
    console.log(this.state.hoteles);
    console.log(this.state.cargaInicialHoteles);
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
      if(!response.ok){
        throw Error(response.statusText);
      }

      const json = await response.json();
      this.setState({
        hoteles:json,
        cargaInicialHoteles:true
      });

      this.logConsole();

    } catch (err) {
      console.log(err);
    }
  }

  render() {

    return (
      <div className="App">
        <Header nroHotelesDisponibles={this.state.hoteles.length} />
        <Navegacion filtrosDefault={this.state.filtros}/>
        <Hoteles lista={this.state.hoteles}/>
      </div>
    );
  }
}

export default App;
