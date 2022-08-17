import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
   const clienteNome = 'Isaque'

    return (
    <div className="App">
      
      <SayMyName nome="Matheus" />
      <SayMyName nome="Héber" />
      <SayMyName nome={clienteNome} />
      <Pessoa nome="Rodrigo" idade="36" Profissao="Programador" foto="https://via.placeholder.com/150" />
      
    </div>
  );
}

export default App;
