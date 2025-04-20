import React, { useEffect, useState } from "react";

export default function ConditionalFetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((jsonRes) => {
          setData(jsonRes);
          setLoading(false);
        })
        .catch((err) => console.log("Error " + err));
    }, 10000);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.results?.map((user) => {
          const { title, first, last } = user.name;
          return (
            <div key={user.login.uuid}>
              <h1>
                Lab 5 - Fetch user data from Random API using conditional
                rendering
              </h1>
              <p>
                <b>Name:</b> {`${title} ${first} ${last}`}
              </p>
              <p>
                <b>Email:</b> {user.email}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
