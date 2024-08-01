
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import './App.css';

function App(props) {
  return ( 
    <div className="App"> 
    <Header name="Anna" color="purple" />
    <Main greet="Howdy"/>
    <Sidebar greet="hi"/>
    <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
    </Bag>

    </div> 
  ); 
}

export default App;
