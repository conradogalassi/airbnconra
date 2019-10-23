import React from 'react';

class FiltroFecha extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(evento) {
    this.props.onDateChange(evento);
  }

  render() {
      const {fecha,name,icono} = this.props;

      return (
        <div className="field">
          <div className="control has-icons-left">
            <input className="input" type="date" value={fecha} name={name} onChange={this.handleDateChange}/>
            <div className="icon is-small is-left">
              <i className={"fa fa-" + icono}></i>
            </div>
          </div>
        </div>
      );
  }
}

export default FiltroFecha;
