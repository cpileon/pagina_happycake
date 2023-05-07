import Container from "react-bootstrap/Container"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Formulario = () =>{
    return(
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="nombreCompleto">
                    <Form.Label>Ingresa tu nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Ej. Francisca Guzmán" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="correoElectronico">
                    <Form.Label>Ingresa tu correo:</Form.Label>
                    <Form.Control type="email" placeholder="Ej. fguzman@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>¿En qué podemos ayudarte?</Form.Label>
                        <Form.Select>
                            <option selected>Selecciona una opción </option>
                                <option value="1">Contratación servicios de banquetería</option>
                                <option value="2">Cotización torta</option>
                                <option value="3">Otras consultas</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="cuerpoCorreo">
                    <Form.Label>Escribe tu requerimiento aquí: </Form.Label>
                    <textarea className="form-control" id="cuerpoCorreo" rows="5"></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Quiero recibir noticias de Happy Cake a mi correo" />
                    <Form.Text className="text-muted">
                    Nunca compartiremos tus datos con ninguna empresa o persona.
                    </Form.Text>
                </Form.Group>

                <Button variant="dark" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>

    )
}
export default Formulario