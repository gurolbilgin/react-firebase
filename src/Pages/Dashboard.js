import React from "react";
import { useHistory, useParams } from "react-router";
import { Card, Grid, Image, Icon } from "semantic-ui-react";
import { useFetch } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // console.log("fetch", useFetch());
  const { blogList, loading } = useFetch();
  console.log("blogList", blogList);
  // console.log("Loading", loading);

  const { id } = useParams();
  console.log("id", id);

  return (
    <Grid doubling columns={8}>
      <Grid.Column>
        {loading ? (
          <p>loading</p>
        ) : blogList.length === 0 ? (
          <p>There is no blog to list</p>
        ) : (
          blogList.map((blog, index) => (
            <Card key={index}>
              <Link to={`/details/${blog.id}`}>
                <Card.Content>
                  <Image src={blog.image} wrapped ui={false} />
                </Card.Content>
                <Card.Content>
                  <Card.Header>{blog.title}</Card.Header>
                  <Card.Meta>
                    <span className="date">{"date"}</span>
                  </Card.Meta>
                  <Card.Description>{blog.content}</Card.Description>
                </Card.Content>
              </Link>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends {"like- dislike state can be added"}
                </a>
              </Card.Content>
            </Card>
          ))
        )}
      </Grid.Column>
    </Grid>
  );
};

export default Dashboard;
