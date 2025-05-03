import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

export default function UserDetails() {
	const { id } = useParams();
	const { name, age } = useOutletContext();

	return (
		<div>
			<h3>
				Details for user {name} who is {age} years old
			</h3>
			{/* 
      //! {" "} is a way to insert a space between elements or text in JSX where the JSX parser requires JavaScript expressions. It's necessary because JSX needs to interpret everything inside {} as JavaScript.
      */}
			<p>
				This section contains additional information about the selected <b>user {id}</b>
			</p>
		</div>
	);
}
