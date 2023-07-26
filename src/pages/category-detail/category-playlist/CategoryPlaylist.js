import React,{useState} from 'react'
import Music from '../../../components/music/Music'
import 'swiper/css';
import 'swiper/css/navigation';
import { MusicData } from '../../../datas';
import './CategoryPlaylist.css';
export default function CategoryPlaylist() {
    const [musicList, setMusicList] = useState(MusicData);

  return (
    <>
        <div className='category-playlist'>
        <section className='category-palylist sectoin-margin-top'>
        <div className='container'>
          <div className='category-palylist__wrapper sectoin-wrapper'>
          <div className='category-palylist__top sectoin-top center'>
            <p className='category-palylist__title section-title'>Popular Playlist</p>
            <p className='category-palylist__caption'>View All</p>
            </div>
        
            <div className='category-playlist__musics'>
            {musicList.map((music) => {
            return <Music className='mani center' key={music.key} props={music} />;
          })}
</div>
         
   

          </div>
        </div>
      </section>
        </div>
    </>
  )
}
