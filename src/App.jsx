import { useState, useEffect } from "react";
import { JobInfo } from "./jobinfo";
import { BtnContainer } from "./btncontainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currItem, setCurrItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <div className="jobs-center">
      <BtnContainer jobs={jobs} currItem={currItem} setCurrItem={setCurrItem} />
      <JobInfo jobs={jobs} currItem={currItem} />
    </div>
  );
};
export default App;
