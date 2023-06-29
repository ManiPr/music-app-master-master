import React from 'react'
import './NewReleases.css'
import Music from '../../../components/music/Music'
import prev from '../../../assets/images/SVG File/prev.svg'
import next from '../../../assets/images/SVG File/next.svg'
export default function NewReleases() {
  return (
    <>
    <section className='new-releases sectoin-margin-top '>
        <div className='container'>
          <div className='new-releases__wrapper sectoin-wrapper'>
            <div className='new-releases__top sectoin-top center'>
            <p className='new-releases__title section-title'>This month's top releases</p>
            <div className='new-releases__buttons section-buttons'>
            <img className='new-releases__button' src={prev}/>
            <img className='new-releases__button' src={next}/>
            </div>
            </div>
            <div className='new-releases__musics section-box center'>
            <Music></Music>
            
            </div>
            
          </div>
          </div>
        </section>
        <section className='rock-newreleases sectoin-margin-top'>
        <div className='container'>
            <div className='rock-newreleases__wrapper sectoin-wrapper'>
              <div className='rock-newreleases__top sectoin-top center'>
              <p className='rock-newreleases__title section-title'>Rock new releases</p>
              <p className='rock-newreleases__view'>View All</p>
              </div>
              <div className='rock-newreleases__musics section-box center'>
              <Music></Music>
              
              </div>
              
            </div>
            </div>
        </section>
        </>
  )
}
