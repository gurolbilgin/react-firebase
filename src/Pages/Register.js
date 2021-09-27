import React, { useState } from "react";
import { Form, Button, Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router";
import { newUser, signUpProviderGoogle } from "../firebase/firebase";

const initialRegisterValues = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const history = useHistory();
  const [register, setRegister] = useState(initialRegisterValues);

  const handleOnChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
    // console.log(register.email, register.password, register.username);
  };

  const handleSubmitRegister = () => {
    newUser(register.email, register.password, register.username);
    history.push("/");
  };

  const handleProviderRegisterGoogle = () => {
    signUpProviderGoogle();
    history.push("/");
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <h2 className="contact-header">REGISTER</h2>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              // icon="user"
              // iconPosition="left"
              placeholder="Username*"
              value={register.username}
              onChange={handleOnChangeRegister}
              // required
            />

            <Form.Input
              fluid
              name="email"
              // icon="user"
              // iconPosition="left"
              placeholder="Email*"
              value={register.email}
              onChange={handleOnChangeRegister}
              // required
            />

            <Form.Input
              fluid
              name="password"
              // icon="phone"
              // iconPosition="left"
              placeholder="Password*"
              value={register.password}
              onChange={handleOnChangeRegister}
              // required
            />

            <Button
              name="submit"
              color="teal"
              fluid
              size="large"
              onClick={handleSubmitRegister}
            >
              LOGIN
            </Button>
            <Button
              name="googleRegister"
              color="teal"
              fluid
              size="large"
              onClick={handleProviderRegisterGoogle}
            >
              SIGUP WITH GOOGLE?
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
