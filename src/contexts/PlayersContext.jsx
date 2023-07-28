import React, {useState, useContext} from 'react'

const PlayersContext = React.createContext()

const PlayersProvider = ({children}) => {
    const [players, setPlayers] = useState([])

    const addPlayer = (player) => {
        setPlayers([...players, player])
    }

    return (
        <PlayersContext.Provider
            value={{addPlayer, players}}
        >
            {children}
        </PlayersContext.Provider>
    )
}

export default PlayersProvider

export const usePlayers = () => useContext(PlayersContext)