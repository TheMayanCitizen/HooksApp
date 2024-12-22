import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link> */}

      <NavLink
        to="/"
        //evalua si el link esta activo, retorna "active" si es true y un espacio en blanco si es false
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Login
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        About
      </NavLink>
    </div>
  );
};

//Este codigo nos sirve para revisar los arguments que nos envia el NavLink, el que podemos usar es el de isActive para resaltar el la ruta en la que nos encontramos
{
  /* <NavLink
  to="/"
  className={(args) => {
    console.log(args);
    return "nav-link";
  }}
></NavLink>; */
}
