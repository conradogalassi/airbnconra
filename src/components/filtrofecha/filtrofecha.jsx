import React from 'react';

class FiltroFecha extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {
          fecha,
          tipoFecha
      } = this.props;

    return (
      <div className="navbar-item">Fecha {this.props.tipoFecha}
        <input type="date" value={this.props.fecha} />
      </div>
    );
  }
}

export default FiltroFecha;
