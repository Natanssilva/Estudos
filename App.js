import React from "react";

const Bemvindo = (props) => {  //Componente sem Estado
  return(  //nome e idade são nome das propriedades "props"
    <div>
      <h2>Bem-Vindo {props.nome}!</h2>
      <h3>Eu tenho {props.idade} anos</h3> 
    </div>
  );
}

export default function App(){  //componente APP 
  //<Bemvindo nome = "matheus"/>  nome = "matheus" é uma props
  return(
    <div>  
      <Bemvindo nome = "Natan" idade = "19" />  
      <Bemvindo nome = "Silvana" idade = "60" /> 
    
    </div>
  );
}