import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'; // Importer votre composant de formulaire

ReactDOM.render(<Form />, document.getElementById('root'));


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      prenom: '',
      email: '',
      telephone: '',
      chauffage: 'gaz'
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire à l'API ou à un autre service ici
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={this.state.prenom}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">Adresse mail :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="telephone">Numéro de téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={this.state.telephone}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="chauffage">Type de chauffage :</label>
        <select
          id="chauffage"
          name="chauffage"
          value={this.state.chauffage}
          onChange={this.handleChange}
        >
          <option value="gaz">Gaz</option>
          <option value="electricite">Électricité</option>
          <option value="fuel">Fuel</option>
          <option value="bois">Bois</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default Form;
