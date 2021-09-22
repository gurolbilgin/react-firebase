// import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { signOut } from "../auth/firebase";
import {
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Navbar,
  Container,
} from "react-bootstrap";

const Header = () => {
  // const history = useHistory();
  // const { currentUser } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search a Blog..."
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      <Navbar.Collapse collapseOnSelect id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {/* <Nav.Link href="#action2">Link</Nav.Link> */}

          <Nav.Link className="link" href="#action1">
            {/* <code> */}
            ------- {"<"}Gurol's Blog Bay /{">"} --------
            {/* </code>{" "} */}
          </Nav.Link>

          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>

        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action4">New</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
