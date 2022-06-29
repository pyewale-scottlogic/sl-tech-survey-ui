import { Container, Nav, Navbar } from "reactstrap"

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/Employees">Employees</Nav.Link>
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;