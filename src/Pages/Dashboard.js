import React from "react";
import { Card, Grid, Image, Icon, CardContent } from "semantic-ui-react";
import { useFetch } from "../firebase/firebase";

const Dashboard = () => {
  // console.log("fetch", useFetch());
  const { blogList, loading } = useFetch();
  // console.log("blogList", blogList);
  // console.log("Loading", loading);
  return (
    <Grid doubling columns={8}>
      <Grid.Column>
        <Card>
          <Card.Content></Card.Content>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{"title"}</Card.Header>
            <Card.Meta>
              <span className="date">{"date"}</span>
            </Card.Meta>
            <Card.Description>{"context"}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends {"like- dislike state can be added"}
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};

export default Dashboard;
