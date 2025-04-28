import React from "react";

export default function UserPosts({ id }) {
  return (
    <div>
      <h3>Posts by the user {id} </h3>
      <p>
        This section contains posts details made by the <b>user {id}</b>
      </p>
    </div>
  );
}
