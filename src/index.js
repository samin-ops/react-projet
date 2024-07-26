import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{

  // un tableau qui represente un objet
  state = {
    clients:[
      {id:1, nom:"Samin Serge"},
      {id:2, nom:"Gonti Aaron"},
      {id:3, nom:"Mayanka Pelagie"},
      {id:4, nom:"Denan Jeanne"}
    ]
  }
  render(){
    // declaration de constante ou fonctions pour l'utiliser dans mon rendu.
    const title = <h1>La liste des clients</h1>
    const elements = this.state.clients.map((client)=><li>{client.id} {client.nom} <button>X</button></li>)
    return (
        <div>
          <h1>{title}</h1>
          <ul>
            {elements}
          </ul>
          <form>
            <input type="text" placeholder='Ajouter un client'/>
            <button>Ajouter</button>
          </form>
          <p>Vous pouvez me contacter a l'adresse suivante.</p>
        </div>
    );  
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);
