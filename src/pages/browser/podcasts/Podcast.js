import React from 'react'
import  './Podcast.css'
import Category from '../../../components/category/Category'
export default function Podcast() {
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
    </>
  )
}
// سعیدی راد رو ببین و یه کامپوننت به نام صداها درست بکن بعد بهشون نوع بده که پادکست هستند یا آهنگ کل کار فردات اینه و پیاده سازی این صفحه بدون اهمال کاری اولین کار همین ولی به مدت 60 دقیقه بعدش برو سراغ ویدیو دیدن این رو تست کن ببین کدوم بهتره