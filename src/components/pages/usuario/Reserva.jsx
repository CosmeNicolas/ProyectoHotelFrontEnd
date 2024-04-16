import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { leerHabitacionesAPI } from "../../../helpers/queries";

const Reserva = () => {
const [reservas, setReservas] = useState([])

useEffect(() => {
  leerReservas()
}, [])


 const leerReservas = async()=>{
  try {
    const respuesta = await leerHabitacionesAPI()
    console.log(respuesta)
    if(respuesta.status === 200 ){
      const reservaHabitaciones = await respuesta;
      setReservas(reservaHabitaciones)
    }
    const reservaHabitaciones = await respuesta;
      setReservas(reservaHabitaciones)
      console.log(reservaHabitaciones)
  } catch (error) {
    console.log(error)
  }
 }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  return (
    <>
      <section className=" main  somos ">
        <section className="d-flex justify-content-center ">
          <div className="container-formulario-Reservar border">
            <h1 className="display-5   text-center">Registrar Habitacion</h1>
            <hr />

            <Form className=" p-4">
              <Form.Group className="mb-3" controlId="fechaInicio">
                <Form.Label>Fecha Ingreso</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/aaaa" />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="fechaFinal">
                <Form.Label>Fecha Salida</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/aaaa" />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
              <div className="text-center mb-3">
                <Button variant="primary" type="submit">
                  Reservar
                </Button>
              </div>
            </Form>
          </div>
        </section>
      </section>
    </>
  );
};

export default Reserva;
