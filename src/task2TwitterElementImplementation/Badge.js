import React from "react";

function Badge({info}) {
  return <div>
    <p>Name: </p>
    <h4><b>{info.userName}</b></h4>
    <p>Last name: </p>
    <h4><b>{info.userLastName}</b></h4>
  </div>
}

export default Badge;