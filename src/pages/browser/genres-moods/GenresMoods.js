import React from 'react';
import Category from '../../../components/category/Category';
import './GenresMoods.css'
import Mood from '../../../components/mood/Mood'
const GenresMoods = () => {
    return (
        <>
        <section className='genreses sectoin-margin-top'>
        <div className='container'>
          <div className='genreses__wrapper '>
          <div className='genreses__top sectoin-top center'>
            <p className='genreses__title section-title'>Genres</p>
            </div> 
            <div className='genreses__genres section-box center '>
                <Category></Category>
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
    );
}

export default GenresMoods;
