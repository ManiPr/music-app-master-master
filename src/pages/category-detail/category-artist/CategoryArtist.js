import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MusicData } from '../../../datas';
import Music from '../../../components/music/Music'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Artist from '../../../components/artist/Artist'

export default function CategoryArtist() {
    const [musicList, setMusicList] = useState(MusicData);
    return (
    <>
          <section className='artists sectoin-margin-top'>
        <div className='container'>
          <div className='artist__wrapper sectoin-wrapper'>
          <div className='artist__top sectoin-top center'>
            <p className='artist__title section-title'>Rock Artists</p>
            <p className='artist__caption'>View All</p>
            </div>
            <div className='artist__musics section-box '>
            <Artist></Artist>
            <Artist></Artist>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
