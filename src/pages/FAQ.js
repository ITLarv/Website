import React, { useState, useEffect } from "react";

export default function FAQ(props) {
	const [filteredQuestions, setFilteredQuestions] = useState(props.questions);

	// UseEffect to prevent React from caching questions between students and companies
	useEffect(() => {
		setFilteredQuestions(props.questions);
	}, [props]);

	const textFieldChanged = (e) => {
		const searchString = e.target.value;
		if (searchString === "") {
			setFilteredQuestions(props.questions);
			return;
		}

		const filtered = props.questions.filter((q) => {
			return (
				q.question.toLowerCase().includes(searchString.toLowerCase()) ||
				q.answer.toLowerCase().includes(searchString.toLowerCase())
			);
		});

		setFilteredQuestions(filtered);
	};

	return (
		<div className="faq">
			<div>
				<input type="textfield" onChange={textFieldChanged} />
			</div>
			{filteredQuestions.map((q) => (
				<details key={q.question}>
					<summary>{q.question}</summary>
					<p>{q.answer}</p>
				</details>
			))}
		</div>
	);
}
