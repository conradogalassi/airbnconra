import React from 'react';
import Header from './components/header/header';
import Navegacion from './components/navegacion/navegacion';
import Hoteles from './components/hoteles/hoteles';
import Moment from 'moment';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    const hoy = new Date()
    const formatoHoy = Moment(hoy).format("YYYY-MM-DD")
    const formatoMesProximo = Moment(hoy).add(1,'month').format("YYYY-MM-DD")

    this.state = {
      hoteles:[],
      hotelesFiltrados:[],
      filtros : {
        fechaDesde : formatoHoy,
        fechaHasta : formatoMesProximo,
        pais : 'select',
        precio : 'select',
        habitaciones :'select'
      },
      cargaInicialHoteles : false
    };

    this.handleFilterChange=this.handleFilterChange.bind(this);
  }

  filtrarHoteles(filtroAplicar,hoteles) {
    let{fechaDesde,fechaHasta,pais,precio,habitaciones} = filtroAplicar;

    console.log(filtroAplicar);
    
    return hoteles.filter(hotel =>{
      return Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= fechaDesde &&
             Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= fechaHasta &&
             hotel.rooms <= (habitaciones !== 'select' ? habitaciones : hotel.rooms) &&
             hotel.price <=(precio !== 'select' ? parseInt(precio) : hotel.price) &&
             hotel.country.trim().toLowerCase() === (pais !== 'select' ? pais.trim().toLowerCase() : hotel.country.trim().toLowerCase())
    })
  }

  handleFilterChange(filtroActualizado) {  // el argumento filtroActualizado vendria desde componente hijo Navegacion
    const hotelesBuscados =  this.filtrarHoteles(filtroActualizado,this.state.hoteles);
    
    this.setState({
      filtros : filtroActualizado,
      hotelesFiltrados : hotelesBuscados
    });
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
        hotelesFiltrados:json,
        cargaInicialHoteles:true
      });

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <Header hotelesEncontrados={this.state.hotelesFiltrados.length} />
        <Navegacion filtros={this.state.filtros} onFilterChange={this.handleFilterChange}/>
        <Hoteles filtrados={this.state.hotelesFiltrados}/>   
      </div>
    );
  }
}

export default App;
