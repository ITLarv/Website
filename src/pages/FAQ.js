import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ(props) {
	const [filteredQuestions, setFilteredQuestions] = useState(props.questions);
	const { i18n } = useTranslation();
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
				q.en.question.toLowerCase().includes(searchString.toLowerCase()) ||
				q.en.answer.toLowerCase().includes(searchString.toLowerCase()) ||
				q.sv.answer.toLowerCase().includes(searchString.toLowerCase()) ||
				q.sv.answer.toLowerCase().includes(searchString.toLowerCase())
			);
		});

		setFilteredQuestions(filtered);
	};

	const Question = (props) => {
		if (i18n.language === "en") {
			return (
				<details>
					<summary>{props.q.en.question}</summary>
					<p>{props.q.en.answer}</p>
				</details>
			);
		}
		if (i18n.language === "sv") {
			return (
				<details>
					<summary>{props.q.sv.question}</summary>
					<p>{props.q.sv.answer}</p>
				</details>
			);
		}
		return;
	};

	return (
		<div className="faq">
			<div>
				<input type="textfield" onChange={textFieldChanged} />
			</div>
			{filteredQuestions.map((q) => (
				<Question key={q.id} q={q} />
			))}
		</div>
	);
}
