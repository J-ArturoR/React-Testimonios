import React from "react"; //importar React
import '../stylesheets/Testimonio.css';
function Testimonio (props){
  return (
    <div className='testimonio-contenedor'>
      <img className='testimonio-img' src={require(`../img/testimonio-${props.imagen}.jpg`)} alt='Foto de Squirtle' />
      <div className='testimonio-texto'>

        <p className='testimonio-texto__nombre'>
         <strong>{props.nombre}</strong> 
          de Tipo 
          {props.tipo}</p> 

        <p className='testimonio-texto__cargo'>Categoria <strong>{props.categoria}</strong></p>

        <p className='testimonio-texto__testimonio'>{props.descripcion}</p>
      </div>
    </div>
  );
}
export default Testimonio;


