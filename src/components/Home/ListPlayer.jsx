
import { usePlayers } from "../../contexts/PlayersContext";
import Player from "./Player";
import { useState, useEffect } from "react";

const ListPlayer = ({ sortBy }) => {
	const { players } = usePlayers();
    const [playersSorted, setPlayersSorted] = useState([])

    useEffect(() => {
        const playersUpdate = [...players]
        if (sortBy === "name") {
            playersUpdate.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        } else if (sortBy === "score") {
            playersUpdate.sort((a, b) => b.score-a.score);
        }
        setPlayersSorted(playersUpdate)

    }, [players])

	return (
		<div
			style={{
				border: "1px solid black",
				padding: "15px",
				margin: "15px",
			}}
		>
			{playersSorted.map((player, i) => (
				<Player key={i} player={player} />
			))}
		</div>
	);
};

export default ListPlayer;
