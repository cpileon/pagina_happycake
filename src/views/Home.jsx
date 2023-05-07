import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <> 
            <Container className="d-flex justify-content-center p-4">
                <div className="home-container shadow d-flex flex-column justify-content-center align-items-center p-3">
                <h2 className="text-muted">Bienvenidos/as</h2>
                    <div className="logos-big">
                        <img src="../../src/images/cakelogo_b.svg" alt="Logo Happy cake" />
                        <h1 className="name">Happy cake</h1>
                    </div>
                    <p>Pastelería tradicional con más de 20 años de experiencia.</p>
                    <p>Para cotizaciones, puedes ingresar a nuestro formulario de <Link to="/contacto" className="text-success text-decoration">contacto
                    </Link>.</p>
                </div>
            </Container>
        </>
    )
}
export default Home