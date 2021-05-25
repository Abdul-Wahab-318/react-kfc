import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/categoryPage/CategoryPage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/category/:slug">
            <ProductPage/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

          
          <Route exact path="/register">
            <Register/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
