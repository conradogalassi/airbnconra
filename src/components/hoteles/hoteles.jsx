import React from 'react';
import Hotel from '../hotel/hotel';

class Hoteles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {filtrados} = this.props;

    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {filtrados ? (
              filtrados.map((value, index) => (
                <div className="column is-one-third" key={index}>
                  <Hotel datos={value}/>
                </div>
              ))
            ) : (
              <article className="message is-warning">
                <div className="message-body">
                  No se han encontrado hoteles con los criterios definidos
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Hoteles;
