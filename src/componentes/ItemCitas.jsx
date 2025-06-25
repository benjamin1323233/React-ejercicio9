import Button from 'react-bootstrap/Button';
const ItemCitas = ({sami,borrar}) => {
    return (
        <div className="borde container my-2 bg-dark-subtle p-2">
            <p className="mx-2">Nombre de la mascota: {sami.nombrep}   |   Nombre del dueño: {sami.dueñop}</p>
            <p className="mx-2"> Fecha: {sami.fechap}  |  Hora: {sami.horap}</p>
            <div className="m-2 bg-light borde p-3">
                <h3>Sintomas:</h3>
                <p>{sami.sintomap} </p>
            </div>
              <div className="d-flex justify-content-center">
                   <Button variant="danger" className='w-75' onClick={() => borrar(sami.nombrep)}>Borrar cita</Button>
              </div>
        </div>
    );
};

export default ItemCitas;