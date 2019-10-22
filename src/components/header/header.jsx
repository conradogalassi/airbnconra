import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero is-success is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hoteles Acamica
            </h1>
            <h2 className="subtitle">
              Se han encontrado {this.props.nroHotelesDisponibles} hoteles disponibles
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;