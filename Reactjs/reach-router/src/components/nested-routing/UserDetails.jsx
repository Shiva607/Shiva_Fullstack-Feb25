import React from "react";

export default function UserDetails({ id }) {
  return (
    <div>
      <h3>Details for user {id} </h3>
      {/* 
      //! {" "} is a way to insert a space between elements or text in JSX where the JSX parser requires JavaScript expressions. It's necessary because JSX needs to interpret everything inside {} as JavaScript.
      */}
      <p>
        This section contains additional information about the selected{" "}
        <b>user {id}</b>
      </p>
    </div>
  );
}
