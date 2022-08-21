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

const CheckboxForm = () => {
  const [checked, setChecked] = useState([]);
  console.log(checked);

  const handleChecked = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...checked, id];
      }
    });
  };
  const handleClick = () => {
    console.log({
      id: checked,
    });
  };
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          {/**onChcnge attribute: listen to check event and call function */}
          {/**checked attribute: the boxes will be checked if checked = true */}
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleClick}>Register</button>
    </div>
  );
};

export default CheckboxForm;
