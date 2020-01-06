import React from "react";
import { useHistory } from "react-router-dom";

function GoBack() {
  const history = useHistory();

  function onClick() {
    history.goBack();
  }

  return (
    <div className="go-back">
      <button onClick={onClick}>← Back</button>
    </div>
  );
}

export default GoBack;
