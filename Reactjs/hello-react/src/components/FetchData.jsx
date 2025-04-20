import React, { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((jsonRes) => setData(jsonRes))
      .catch((err) => console.log("Error => " + err));
  }, []);

  //! Second parameter for fetch function
  // 👉 Not passing second parameter => without [] => sideEffects will call (during initial component loading (rendering)), Interacting with component again re-rendering (Eg: Click action)
  // 👉 [] => sideEffects will call once (during initial component loading (rendering))
  // 👉 [data] => sideEffects will call (during initial component loading (rendering)), re-rendering based on changes in passed data in the array

  return (
    <div>
      {
        // 👉 data.results?.map means: At runtime, if data.results has a valid value (like an array), it will run .map() and print the values.
        // 👉 If data.results is undefined, it will do nothing and avoid crashing the app.
      }
      {data.results?.map((user) => {
        const { title, first, last } = user.name;
        return (
          <div key={user.login.uuid}>
            <h1>Lab 4 - Fetch user data from Random API</h1>
            <p>
              <b>Name:</b> {`${title} ${first} ${last}`}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
          </div>
        );
      })}
    </div>
  );
}
