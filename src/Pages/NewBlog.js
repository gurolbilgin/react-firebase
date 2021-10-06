import React, { useContext, useState } from "react";
import {
  Form,
  TextArea,
  Input,
  Button,
  Container,
  Grid,
  Image,
  Segment,
} from "semantic-ui-react";
import { useHistory } from "react-router";
import firebase from "../firebase/firebase";
import { AuthContext } from "../context/AuthContext";

const createDate = new Date();

const initialBlogValues = {
  writer: {
    displayName: "",
    email: "",
  },
  title: "",
  imgURL: "",
  content: "",
  date: createDate.toISOString().split("T")[0],
  likes: 0,
  dislikes: 0,
};

const NewBlog = () => {
  const [blog, setBlog] = useState({
    writer: {
      displayName: currentUser?.displayName ? currentUser?.displayName : "",
      email: currentUser?.email ? currentUser?.email : "",
    },
    title: "",
    imgURL: "",
    content: "",
    date: createDate.toISOString().split("T")[0],
    likes: 0,
    dislikes: 0,
  });
  const { currentUser } = useContext(AuthContext);

  const history = useHistory();

  // console.log("currenUser", currentUser);

  // CRUD

  //AddInfo
  const addBlog = () => {
    const blogRef = firebase.database().ref("Blogs");
    // const blogs = {
    //   title: "",
    //   imgURL: "",
    //   content: "",
    // };
    // console.log(info);
    blogRef.push(blog);
    setBlog(initialBlogValues);
    history.push("/");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });

    // console.log("blog", blog);
  };

  console.log("initBlogVal", blog);
  return (
    // <Container>
    //   <Image src="../assets/blok.png" />
    //   {/* don't know why it does not work */}
    //   <Form className="form" center="true">
    //     <Form.Group widths="equal" center="true">
    //       <Form.Field control={Input} placeholder="Title*" />
    //       <Form.Field control={Input} placeholder="Image URL*" />
    //       <Form.Field control={TextArea} placeholder="Content*" />
    //       <Form.Field control={Button}>SUBMIT</Form.Field>
    //     </Form.Group>
    //   </Form>
    // </Container>

    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <h2 className="contact-header">NEW BLOG</h2>
        <Form size="large" onSubmit={addBlog}>
          <Segment stacked>
            <Form.Input
              fluid
              name="title"
              // icon="user"
              // iconPosition="left"
              placeholder="Title*"
              value={blog.title}
              onChange={handleOnChange}
              // required
            />

            <Form.Input
              fluid
              name="imgURL"
              // icon="phone"
              // iconPosition="left"
              placeholder="imgURL*"
              value={blog.imgURL}
              onChange={handleOnChange}
              // required
            />

            <TextArea
              placeholder="Content*"
              required
              name="content"
              value={blog.content}
              onChange={handleOnChange}
            />

            <Button color="teal" fluid size="large">
              SUBMIT
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default NewBlog;
