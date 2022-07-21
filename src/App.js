import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Register from "./Pages/account/Register";
import Add from "./Pages/bills/Add";
import Home from './Pages/Home';
import { PrivateRoute } from './helpers/Routes/PrivateRoute';
import { PublicRoute } from './helpers/Routes/PublicRoute';
import { Fragment } from 'react'


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />        
        <div className="box">
          <p id="error"></p>
          <p id="success"></p>
          <Routes>
            <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path='/bills/add' element={<PrivateRoute><Add /></PrivateRoute>} />
            <Route path='/account/register' element={<PublicRoute><Register /></PublicRoute>} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;