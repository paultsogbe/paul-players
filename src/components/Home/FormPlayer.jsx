import React, {useState} from "react";
import { usePlayers } from "../../contexts/PlayersContext";

const FormPlayer = () => {
	const [inputName, setInputName] = useState("");
	const [inputScore, setInputScore] = useState("");

	const {addPlayer} = usePlayers()

	const handleSubmit = (e) => {
		e.preventDefault();
		addPlayer({
			name : inputName,
			score : +inputScore
		})
		console.log(inputName, inputScore)
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(e) => setInputName(e.target.value)}
				value={inputName}
				placeholder="Nom"
			/>
			<input
				type="number"
				onChange={(e) => setInputScore(e.target.value)}
				value={inputScore}
				placeholder="Score"
			/>
			<button type="submit">Ajouter un joueur</button>
		</form>
	);
};

export default FormPlayer;
