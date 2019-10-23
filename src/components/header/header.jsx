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
              {
                (this.props.hotelesEncontrados > 0) ? ( 
                <p>Se han encontrado {this.props.hotelesEncontrados} hoteles disponibles</p>
                ) : (
                <p>No se han encontrado hoteles disponibles</p>
                )
              }
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;