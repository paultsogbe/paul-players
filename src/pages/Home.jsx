import React from 'react'
import FormPlayer from '../components/Home/FormPlayer'
import PlayersProvider from '../contexts/PlayersContext'
import ListPlayer from '../components/Home/ListPlayer'

const Home = () => {
  return (
    <PlayersProvider>
        <FormPlayer />

        <ListPlayer sortBy="date" />
        <ListPlayer sortBy="name" />
        <ListPlayer sortBy="score" />
    </PlayersProvider>
  )
}

export default Home