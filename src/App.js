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
import { UserInfoProvider } from './userInfo';

function App() {
  return (
    <div className="App">
      <OrderListProvider>

      <Router>
        <UserInfoProvider>
          <Header/>
   
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/category/:slug">
            <UserInfoProvider>
            <ProductPage/>
            </UserInfoProvider>
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
          
          <Route exact path="*">
            <h1 className="text-center my-5">you are lost lol</h1>
          </Route>
          
        </Switch>
        <Footer/>
        </UserInfoProvider>
      </Router>

      </OrderListProvider>
    </div>
  );
}

export default App;
