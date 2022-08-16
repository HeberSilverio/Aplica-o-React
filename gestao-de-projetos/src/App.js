import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {
  const name = 'Héber'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu primeiro aplicativo em React</p>
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}! Você gostaria de ter o nome sempre em maiúsculas, assim: {newName}? </p>
      <p>Soma: {2 + 2}</p>
      <p>Retorno da função soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React</a>
        
        <HelloWorld />
      </header>
      
    </div>
  );
}

export default App;
