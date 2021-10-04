import React,{Component} from 'react';
import api from './api';

class App extends Component{
  state ={
      filmes: [],

  }
  // componente que atualiza lista
  async componentDidMount(){
    // listar 
    const response  = await api.get('');
    this.setState({filmes: response.data});

  }
  render(){
    const {filmes}= this.state;
    return (
        <div>
          <h1>Listar filmes</h1>
          {filmes.map(filme => (
              <li key={filme.show.id}>
                  <strong>{filme.show.name}</strong>
              </li>
          ))}
        </div>
    );
  }
}
export default App;
