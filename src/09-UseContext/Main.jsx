import { Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const Main = () => {
  return (
    <UserProvider>
      <h1>UseContext</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
