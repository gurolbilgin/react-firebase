import React from "react";
import { useParams } from "react-router";
import { Card, Grid, Image, Icon } from "semantic-ui-react";
import { useFetch } from "../firebase/firebase";

const Details = () => {
  const { blogList, loading } = useFetch();
  const { id } = useParams();

  const detailedBlog = blogList.filter((blog) => blog.id === id);

  return (
    <Grid doubling columns={8}>
      <Grid.Column>
        {loading ? (
          <Card.Content>
            <p>loading</p>
          </Card.Content>
        ) : (
          <Card>
            <Card.Content>
              <Image src={detailedBlog[0].image} wrapped ui={false} />
            </Card.Content>
            <Card.Content>
              <Card.Header>{detailedBlog[0].title}</Card.Header>
              <Card.Meta>
                <span className="date">{"date"}</span>
              </Card.Meta>
              <Card.Description>{detailedBlog[0].content}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends {"like- dislike state can be added"}
              </a>
            </Card.Content>
          </Card>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default Details;
