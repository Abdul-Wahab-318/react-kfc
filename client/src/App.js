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
import ProductDetail from './pages/productDetail/ProductDetail';
import { OrderListProvider } from './OrderedItems';

function App() {
  return (
    <div className="App">
      <OrderListProvider>

      <Router>
      <Header/>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/category/:slug">
            <ProductPage/>
          </Route>

          <Route exact path="/product/:slug">
            <ProductDetail/>
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

      </OrderListProvider>
    </div>
  );
}

export default App;
