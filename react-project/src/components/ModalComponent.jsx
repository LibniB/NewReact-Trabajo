import React from 'react';

const ModalComponent = ({toggleModal}) => {
    const closeModal = () => {
        toggleModal(false); 
      };
    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" className="form-control" id="id" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripción</label>
                                <textarea className="form-control" id="descripcion" rows="2"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={toggleModal}>Agregar</button>
                        <button type="button" className="btn btn-danger" onClick={closeModal}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default ModalComponent;
