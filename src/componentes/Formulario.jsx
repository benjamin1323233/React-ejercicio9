import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import ItemCitas from "./ItemCitas";

//class Info{
 // constructor(mascota,dueño,fecha,hora,sintomas){

  //}
//}
const Formulario = () => {
    const [arrayCitas, setCitas] = useState(() => {
  const datosGuardados = localStorage.getItem("citaskey");
  return datosGuardados ? JSON.parse(datosGuardados) : [];
});
  const [mascota,setMascota]= useState("")
  const [dueño,setDueño]= useState("")
  const [fecha,setFecha]= useState("")
  const [hora,setHora]=useState("")
  const [sintomas,setSintomas]= useState("")
  const agregarCita=(e)=>{
    e.preventDefault()
    if(mascota.length !== 0&&dueño.length !== 0&&fecha.length !== 0&&hora.length !== 0&&sintomas.length !== 0){
      const nuevacita = {
    nombrep: mascota,
    dueñop: dueño,
    fechap:fecha,
    horap:hora,
    sintomap:sintomas
  };
  setCitas([...arrayCitas, nuevacita])
    }else{
      alert("completa todos los campos")
    }
    console.log(arrayCitas)
  }
   useEffect(()=>{
  localStorage.setItem("citaskey",JSON.stringify(arrayCitas))
},[arrayCitas])
  const BorrarTarea = (nombreAEliminar) => {
  const Citafiltrada = arrayCitas.filter(
    (item) => item.nombrep !== nombreAEliminar
  );
  setCitas(Citafiltrada);
};
  return (
    <>
    <Card  className="m-5 container p-0">
      <ListGroup variant="flush">
        <ListGroup.Item>
          rellena el formulario para crear una cita
        </ListGroup.Item>
        <ListGroup.Item className="bg-primary-subtle">
          <Form id="miFormulario" onSubmit={agregarCita}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="mascota"
            >
              <Form.Label column sm="2">
                Nombre de mascota:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="nombre de mascota" onChange={(e)=> setMascota(e.target.value)}/>
              </Col>
            </Form.Group>
             <Form.Group
              as={Row}
              className="mb-3"
              controlId="dueño"
            >
              <Form.Label column sm="2">
                Nombre de dueño:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="nombre de dueño" onChange={(e)=> setDueño(e.target.value)}/>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="fecha"
            >
              <Form.Label column sm="2">
                Fecha:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="dd/mm/yyyy" onChange={(e)=> setFecha(e.target.value)}/>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="hora"
            >
              <Form.Label column sm="2">
                Hora:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="hh/mm" onChange={(e)=> setHora(e.target.value)}/>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="sintomas"
            >
              <Form.Label column sm="2">
                Sintomas:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="describir sintomas" onChange={(e)=> setSintomas(e.target.value)}/>
              </Col>
            </Form.Group>
          </Form>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-center py-2">
          <Button variant="primary" type="submit" form="miFormulario">
             Agregar una nueva cita
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    <div className="m-5 container p-0">
        { arrayCitas.map((item, indice)=> <ItemCitas key={indice} sami={item} borrar={BorrarTarea} /> )}
    </div>
    </>
  );
};

export default Formulario;
