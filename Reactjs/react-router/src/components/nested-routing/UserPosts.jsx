import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

export default function UserPosts() {
	const { id } = useParams();
	const { name, age } = useOutletContext();

	return (
		<div>
			<h3>
				Posts by the user {name} who is {age} years old
			</h3>
			<p>
				This section contains posts details made by the <b>user {id}</b>
			</p>
		</div>
	);
}
