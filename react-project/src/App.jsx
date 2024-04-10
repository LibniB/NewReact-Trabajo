import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TablaComponent from "./components/TablaComponent";
import BuscadorComponent from "./components/BuscadorComponent";
import RegistradorComponent from "./components/RegistradorComponent";
import ModalAgregarComponent from "./components/ModalAgregarComponent";
import Swal from 'sweetalert2';


function App() {
  const [searchInput, setSearchInput] = useState("");
  const [contador, setContador] = useState(5);

  const [Productos, setProductos] = useState([
    {
      id: "1",
      Nombre: "Smartphone",
      Caracteristicas: "Teléfono inteligente con pantalla táctil y capacidades de comunicación avanzadas."
    },
    {
      id: "2",
      Nombre: "Refrigerador",
      Caracteristicas: "Aparato eléctrico utilizado para mantener los alimentos frescos y conservados."
    },
    {
      id: "3",
      Nombre: "Sofá",
      Caracteristicas: "Mueble acolchado diseñado para sentarse cómodamente."
    },
    {
      id: "4",
      Nombre: "Zapatos deportivos",
      Caracteristicas: "Calzado diseñado para actividades físicas y deportivas."
    },
    {
      id: "5",
      Nombre: "Televisor",
      Caracteristicas: "Dispositivo para recibir señales de televisión y mostrar imágenes y sonido."
    },
    {
      id: "6",
      Nombre: "Aspiradora",
      Caracteristicas: "Dispositivo eléctrico utilizado para limpiar el polvo y la suciedad de las superficies."
    },
    {
      id: "7",
      Nombre: "Muñeca",
      Caracteristicas: "Figura de juguete con forma humana, generalmente utilizada para el juego simbólico."
    },
    {
      id: "8",
      Nombre: "Novela",
      Caracteristicas: "Obra literaria de ficción narrativa, generalmente larga y en prosa."
    },
    {
      id: "9",
      Nombre: "Destornillador",
      Caracteristicas: "Herramienta manual utilizada para apretar o aflojar tornillos."
    },
    {
      id: "10",
      Nombre: "Leche",
      Caracteristicas: "Producto lácteo líquido, generalmente obtenido de vacas."
    },
    {
      id: "11",
      Nombre: "Reloj de pulsera",
      Caracteristicas: "Dispositivo para medir el tiempo que se lleva en la muñeca."
    },
    {
      id: "12",
      Nombre: "Bicicleta",
      Caracteristicas: "Vehículo de dos ruedas impulsado por pedales."
    },
    {
      id: "13",
      Nombre: "Laptop",
      Caracteristicas: "Computadora portátil diseñada para ser transportada fácilmente."
    },
    {
      id: "14",
      Nombre: "Cámara fotográfica",
      Caracteristicas: "Dispositivo para capturar imágenes estáticas o en movimiento."
    },
    {
      id: "15",
      Nombre: "Colchón",
      Caracteristicas: "Superficie acolchada utilizada para dormir."
    },
    {
      id: "16",
      Nombre: "Cepillo de dientes",
      Caracteristicas: "Herramienta utilizada para limpiar los dientes y las encías."
    },
    {
      id: "17",
      Nombre: "Mesa de comedor",
      Caracteristicas: "Mueble utilizado para comer en una posición sentada."
    },
    {
      id: "18",
      Nombre: "Guitarra",
      Caracteristicas: "Instrumento musical de cuerda pulsada."
    },
    {
      id: "19",
      Nombre: "Cafetera",
      Caracteristicas: "Aparato utilizado para hacer café."
    },
    {
      id: "20",
      Nombre: "Lámpara de escritorio",
      Caracteristicas: "Dispositivo de iluminación diseñado para colocarse en un escritorio."
    }

  ]) 
  

  const handleSearch = (inputValue) => {
    if (inputValue) {
      setSearchInput(inputValue.toLowerCase());
    } else {
      setSearchInput("");
    }
  };

  const handleContador = (e)=>{
    setContador(Number(e.target.value))
  }
  const Contador = [5,10,15,20,25]

  
  
  const filteredProductos = Productos.filter(
    (producto) =>
      producto.id.toLowerCase().includes(searchInput.toLowerCase()) ||
      producto.Nombre.toLowerCase().includes(searchInput.toLowerCase()) ||
      producto.Caracteristicas.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, contador);


  const eliminarProducto = (id) => {
    const nuevoArray = [...Productos];
    const buscar = nuevoArray.findIndex((producto) => producto.id === id);
  
    if (buscar !== -1) {
      Swal.fire({
        text: '¿Estás seguro de eliminar este producto?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar',
      }).then((result) => {
        if (result.isConfirmed) {
          nuevoArray.splice(buscar, 1);
          setProductos(nuevoArray);
          Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
        }
      });
    }
  };


  const [showModal, setShowModal] = useState(false);

  return (

    <div>
     <select value={contador} name="" id="" onChange={handleContador} className="ll">
          {Contador.map((opcion)=>(
          <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>  
        

        <TablaComponent Productos={Productos} searchInput={searchInput} contador={contador} handleSearch={handleSearch} eliminarProducto={eliminarProducto} showModal={showModal}  
         VisibilityModal={setShowModal}  />
        <RegistradorComponent
        Tableregistros={filteredProductos.length}
        Tableproductos={Productos.length}
        
      ></RegistradorComponent>
      {showModal && <ModalAgregarComponent VisibilityModal={setShowModal} setProductos={setProductos} />}
      
  </div>
  );
}

export default App;

