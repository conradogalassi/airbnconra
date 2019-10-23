import React from 'react';

class FiltroOpcion extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(evento) {
    this.props.onOptionChange(evento);
  }

  render() {
    const {options, icono, selected, name} = this.props;

    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={{width: '100%'}}>
            <select defaultValue={selected} name={name} onChange={this.handleOptionChange}>
              {options.map((opcion)=> <option value={opcion.value}>{opcion.name}</option>)}  
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className={"fa fa-" + icono}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default FiltroOpcion;
