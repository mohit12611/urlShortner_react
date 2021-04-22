import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './login';
import MainPage from './mainPage';
import RegisterPage from './register'

function App() {



  return (
    <>
      <Router>

        <div className="container">
          <div className="d_flex">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><h1>URL Shortner</h1></Link>
          <button onClick={ () => {
            window.localStorage.removeItem("app_token");
          }}className="btn btn-secondary">Logout</button>
          </div>

          <Switch>

            <Route path="/mainPage" component={MainPage} exact={true}/>

            <Route path="/" component={LoginPage} exact={true}/>

            <Route path="/register" component={RegisterPage} exact={true}/>

          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;







/*






*/