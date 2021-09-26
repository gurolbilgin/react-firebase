import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../Pages/Login";
import NewBlog from "../Pages/NewBlog";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path='/' exact component={Dashboard} /> */}
        <Route path="/newblog" exact component={NewBlog} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
