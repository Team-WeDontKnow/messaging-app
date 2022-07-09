import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/navbar/Navbar.jsx'
import Home from './Components/home/Home.jsx'
import SearchResults from './Components/search-results/SearchResults.jsx'
import Matches from './Components/matches/Matches.jsx'
import Inbox from './Components/inbox/Inbox.jsx'
import PendingConnections from './Components/pending-connections/PendingConnections.jsx'
import MyProfile from './Components/profile/MyProfile.jsx'

function App() {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className='App-container'>
            <Navbar />

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/search-results' element={<SearchResults />} />
                <Route path='/matches' element={<Matches />} />
                <Route path='/inbox' element={<Inbox />} />
                <Route path='/pending-connections' element={<PendingConnections />} />
                <Route path='/profile' element={<MyProfile darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />

            </Routes>
        </div>

    )
}

export default App