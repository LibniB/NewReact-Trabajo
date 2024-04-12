import React, { useState, useEffect } from 'react';

const ModalEditarComponent = ({ productoEditar,onUpdate,onCancel, Productos}) => {
    const [id, setId] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Caracteristicas, setCaracteristicas] = useState('');


    useEffect(() => {
        if (productoEditar) {
            setId(productoEditar.id);
            setNombre(productoEditar.Nombre);
            setCaracteristicas(productoEditar.Caracteristicas);
        }
    }, [productoEditar]);

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
    // Llama a la función onUpdate pasada como prop, pasando los datos actualizados del producto
        onUpdate({ ...productoEditar, id, Nombre, Caracteristicas })
        onCancel();
  };
  

    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={onCancel}></button>
                    </div>
                    <div className="modal-body">
                        <h2>Editar Producto</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" className="form-control" id="id" name='id' value={id} onChange={(e) => setId(e.target.value)}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="Nombre" name='Nombre' value={Nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Caracteristicas" className="form-label">Caracteristicas</label>
                                <textarea className="form-control" id="Caracteristicas" name='Caracteristicas' rows="2" value={Caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Actualizar</button>
                        <button type="button" className="btn btn-danger" onClick={onCancel}>Cancelar</button>
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default ModalEditarComponent;
