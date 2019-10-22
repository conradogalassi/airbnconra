import React from 'react';

class FiltroOpcion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {options, selected, icon, name} = this.props;

    const items = [];

    for (const [index, value] of options.entries()) {
      items.push(<a className="navbar-item" key={index}>{value.name}</a>)
    }

    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">{this.props.name}</a>
        <div className="navbar-dropdown" selected={this.props.selected} icon={this.props.icon}>
          {items}                      
        </div>
      </div>
    );
  }
}

export default FiltroOpcion;
