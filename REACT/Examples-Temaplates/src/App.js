import "./App.css";
import Counter from "./components/counter/Counter";
import Toggle from "./components/toggle/Toggle";
import Form from "./components/form/Form";
import RadioForm from "./components/form/RadioForm";
import { useState } from "react";
import CheckboxForm from "./components/form/CheckboxForm";

function App() {
  return (
    <div className="App">
      <h2>Toggle to test useState() hook</h2>
      <Toggle></Toggle>
      <h2>Counter to learn stale state</h2>
      <Counter></Counter>
      <h2>Submit form: two-way binding</h2>
      <h3>---Get input in form</h3>
      <Form></Form>
      <h3>---Radio form, check 1 option only, get ID of element</h3>
      <RadioForm></RadioForm>
      <h3>---Check box form</h3>
      <CheckboxForm></CheckboxForm>
    </div>
  );
}

export default App;
