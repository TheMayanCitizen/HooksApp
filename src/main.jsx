import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { TodoApp } from "./08-UseReducer/TodoApp";
// import { UseState } from "./01-UseState/UseState";
// import { CsCounter } from "./01-UseState/CsCounter";
// import { SimpleForm } from "./02-UseEffect/SimpleForm";
// import { CsForm } from "./01-UseState/CsForm";
// import { UseFetch } from "./03-Mult-Hooks/UseFetch";
// import { FocusInput } from "./04-UseRef/FocusInput";
// import { UseCallback } from "./05-UseCallback/UseCallback";

// import "./08-UseReducer/intro-reducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HooksApp />
    {/* <UseState /> */}
    {/* <CsCounter /> */}
    {/* <SimpleForm /> */}
    {/* <CsForm /> */}
    {/* <UseFetch /> */}
    {/* <FocusInput /> */}
    {/* <UseCallback /> */}
    <TodoApp />
  </StrictMode>
);
