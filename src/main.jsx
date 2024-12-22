import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// import { HooksApp } from "./HooksApp";
// import { UseState } from "./01-UseState/UseState";
// import { CsCounter } from "./01-UseState/CsCounter";
// import { SimpleForm } from "./02-UseEffect/SimpleForm";
// import { CsForm } from "./01-UseState/CsForm";
// import { UseFetch } from "./03-Mult-Hooks/UseFetch";
// import { FocusInput } from "./04-UseRef/FocusInput";
// import { TodoApp } from "./08-UseReducer/TodoApp";
// import { UseCallback } from "./05-UseCallback/UseCallback";
import { Main } from "./09-UseContext/Main";

// import "./08-UseReducer/intro-reducer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      {/* <HooksApp /> */}
      {/* <UseState /> */}
      {/* <CsCounter /> */}
      {/* <SimpleForm /> */}
      {/* <CsForm /> */}
      {/* <UseFetch /> */}
      {/* <FocusInput /> */}
      {/* <UseCallback /> */}
      {/* <TodoApp /> */}
      <Main />
    </StrictMode>
  </BrowserRouter>
);
