import Home from './pages/home/Home' 
import GenresMoods from './pages/browser/genres-moods/GenresMoods'
import NewReleases from './pages/browser/new-releases/NewReleases'
import Podcast from './pages/browser/podcasts/Podcast'

let routes = [
    {path: '/', element: <Home />},
    {path: '/browse', element: <GenresMoods />},
    {path: '/NewReleases', element: <NewReleases />},
    {path: '/Podcasts', element: <Podcast />},
]

export default routes