import Home from './pages/home/Home' 
import GenresMoods from './pages/browser/genres-moods/GenresMoods'
import NewReleases from './pages/browser/new-releases/NewReleases'

let routes = [
    {path: '/', element: <Home />},
    {path: '/browse', element: <GenresMoods />},
    {path: '/NewReleases', element: <NewReleases />},
]

export default routes