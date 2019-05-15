import React, { Component } from 'react';
import axios from 'axios';

//import Table from './Table';


export default class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eleve:[],
        };
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070' + this.props.location.pathname)
        .then(res => {this.setState({
            eleve: res.data            
        });
    })    
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
        })       
          .catch(function (error) {
            console.log(error);
          })
      }
    //   tabRow(){
    //     return this.state.eleve.map((object, i) => {
    //         return <Table obj={object} key={i} />,
    //         console.log(object);
            
    //     });
    //}

    render() {

        return (
            <div className='product-list-wrapper'>

                <div>
                    <table className="table table-bordered table-hover" style={{ marginTop: 20 }}>  
                        {/* <thead>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Age</th>
                            <th>Classse</th>
                        </thead> */}
                    <tbody>
                        {this.state.eleve.length > 0 ? this.state.eleve.map((object, index) =>{
                            return  (index == 0) ? 
                            <div>
                            <h1>Eleve</h1>
                            <p>Nom: {object.nom}</p> 
                            <p>Prenom: {object.prenom}</p>
                            <p>Age: {object.age}</p>
                            <p>classe: {object.classe}</p> 
                            <p>{console.log(JSON.stringify(object))}</p>
                            </div>                           
                            : <div>
                                <h1>Professeur</h1>
                                <p>Nom: {object.nom}</p>
                                <p>Prenom: {object.prenom}</p>
                                <p>Matiere: {object.matiere1}</p>
                                <p>{object.matiere2}</p>
                                <p>{object.matiere3}</p>
                                <p>Classe: {object.classe1}</p>
                                <p>{object.classe2}</p>
                                <p>{object.classe3}</p>
                            </div> 
                        }) : ""
                      }
                    </tbody>
                    </table>
                    {/* {this.state.eleve.map((object) =>{
                            return <p>{JSON.stringify(object)}</p>
                            console.log(object);
                        })
                    } */}
                </div>
            </div>
        )
    }
}


// const mapStateToProps = state => ({
//     error: getElevesError(state),
//     eleves: getEleves(state),
//     //pending: getElevesPending(state)
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchEleves: fetchElevesAction
// }, dispatch)

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProductView );