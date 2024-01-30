import { Titulo } from "./Titulo";
import '../css/formContainer.css'
import Formulario from "./Formulario";

export const FormContainer = () => {
  return (
    <div className="FormContainer">
      <Titulo />
      <Formulario />
    </div>
  )
};
