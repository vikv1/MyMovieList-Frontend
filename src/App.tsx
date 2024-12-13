// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./assets/Components/SignUp/SignUp";
import Login from "./assets/Components/Login/Login";
import Navbar from "./assets/Components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />

        {/* You can add a default route as well */}
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
