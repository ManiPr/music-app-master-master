import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MusicData } from '../../../datas';
import Music from '../../../components/music/Music'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Artist from '../../../components/artist/Artist'

const NewReleasesArtist = (props) => {
    const [musicList, setMusicList] = useState(MusicData);

    return (
        <>
            <div className='new-releases-artist'>
            <section className='recently-played sectoin-margin-top '>
        <div className='container'>
          <div className='recently-played__wrapper sectoin-wrapper'>
            <div className='recently-played__top sectoin-top center'>
            <p className='recetly-played__title section-title'>Rock NewReleases</p>
            <p>View All</p>
            </div>
            <div className='section-box '>
              <div>
              <Swiper  navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
              {musicList.map((music) => (
            <SwiperSlide key={music.Id}>
            <Music props={music} />
            </SwiperSlide>
            ))}
            </Swiper> 
              </div>
              </div>
            
          </div>
          </div>
        </section>
        <section className='artists sectoin-margin-top'>
        <div className='container'>
          <div className='artist__wrapper sectoin-wrapper'>
          <div className='artist__top sectoin-top center'>
            <p className='artist__title section-title'>Rock Artists</p>
            <p className='artist__caption'>View All</p>
            </div>
            <div className='artist__musics section-box '>
            <Artist></Artist>
            </div>
          </div>
        </div>
      </section>
            </div>
        </>
    );
}

export default NewReleasesArtist;
