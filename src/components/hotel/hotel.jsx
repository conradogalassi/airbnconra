import React from 'react';

class Hotel extends React.Component {
  constructor(props) {
    super(props);
  }

  precioSigno(param) {
    switch (param) {
      case 1: return '$';
        break;

      case 2: return '$$';
        break;

      case 3: return '$$$';
        break;

      case 4: return '$$$$';
        break;
        
      default:
        return '$';
    }
  }

  render() {
    const {datos} = this.props;
    console.log(datos);

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={datos.photo} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title">{datos.name}</p>
            </div>
          </div>

          <div className="content">
            {datos.description}
            <br/>
            <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
              <div className="control">
                <div className="tag has-addons">
                  <span className="tag is-medium is-info">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span className="tag is-medium">{datos.city},{datos.country}</span>
                </div>
              </div>
              <div className="control">
                <div className="tag has-addons">
                  <span className="tag is-medium is-info">
                    <i className="fa fa-bed"></i>
                  </span>
                  <span className="tag is-medium">{datos.rooms} habitaciones</span>
                </div>
              </div>
              <div className="control">
                <div className="tag has-addons">
                  <span className="tag is-medium is-info">
                    <i className="fa fa-dollar-sign"></i>
                  </span>
                  <span className="tag is-medium">
                    {this.precioSigno(datos.price)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotel;