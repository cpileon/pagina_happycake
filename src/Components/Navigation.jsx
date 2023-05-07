import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"


const Navigation = () => {
    return(
        <> 
            <Navbar bg="dark" variant="dark">
                <Container className="logo justify-content-start">
                    <Navbar.Brand className="logo">
                        <div className="circle">
                            <img src="../../src/images/cakelogo_w.svg" alt="Logo Happy cake" className="imglogo" />
                        </div>
                        Happy cake
                        </Navbar.Brand>
                </Container>
                <Container className="botones justify-content-end m-3">
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        Contacto
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation