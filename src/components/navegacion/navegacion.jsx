import React from 'react';
import FiltroOpcion from '../filtroopcion/filtroopcion';
import FiltroFecha from '../filtrofecha/filtrofecha';

class Navegacion extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleOptionChange(evento) {
    let filtros = this.props.filtros;                     // Uso los filtros disponibles desde props, vienen desde App
    filtros[evento.target.name] = evento.target.value;    // A traves del evento, asigno el valor actualizado en el dropdown al filtro correspondiente usando atributo "name" para entrar 
    this.props.onFilterChange(filtros);                   // llamo al metodo padre para que haga el filtrado, pasandole el filtro completo actualizado
  }

  handleDateChange(evento) {
    let filtros = this.props.filtros;
    filtros[evento.target.name] = evento.target.value;
    this.props.onFilterChange(filtros);
  }

  render() {

    const {filtros} = this.props;
    const opcionPaises = [{ value: 'select', name: 'Todos los países'},{ value: 'Argentina', name: 'Argentina'},{ value: 'Brasil', name: 'Brasil'},{ value: 'Chile', name: 'Chile'},{ value: 'Uruguay', name: 'Uruguay'}] 
    const opcionPrecios = [{ value: 'select', name: 'Cualquier precio' },{ value: 1, name: '$' },{ value: 2, name: '$$' },{ value: 3, name: '$$$' },{ value: 4, name: '$$$$' }]
    const opcionHabitaciones = [{ value: 'select', name: 'Cualquier tamaño' },{ value: 10, name: 'Hotel pequeño' },{ value: 20, name: 'Hotel mediano' },{ value: 30, name: 'Hotel grande' }]

    return (
      <nav className="navbar is-info" style={{justifyContent:'center'}}>
        <div className="navbar-item" style={{alignItems : 'center'}}>
          <FiltroFecha fecha={filtros.fechaDesde} name="fechaDesde" icono="sign-in-alt" onDateChange={this.handleDateChange}/>
        </div>
        <span></span>
        <div className="navbar-item">
          <FiltroFecha fecha={filtros.fechaHasta} name="fechaHasta" icono="sign-out-alt" onDateChange={this.handleDateChange}/>
        </div>
        <span></span>
        <div className="navbar-item">
          <FiltroOpcion options={opcionPaises} selected={filtros.pais} name="pais" icono="globe" onOptionChange={this.handleOptionChange}/>
        </div>
        <span></span>
        <div className="navbar-item">
          <FiltroOpcion options={opcionPrecios} selected={filtros.precio} name="precio" icono="dollar-sign" onOptionChange={this.handleOptionChange}/>
        </div>
        <span></span>
        <div className="navbar-item">
          <FiltroOpcion options={opcionHabitaciones} selected={filtros.habitaciones} name="habitaciones" icono="bed" onOptionChange={this.handleOptionChange}/>
        </div>
      </nav>
    );
  }
}

export default Navegacion;
