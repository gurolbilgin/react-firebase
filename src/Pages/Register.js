import React, { useState } from "react";
import { Form, Button, Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router";
import { signIn } from "../firebase/firebase";
// import { signIn, SignUpProvider, forgotPassword } from "";

const initialLoginValues = {
  email: "",
  password: "",
};

const Login = () => {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState(initialLoginValues);

  const handleOnChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmitLogin = () => {
    signIn(loginInfo.email, loginInfo.password);
    history.push("/");
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <h2 className="contact-header">LOGIN</h2>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              name="email"
              // icon="user"
              // iconPosition="left"
              placeholder="Email*"
              value={loginInfo.email}
              onChange={handleOnChangeLogin}
              // required
            />

            <Form.Input
              fluid
              name="password"
              // icon="phone"
              // iconPosition="left"
              placeholder="Password*"
              value={loginInfo.password}
              onChange={handleOnChangeLogin}
              // required
            />

            <Button color="teal" fluid size="large" onClick={handleSubmitLogin}>
              LOGIN
            </Button>
            <Button color="teal" fluid size="large">
              FORGOT PASSWORD?
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
