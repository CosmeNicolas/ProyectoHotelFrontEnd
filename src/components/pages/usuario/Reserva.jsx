import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { leerHabitacionesAPI, obtenerHabitacionAPI } from "../../../helpers/queries";
import { useParams } from "react-router-dom";

const Reserva = ({reserva, titulo}) => {
const [reservas, setReservas] = useState([])
const { id } = useParams()

useEffect(() => {
  if(reserva){
    cargarDatosHabitacion()
  }
}, [])


const cargarDatosHabitacion = async()=>{
  const respuesta = await obtenerHabitacionAPI(id)
  console.log(respuesta)
  if(respuesta.status === 200){
    const obtenerHabitacion = await respuesta.json()
    console.log(obtenerHabitacion)
    /* traer los valores de las habitaciones */
    setValue("tipo",obtenerHabitacion.tipo)
  }
}




  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <>
      <section className=" main  somos ">
        <section className="d-flex justify-content-center ">
          <div className="container-formulario-Reservar border">
            <h1 className="display-5   text-center">Registrar Habitacion</h1>
            <hr />

            <Form className=" p-4">
            {/* Nombre habitacion */}
            <Form.Group  controlId="tipo">
            <Form.Label>Nombre Habitacion</Form.Label>
            <Form.Select
                aria-label="select"
                className="color-inputs text-secondary"
                {...register("tipo", {
                  required:
                    "Seleccionar la categoría de la habitación es obligatorio",
                })}
              >
                 <option value={""}>Seleccione una opción</option>
                <option value={"Doble Twin"}>Doble Twin</option>
                <option value={"Doble Superior"}>Doble Superior</option>
                <option value={"Triple Superior"}>Triple Superior</option>
                <option value={"Suite"}>Suite</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.tipo?.message}
              </Form.Text>
              </Form.Group>




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
