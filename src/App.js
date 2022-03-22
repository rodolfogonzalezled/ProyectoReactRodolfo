import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componets/NavBar/NavBar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Próximamente encontrarás los mejores Juegos"/>
    </div>
  );
}

export default App;
