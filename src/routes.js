import Home from './pages/home/Home' 
import GenresMoods from './pages/browser/genres-moods/GenresMoods'
let routes = [
    {path: '/', element: <Home />},
    {path: '/browse', element: <GenresMoods />},
]

export default routes