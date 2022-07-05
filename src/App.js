import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar';
import Body from './Componets/Body';
import ItemListContainer from './Componets/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <Body/>
    </div>
  );
}

export default App;
