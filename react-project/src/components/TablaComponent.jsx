import BuscadorComponent from "./BuscadorComponent";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import ModalAgregarComponent from "./ModalAgregarComponent";
import ModalEditarComponent from "./ModalEditarComponent";

const TablaComponent = ({Productos, searchInput, contador, handleSearch, 
  eliminarProducto,showModal, VisibilityModal, setProductos,showEditModal, VisibilityModalEdit,productoEditar,setProductoEditar,handleUpdateProduct,onEditar}) => {
  
  const filteredProductos = Productos.filter((producto) =>
  producto.Nombre.toLowerCase().includes(searchInput.toLowerCase()) ||
  producto.id.toLowerCase().includes(searchInput.toLowerCase()) ||
  producto.Caracteristicas.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, contador);

  


    return (
    <div className="container">
     <BuscadorComponent setSearch={handleSearch} />

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Caracteristicas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProductos.map((producto,index) =>(
            <tr key={index}>
              <td>{producto.id}</td>
              <td>{producto.Nombre}</td>
              <td>{producto.Caracteristicas}</td>
              <td>
                <button style={{backgroundColor:'white'}} onClick={() => onEditar(index)} ><CiEdit style={{color:'black'}}/></button>
               
                <button style={{backgroundColor:'white'}} onClick={()=>{eliminarProducto(producto.id)}}><AiFillDelete style={{color:'red'}} /></button>               
                </td>             
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success mb-4" onClick={() => VisibilityModal(true)}>Agregar</button>
      {showModal && <ModalAgregarComponent 
      VisibilityModal={VisibilityModal} 
      setProductos={setProductos} />}

      {showEditModal && <ModalEditarComponent 
      VisibilityModalEdit={VisibilityModalEdit} 
      productoEditar={productoEditar}
      setProductoEditar={setProductoEditar} 
      handleUpdateProduct={handleUpdateProduct}/>}
    </div>
    );
  };
  
  export default TablaComponent;