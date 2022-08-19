import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
   const clienteNome = 'Isaque'

    return (
      <header>
         <div className="App">
            <ul class="nav">
               <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Active</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
               </li>
            </ul>
            <Frase />
         </div>
         <div className="PrimeiroApp">
            <SayMyName nome="Matheus" />
            <SayMyName nome="Héber" />
            <SayMyName nome={clienteNome} />
            <Pessoa nome="Rodrigo" idade="36" Profissao="Programador" foto="https://via.placeholder.com/150" />
            
         </div>
    </header>
  );
}

export default App;
