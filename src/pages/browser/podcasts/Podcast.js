import React from 'react'
import  './Podcast.css'
import Music from '../../../components/music/Music'
import PodcastEpisode from '../../../components/podcast-episode/PodcastEpisode'
import Mood from '../../../components/mood/Mood'
export default function Podcast() {
  return (
    <>
          <section className='week sectoin-margin-top '>
        <div className='container'>
          <div className='week__wrapper sectoin-wrapper'>
            <div className='week__top sectoin-top center'>
            <p className='week__title section-title'>Recently played</p>
            </div>
            <div className='section-box '>
              <Music></Music>
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
    </>
  )
}
// سعیدی راد رو ببین و یه کامپوننت به نام صداها درست بکن بعد بهشون نوع بده که پادکست هستند یا آهنگ کل کار فردات اینه و پیاده سازی این صفحه بدون اهمال کاری اولین کار همین ولی به مدت 60 دقیقه بعدش برو سراغ ویدیو دیدن این رو تست کن ببین کدوم بهتره
