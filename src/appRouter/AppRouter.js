import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFetch } from "../firebase/firebase";
import Dashboard from "../Pages/Dashboard";
import Details from "../Pages/Details";
import Login from "../Pages/Login";
import NewBlog from "../Pages/NewBlog";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";

const AppRouter = () => {
  const { blogList } = useFetch();
  // let { id } = useParams();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/newblog" component={NewBlog} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/details/:id" component={Details} /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
