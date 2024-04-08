import React  from "react";

const RegistradorComponent = ({ Tableregistros, Tableproductos }) => {

  return (
    <div >
        <p>Total registros: {Tableregistros} de {Tableproductos}</p>
    </div>
  )
};

export default RegistradorComponent;