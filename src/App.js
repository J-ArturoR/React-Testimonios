import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">      
      <div className='contenedor'>
        <h1>Estos son solo unos cuantos Pokemons</h1>
        <Testimonio 
        nombre='Pikachu'
          tipo='Electrico'
          imagen='pikachu'
          categoria='Raton'
          descripcion='Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.'
        />
        <Testimonio 
          nombre='Squirtle'
          tipo='Agua'
          imagen='squirtle'
          categoria='Tortuga'
          descripcion='Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.'
        />
        <Testimonio 
          nombre='Gengar'
          tipo='Fantasma'
          imagen='pokemon1'
          categoria='Sombra'
          descripcion='Las noches de luna llena, a este Pokémon le gusta imitar las sombras de la gente y burlarse de sus miedos.'
        />

      </div>
    </div>
  );
}

export default App;
