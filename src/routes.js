import Home from './pages/home/Home' 
import GenresMoods from './pages/browser/genres-moods/GenresMoods'
import NewReleases from './pages/browser/new-releases/NewReleases'
import Podcast from './pages/browser/podcasts/Podcast'
import CategoryDetail from './pages/category-detail/CategoryDetail'
import NewReleasesArtist from './pages/category-detail/new-releases-artist/NewReleasesArtist'
let routes = [
    {path: '/', element: <Home />},
    {path: '/browse', element: <GenresMoods />},
    {path: '/NewReleases', element: <NewReleases />},
    {path: '/Podcasts', element: <Podcast />},
    {path: '/category', element: <CategoryDetail />},
    {path: '/newreleasesartist', element: <NewReleasesArtist />},
]

export default routes
