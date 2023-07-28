import React from 'react'

const Player = ({player}) => {
  return (
    <div>
        {player.name} - {player.score}
    </div>
  )
}

export default Player