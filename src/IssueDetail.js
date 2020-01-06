import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GoBack from "./GoBack";
import { fetchIssueDetails } from "./repo";

function IssueDetail() {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchIssueDetails(id).then(data => {
        setIssue(data);
        setLoading(false);
      });
    } else {
      setIssue({});
    }
  }, [id]);

  if (loading) {
    return (
      <div>
        <GoBack />
        <div style={{ padding: "10px 0" }}> Fetching... </div>
      </div>
    );
  }

  if (!issue && !loading) {
    return (
      <div>
        <GoBack />
        <div> No Issue Description Found... </div>
      </div>
    );
  }

  return (
    <div>
      <GoBack />
      <div className="issue-detail">
        <h4> Issue Details </h4>
        <table className="table">
          <tbody>
            <tr>
              <td>ID: </td>
              <td>{issue.id}</td>
            </tr>
            <tr>
              <td>Description: </td>
              <td>{issue.label}</td>
            </tr>
            <tr>
              <td>Error: </td>
              <td>
                <code>{issue.details}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IssueDetail;
