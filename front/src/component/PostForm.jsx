import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
  constructor(props){
    super(props);    
    this.state = {
      nom: '',
      prenom: "",
      age: "",
      classe: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

onSubmit(e) {
  e.preventDefault();
  const post = {
    nom: this.state.nom,
    prenom: this.state.prenom,
    age: this.state.age,
    classe: this.state.classe,
  };

  this.props.createPost(post);
}

// fetch('http://localhost:8070/eleve', {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json'
//   },
//   body: JSON.stringify(post)
// })
//   .then(res => res.json())
//   .then(data => console.log(data));  

// }

    render() {
      return (
          <div>
              <form onSubmit={this.onSubmit} >
                <div>
                  <span>Nom:</span> <input type="text" placeholder="nom" name="nom" value={this.state.nom} 
                  onChange={this.onChange} /> <br/>
                  <span>Prenom:</span> <input type="text" placeholder="prenom" name="prenom" value={this.state.prenom} 
                  onChange={this.onChange} /> <br/>
                  <span>Age:</span> <input type="text" placeholder="age" name="age" value={this.state.age} 
                  onChange={this.onChange} /> <br/>
                  <span>Classe:</span> <input type="text" placeholder="classe" name="classe" value={this.state.classe} 
                  onChange={this.onChange} /> <br/>
                  <button type="submit">Poster</button>        
                </div>
            </form>
          </div>
      );
    }
  }


PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);