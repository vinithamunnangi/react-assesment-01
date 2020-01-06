import React, { useEffect, useState } from "react";

import SearchableSelect from "./SearchableSelect";
import { fetchIssues } from "./repo";

function Home({ history }) {
  const [issues, setIssues] = useState([]);
  // Similar to componentDidMount
  useEffect(() => {
    fetchIssues().then(data => {
      setIssues(data);
    });
  }, []);

  function onIssueSelect(issue) {
    history.push(`/issue/${issue.id}`);
  }

  return (
    <div>
      <SearchableSelect options={issues} onSelect={onIssueSelect} />
    </div>
  );
}

export default Home;
