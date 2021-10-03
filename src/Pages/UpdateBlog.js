import React, { useState, useEffect } from "react";

import { Form, TextArea, Button, Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router";
import firebase, { updateInfo, useFetch } from "../firebase/firebase";

const UpdateBlog = () => {
  const [blog, setBlog] = useState(blogList);

  const history = useHistory();

  const { blogList } = useFetch();
  console.log("blogList details", blogList);

  // useEffect(() => {
  //   const initialBlogValues = {
  //     title: blogList.title,
  //     imgURL: "",
  //     content: "",
  //   };
  // }, []);

  // CRUD

  //AddInfo
  // const addBlog = () => {
  //   const blogRef = firebase.database().ref("Blogs");
  //   // const blogs = {
  //   //   title: "",
  //   //   imgURL: "",
  //   //   content: "",
  //   // };
  //   // console.log(info);
  //   blogRef.push(blog);
  //   setBlog(initialBlogValues);
  //   history.push("/");
  // };

  const updateBlog = () => {
    updateInfo(blog);
    history.push("/");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });

    // console.log("blog", blog);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <h2 className="contact-header">NEW BLOG</h2>
        <Form size="large" onSubmit={updateBlog}>
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

export default UpdateBlog;
