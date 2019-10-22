import React from 'react';
import FiltroOpcion from '../filtroopcion/filtroopcion';
import FiltroFecha from '../filtrofecha/filtrofecha';

class Navegacion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {filtrosDefault} = this.props;

    const opcionPaises = 
    [{ value: 'select', name: 'Todos los países'}, 
     { value: 'Argentina', name: 'Argentina'}, 
     { value: 'Brasil', name: 'Brasil'}, 
     { value: 'Chile', name: 'Chile'}, 
     { value: 'Uruguay', name: 'Uruguay'}]
     
     const opcionPrecios = 
     [{ value: 'select', name: 'Cualquier precio' }, 
      { value: 1, name: '$' }, 
      { value: 2, name: '$$' }, 
      { value: 3, name: '$$$' }, 
      { value: 4, name: '$$$$' }]
    
     const opcionHabitaciones = 
     [{ value: 'select', name: 'Cualquier tamaño' }, 
      { value: 10, name: 'Hotel pequeño' }, 
      { value: 20, name: 'Hotel mediano' }, 
      { value: 30, name: 'Hotel grande' }]

    return (
      <nav id="navbar" className="bd-navbar navbar has-shadow is-spaced">
      <div className="container">
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenuDocumentation">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div className="navbar-menu" id="navMenuDocumentation">
          <div className="navbar-start">
            <FiltroFecha tipoFecha="Inicio" fecha={filtrosDefault.dateFrom}/>
            <span></span>
            <FiltroFecha tipoFecha="Fin" fecha={filtrosDefault.dateTo}/>
            <span></span>
            <div className="navbar-item has-dropdown is-hoverable">
              <FiltroOpcion options={opcionPaises} name="Todos los paises"/>
            </div>
            <span></span>
            <div className="navbar-item has-dropdown is-hoverable">
              <FiltroOpcion options={opcionPrecios} name="Cualquier precio"/>
            </div>
            <span></span>
            <div className="navbar-item has-dropdown is-hoverable">
              <FiltroOpcion options={opcionHabitaciones} name="Cualquier tamaño"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navegacion;
