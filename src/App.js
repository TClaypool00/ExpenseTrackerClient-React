import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Login from "./Pages/account/Login";
import Register from "./Pages/account/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/account/register' component={Register} />
        <Route path="/account/login" component={Login} />
      </Routes>
    </Router>
  );
}

export default App;