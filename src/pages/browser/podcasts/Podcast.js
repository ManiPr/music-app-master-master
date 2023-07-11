import React from 'react'
import PodcastEpisode from '../../../components/podcast-episode/PodcastEpisode'
import Mood from '../../../components/mood/Mood'
import './Podcast.css'
import PodcastComponent from '../../../components/podcast-component/PodcastComponent'
import PodcastDetail from '../../podcast-detail/PodcastDetail'
export default function Podcast() {
  return (
    <>
          <section className='week sectoin-margin-top '>
        <div className='container'>
          <div className='week__wrapper sectoin-wrapper'>
            <div className='week__top sectoin-top center'>
            <p className='week__title section-title'>popular in week</p>
            </div>
            <div className='week__podcast section-box center'>
              <PodcastComponent></PodcastComponent>
              <PodcastComponent></PodcastComponent>
              <PodcastComponent></PodcastComponent>
              <PodcastComponent></PodcastComponent>
              <PodcastComponent></PodcastComponent>
              <PodcastComponent></PodcastComponent>
              <PodcastComponent></PodcastComponent>
              <PodcastComponent></PodcastComponent>
               <PodcastComponent></PodcastComponent>
                <PodcastComponent></PodcastComponent>
                <PodcastComponent></PodcastComponent>
                <PodcastComponent></PodcastComponent>
              </div>
          </div>
          </div>
        </section>
        <section className='featured-episodes sectoin-margin-top'>
      <div className='container'>
          <div className='featured-episodes__wrapper sectoin-wrapper'>
            <div className='featured-episodes__top sectoin-top center'>
            <p className='featured-episodes__title section-title'>For Sunday</p>
            <p className='featured-episodes__view'>View All</p>
            </div>
            <div className='featured-episodes__podcasts center section-box '>
            <PodcastEpisode></PodcastEpisode>
            <PodcastEpisode></PodcastEpisode>
            <PodcastEpisode></PodcastEpisode>
            <PodcastEpisode></PodcastEpisode>
            <PodcastEpisode></PodcastEpisode>
            <PodcastEpisode></PodcastEpisode>
            </div>
            
          </div>
          </div>
      </section>
      <section className='moodes sectoin-margin-top'>
        <div className='container'>
          <div className='moodes__wrapper '>
          <div className='moodes__top sectoin-top center'>
            <p className='moodes__title section-title'>Moods</p>
            </div>
            <div className='moodes__genres section-box center'>
                <Mood></Mood>
            </div>
          </div>
        </div>
      </section>
    <PodcastDetail></PodcastDetail>
    </>
  )
  
}
{
  // const [musicList, setmusicList] = useState(MusicData);
  /* <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={4}>
{musicList.map((music) => (
  <SwiperSlide key={music.Id}>
    <Music props={music} />
  </SwiperSlide>
))}
</Swiper> */}