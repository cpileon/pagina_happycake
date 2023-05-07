import Container from "react-bootstrap/Container"
import Formulario from "../Components/Formulario"

const Contacto = () => {
    return(
        <> 
            <Container className="mt-4">
            <h1>Formulario de contacto</h1>
            <p className="mb-4">¿Quieres cotizar con nosotros/as o tienes alguna duda? ¡Completa nuestro formulario de contacto y te responderemos a la brevedad!</p>
            <Formulario />
            </Container>
        </>
    )
}
export default Contacto