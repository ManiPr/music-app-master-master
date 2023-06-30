import React from 'react'
import './Home.css'
import prev from '../../assets/images/SVG File/prev.svg'
import next from '../../assets/images/SVG File/next.svg'
import Music from '../../components/music/Music'
import Category from '../../components/category/Category'
import PodcastCategory from '../../components/podcast-category/PodcastCategory'
import Artist from '../../components/artist/Artist'
import NewReleases from '../browser/new-releases/NewReleases'
import Slider from '../../components/slider/Slider'
import {useState} from 'react'
export default function Home() {
  
  // const [slideIndex, setSlideIndex] = useState(0);
  // const [sliderValue, setSliderValue] = useState([<Music />]);
  // const goToNextSlide = () => {
  //   if (slideIndex === sliderValue.length - 1) {
  //     setSlideIndex(0);
  //   } else {
  //     setSlideIndex(slideIndex + 1);
  //   }
  // };

  // const goToPreviousSlide = () => {
  //   if (slideIndex === 0) {
  //     setSlideIndex(sliderValue.length - 1);
  //   } else {
  //     setSlideIndex(slideIndex - 1);
  //   }
  };
  return (
    <>
      <section className='recently-played sectoin-margin-top '>
        <div className='container'>
          <div className='recently-played__wrapper sectoin-wrapper'>
            <div className='recently-played__top sectoin-top center'>
            <p className='recetly-played__title section-title'>Recently played</p>
            <div className='recently-played__buttons section-buttons'>
            <img className='recently-played__button' src={prev} onClick={goToPreviousSlide}/>
            <img className='recently-played__button' src={next}  onClick={goToNextSlide}/>
            </div>
            </div>
            <div className='recently-played__musics section-box center'>
            <Slider slides={sliderValue} ></Slider>
            </div>
            
          </div>
          </div>
        </section>
      <section className='categories-section sectoin-margin-top'>
        <div className='container'>
          <div className='category-wrapper sectoin-wrapper'>
            <div className='categories section-box center'>
             <Category></Category>
            </div>
      
          </div>
          </div>
      </section>
      <section className='days sectoin-margin-top'>
      <div className='container'>
          <div className='days__wrapper sectoin-wrapper'>
            <div className='days__top sectoin-top center'>
            <p className='days__title section-title'>For Sunday</p>
            <p className='days__view'>View All</p>
            </div>
            <div className='days__musics section-box center'>
            <Music></Music>
            </div>
            
          </div>
          </div>
      </section>
      <section className='category-podcast sectoin-margin-top'>
        <div className='container'>
          <div className='category-podcast__wrapper sectoin-wrapper'>
          <div className='category-podcast__top sectoin-top center'>
            <p className='category-podcast__title section-title'>PodCast</p>
            <p className='category-podcast__view'>View All</p>
            </div>
            <div className='category-podcast__musics section-box center'>
            <PodcastCategory></PodcastCategory>
            </div>
          </div>
         
        </div>
      </section>
      <section className='playlist sectoin-margin-top'>
        <div className='container'>
          <div className='playlist__wrapper sectoin-wrapper'>
          <div className='playlist__top sectoin-top center'>
            <p className='playlist__title section-title'>Playlist picks</p>
            <div className='playlist__buttons section-buttons center'>
            <img className='playlist__button' src={prev}/>
            <img className='playlist__button' src={next}/>
            </div>
            </div>
            <div className='playlist__musics section-box center'>
            <Music></Music>
            </div>
          </div>
        </div>
      </section>
      <section className='new-releases sectoin-margin-top'>
      <div className='container'>
          <div className='new-releases__wrapper sectoin-wrapper'>
            <div className='new-releases__top sectoin-top center'>
            <p className='new-releases__title section-title'>New releases for you</p>
            <p className='new-releases__view'>View All</p>
            </div>
            <div className='new-releases__musics section-box center'>
            <Music></Music>
            </div>
            
          </div>
          </div>
      </section>
      <section className='artists sectoin-margin-top'>
        <div className='container'>
          <div className='artist__wrapper sectoin-wrapper'>
          <div className='artist__top sectoin-top center'>
            <p className='artist__title section-title'>You might like these artists</p>
            <div className='artist__buttons section-buttons center'>
            <img className='artist__button' src={prev}/>
            <img className='artist__button' src={next}/>
            </div>
            </div>
            <div className='artist__musics section-box center'>
            <Artist></Artist>
            </div>
          </div>
        </div>
      </section>
      <NewReleases></NewReleases>
    </>
  )
}
