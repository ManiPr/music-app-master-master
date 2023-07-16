import React from 'react';
import Artist from '../../components/artist/Artist'

const Category = () => {
    return (
        <>
          <section className='artists sectoin-margin-top'>
        <div className='container'>
          <div className='artist__wrapper sectoin-wrapper'>
          <div className='artist__top sectoin-top center'>
            <p className='artist__title section-title'>You might like these artists</p>
          
            </div>
            <div className='artist__musics section-box '>
            <Artist></Artist>
            </div>
          </div>
        </div>
          </section>
        </>
    );
}

export default Category;
