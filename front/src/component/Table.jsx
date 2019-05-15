import React, { Component } from 'react'; 

import './table.css'

class Table extends Component {
  
    render() {
      return (
          <tr >
            <td>
              {this.props.obj.id}
            </td> 
            <td className="tex">
              {this.props.obj.nom}
            </td> 
            <td className="tex">        
              {this.props.obj.prenom}
            </td>
            <td>
              {this.props.obj.age} 
            </td>
            <td>
              {this.props.obj.classe}
            </td>
          </tr>
      );
    }
  }
  
  export default Table;