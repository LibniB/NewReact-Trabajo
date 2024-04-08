import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TablaComponent from "./components/TablaComponent";
import BuscadorComponent from "./components/BuscadorComponent";
import RegistradorComponent from "./components/RegistradorComponent";
import ModalComponent from "./components/ModalComponent";


function App() {
  const [searchInput, setSearchInput] = useState("");
  const [contador, setContador] = useState(5);

  const [Productos, setProductos] = useState([
    {
      id: "1",
      Nombre: "Matematicas",
      Caracteristicas: "Estudio de números, formas y cambios.",
    },
    {
      id: "2",
      Nombre: "Filosofia",
      Caracteristicas: "Indagación sobre la realidad y la existencia.",
    },
    {
      id: "3",
      Nombre: "Ciencias Sociales",
      Caracteristicas: "Estudio del comportamiento humano y las interacciones sociales.",
    },
    {
      id: "4",
      Nombre: "Ciencias Naturales",
      Caracteristicas: "Estudio de fenómenos naturales y procesos universales.",
    },
    {
      id: "5",
      Nombre: "Literatura",
      Caracteristicas: "Exploración de la expresión artística a través del lenguaje escrito."
    },
      
    {
      id: "6",
      Nombre: "Historia",
      Caracteristicas: "Estudio de eventos pasados y su impacto en la sociedad."
    },
      
    {
      id: "7",
      Nombre: "Física",
      Caracteristicas: "Investigación de las leyes fundamentales del universo y su aplicación."
    },
      
    {
      id: "8",
      Nombre: "Química",
      Caracteristicas: "Estudio de la composición, estructura y propiedades de la producto."
    },
      
    {
      id: "9",
      Nombre: "Biología",
      Caracteristicas: "Exploración de la vida y los organismos vivos."
    },
      
    {
      id: "10",
      Nombre: "Psicología",
      Caracteristicas: "Estudio del comportamiento y los procesos mentales."
    },
      
    {
      id: "11",
      Nombre: "Economía",
      Caracteristicas: "Análisis de la producción, distribución y consumo de bienes y servicios."
    },
      
    {
      id: "12",
      Nombre: "Arte",
      Caracteristicas: "Manifestación creativa que refleja la imaginación y las emociones."
    },
      
    {
      id: "13",
      Nombre: "Geografía",
      Caracteristicas: "Estudio de la superficie terrestre y sus características."
    },
      
    {
      id: "14",
      Nombre: "Informática",
      Caracteristicas: "Ciencia que estudia el tratamiento automático de la información."
    },
      
    {
      id: "15",
      Nombre: "Sociología",
      Caracteristicas: "Análisis de las estructuras y dinámicas sociales."
    },
      
    {
      id: "16",
      Nombre: "Derecho",
      Caracteristicas: "Sistema de normas que regulan la conducta humana en la sociedad."
    },
      
    {
      id: "17",
      Nombre: "Medicina",
      Caracteristicas: "Ciencia y práctica relacionada con el diagnóstico y tratamiento de enfermedades."
    },
      
    {
      id: "18",
      Nombre: "Astronomía",
      Caracteristicas: "Estudio de los cuerpos celestes y el universo."
    },
      
    {
      id: "19",
      Nombre: "Educación",
      Caracteristicas: "Proceso de facilitar el aprendizaje y el desarrollo en los individuos."
    },
      
    {
      id: "20",
      Nombre: "Ecología",
      Caracteristicas: "Estudio de las interacciones entre los organismos y su entorno."
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
  const Contador = [5,10,15,20]

  
  
  const filteredProductos = Productos.filter(
    (producto) =>
      producto.id.toLowerCase().includes(searchInput.toLowerCase()) ||
      producto.Nombre.toLowerCase().includes(searchInput.toLowerCase()) ||
      producto.Caracteristicas.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, contador);

  const eliminarProducto=(id)=>{
    const nuevoArray = [...Productos];
    const buscar = nuevoArray.findIndex(producto=>producto.id===id);
      nuevoArray.splice(buscar,1);
      setProductos(nuevoArray);
  }

  const [showModal, setShowModal] = useState(false);

  return (

    <div>
     <select value={contador} name="" id="" onChange={handleContador} className="ll">
          {Contador.map((opcion)=>(
          <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>  
        

        <TablaComponent Productos={Productos} searchInput={searchInput} contador={contador} handleSearch={handleSearch} eliminarProducto={eliminarProducto} showModal={showModal}  
         toggleModal={setShowModal}  />
        <RegistradorComponent
        Tableregistros={filteredProductos.length}
        Tableproductos={Productos.length}
        
      ></RegistradorComponent>
      {showModal && <ModalComponent toggleModal={setShowModal} />}
      
  </div>
  );
}

export default App;

