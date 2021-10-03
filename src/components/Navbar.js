import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { signOut } from "../firebase/firebase";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  ` `;

  const signOutHandler = () => {
    signOut();
    history.push("/login");
  };

  const pushDashboard = () => {
    history.push("/");
  };

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

          <Nav.Link className="link" onClick={null}>
            <code>{" ------- < Gurol's Blog Bay >  -------- "}</code>
          </Nav.Link>

          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>
        <p>{}</p>

        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item>
            <Link className="links" to="/profile">
              Profile
            </Link>
          </NavDropdown.Item>

          <NavDropdown.Item>
            <Link className="links" to="/newblog">
              New
            </Link>
          </NavDropdown.Item>

          <NavDropdown.Divider />

          <Link>
            <NavDropdown.Item className="links" onClick={signOutHandler}>
              Logout
            </NavDropdown.Item>
          </Link>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
