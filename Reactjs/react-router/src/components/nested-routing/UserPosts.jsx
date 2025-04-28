import React from "react";
import { useParams } from "react-router-dom";

export default function UserPosts() {
  const { id } = useParams();
  return (
    <div>
      <h3>Posts by the user {id} </h3>
      <p>
        This section contains posts details made by the <b>user {id}</b>
      </p>
    </div>
  );
}
