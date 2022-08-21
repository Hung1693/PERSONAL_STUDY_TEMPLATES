import React, { useState } from "react";

const RenderInput = () => {
  //get item in local storage
  const storageJobs = JSON.parse(localStorage.getItem("job"));
  const [task, setTask] = useState("");

  //pass local storage value to listJob
  const [listJob, setListJobs] = useState(storageJobs ?? []);
  const handleClick = () => {
    setListJobs((prev) => {
      const localStorageJobList = [...prev, task];

      //save list jobs to local storage
      localStorage.setItem("job", JSON.stringify(localStorageJobList));
      return localStorageJobList;
    });
    setTask("");
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button onClick={handleClick}>Add</button>

      <ul>
        {listJob.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default RenderInput;
