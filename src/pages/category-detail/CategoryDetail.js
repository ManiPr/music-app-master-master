import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MusicData } from '../../datas';
import Music from '../../components/music/Music'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Artist from '../../components/artist/Artist'

export default function CategoryDetail() {
  const [musicList, setMusicList] = useState(MusicData);
console.log(musicList);
  return (
    <>
      <div className='category-detail'>
      <section className='recently-played sectoin-margin-top '>
        <div className='container'>
          <div className='recently-played__wrapper sectoin-wrapper'>
            <div className='recently-played__top sectoin-top center'>
            <p className='recetly-played__title section-title'>Popular in these week</p>
            </div>
            <div className='section-box '>
              <div>
              <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={5}>
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
        <section className='recently-played sectoin-margin-top '>
        <div className='container'>
          <div className='recently-played__wrapper sectoin-wrapper'>
            <div className='recently-played__top sectoin-top center'>
            <p className='recetly-played__title section-title'>PlayLists</p>
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
        <section className='recently-played sectoin-margin-top '>
        <div className='container'>
          <div className='recently-played__wrapper sectoin-wrapper'>
            <div className='recently-played__top sectoin-top center'>
            <p className='recetly-played__title section-title'>NewReleases</p>
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
            <p className='artist__title section-title'>Artists</p>
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
  )
}

