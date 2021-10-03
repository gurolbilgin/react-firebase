import React from "react";
import { useParams } from "react-router";
import { Card, Grid, Image, Icon } from "semantic-ui-react";
import { useFetch } from "../firebase/firebase";

const Details = () => {
  // console.log("fetch", useFetch());
  const { blogList, loading } = useFetch();
  // console.log("blogList", blogList);
  // console.log("Loading", loading);
  // useFetch();
  let { id } = useParams();
  // const certainBlog = bloglis

  return (
    <Grid doubling columns={8}>
      <Grid.Column>
        <Card>
          <Card.Content>
            <Image src={bloglist.image} wrapped ui={false} />
          </Card.Content>
          <Card.Content>
            <Card.Header>{blog.title}</Card.Header>
            <Card.Meta>
              <span className="date">{"date"}</span>
            </Card.Meta>
            <Card.Description>{blog.content}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends {"like- dislike state can be added"}
            </a>
          </Card.Content>
        </Card>
        )) )}
      </Grid.Column>
    </Grid>
  );
};

export default Details;
