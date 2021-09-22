import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewBlog from "../Pages/NewBlog";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path='/' exact component={Dashboard} /> */}
        <Route path="/newblog" exact component={NewBlog} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
