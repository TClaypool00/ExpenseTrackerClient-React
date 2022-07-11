import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Register from "./Pages/account/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="box">
        <Routes>
          <Route path='/account/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;