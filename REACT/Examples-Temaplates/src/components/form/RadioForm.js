import React from "react";
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "html",
  },
  {
    id: 2,
    name: "css",
  },
  {
    id: 3,
    name: "js",
  },
];

const RadioForm = () => {
  const [checked, setChecked] = useState();
  console.log(checked);

  const handleSubmit = () => {
    console.log({ id: checked });
  };
  return (
    <div className="form">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            onChange={() => setChecked(course.id)}
            checked={checked === course.id}
          />{" "}
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default RadioForm;
