import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ItemHabitacion = () => {
  return (
   <tr>
         <td>#</td>
              <td>401</td>
              <td>Simple</td>
              <td>$27000</td>
              <td>4/4/2024</td>
              <td>6/4/2024</td>
              <td>No disponible</td>
              <td>
                <img src="🛌" alt="" />
                </td>
                <td>
                <Button variant="warning" className="p-3 mx-1" >
                <FaEdit  />
                </Button>
                <Button variant="danger" className="p-3 mx-1">
                <MdDelete />
                </Button>
                </td>
    </tr>
  )
}

export default ItemHabitacion