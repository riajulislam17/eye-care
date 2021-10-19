// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Doctors from './Component/Doctors/Doctors';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Appointment from './Component/Doctors/Appointment/Appointment';

function App () {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/appointment/:doctorId">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
