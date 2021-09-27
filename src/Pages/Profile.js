import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Card style={{ width: "18rem" }}>
      {currentUser ? (
        <Card.Body>
          <Card.Text>Hello! </Card.Text>
          <Card.Title>
            {currentUser.displayName ||
              "There is no display name to show! We need to work on that BTW :)"}
          </Card.Title>
          <Card.Subtitle className="mb-3">{currentUser.email}</Card.Subtitle>
          <Card.Text>
            We can add a feature that show the user the last login information
          </Card.Text>
        </Card.Body>
      ) : (
        <Card.Body>
          <Card.Text>Hello! </Card.Text>
          <Card.Subtitle className="mb-4 text-muted">
            {currentUser.email}
          </Card.Subtitle>
        </Card.Body>
      )}
    </Card>
  );
};

export default Profile;
