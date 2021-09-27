import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import NewBlog from "../Pages/NewBlog";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/newblog" component={NewBlog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
