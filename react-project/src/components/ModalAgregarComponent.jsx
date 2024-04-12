import React from 'react';
import { useState } from 'react';

const ModalAgregarComponent = ({VisibilityModal, setProductos}) => {
    const [id, setId] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Caracteristicas, setCaracteristicas] = useState('');

    const closeModal = () => {
        VisibilityModal(false); 
      };
      
    const handleAgregar = () => {
        const nuevoProducto = {
            id: id,
            Nombre: Nombre,
            Caracteristicas: Caracteristicas
        };
        setProductos((productos) => [...productos, nuevoProducto]);
        VisibilityModal(false);
        
        Swal.fire({
            text: 'El producto ha sido agregado con éxito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };
    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                      <h2>Agregar Producto</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" className="form-control" id="id" onChange={(e) => setId(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Caracteristicas" className="form-label">Caracteristicas</label>
                                <textarea className="form-control" id="Caracteristicas" rows="2" onChange={(e) => setCaracteristicas(e.target.value)}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={handleAgregar}>Agregar</button>
                        <button type="button" className="btn btn-danger" onClick={closeModal}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default ModalAgregarComponent;
