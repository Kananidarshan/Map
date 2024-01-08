import logo from './logo.svg';
import './App.css';
import Array1 from './Array1';
import Exa1 from './Exa1';
import Exa2 from './Exa2';
import Exa3 from './Exa3';
import Exa4 from './Exa4';
import Todo from './Todo';

function App() {
  const Language=["C","C++","Android","IOS","React"]
  return (
    <div>
      <h1>Here Map Example..!</h1>
      <hr/>
      {Language.map(name1=><h2>{name1}</h2>)}
      <hr/>
      <Array1/>
      <hr/>
      <Exa1/>
      <hr/>
      <Exa2/>
      <hr/>
      <Exa3/>
      <hr/>
      <Exa4/>
      <hr/>
      <Todo/>
      
    </div>
  );
}

export default App;
