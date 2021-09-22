import React from "react";
import {
  Form,
  TextArea,
  Input,
  Button,
  Container,
  Grid,
  Image,
} from "semantic-ui-react";

const NewBlog = () => {
  return (
    <Container>
      <img src="" size="small" alt="blog" />

      <Form className="form" center="true">
        <Form.Group widths="equal" center="true">
          <Form.Field control={Input} placeholder="Title*" />
          <Form.Field control={Input} placeholder="Image URL*" />
          <Form.Field control={TextArea} placeholder="Content*" />
          <Form.Field control={Button}>SUBMIT</Form.Field>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlog;
