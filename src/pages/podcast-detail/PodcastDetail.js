import React from 'react'
import './PodcastDetail.css'
export default function PodcastDetail() {
  return (
    <>
    <div className='pocast-detail'>
        <section className='podcast-detail__top center'>
           
            <div className='podcast-detail__left'>
                <img className='podcast-detail__image' />
                <div className='podcast-detail__content'>
                    <h4 className='podcast-detail__title'>StarTalk Radio</h4>
                    <p className='podcast-detail__caption'>Neil deGrasse Tyson</p>
                    <div className='podcast-detail__links'>
                        <a className='podcast-detail__link'>EPISODES</a>
                        <a className='podcast-detail__link'>ABOUT</a>
                    </div>
                </div>
            </div>
            <div className='podcast-detail__right center'>
                <div className='podcast-detail__play'>Play</div>
                <div className='podcast-detail__like'>
                     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g transform="translate(-373 -579)">
        <path
          fill="#2dceef"
          d="M2.438 2.377a6.382 6.382 0 000 9.062L11.55 20.5l9.113-9.062a6.382 6.382 0 000-9.062 6.469 6.469 0 00-9.113 0 6.469 6.469 0 00-9.112.001z"
          transform="translate(381.449 589.1)"
        ></path>
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
          data-name="Rectangle 2822"
          transform="translate(373 579)"
        >
          <rect width="40" height="40" stroke="none" rx="20"></rect>
          <rect width="38.5" height="38.5" x="0.75" y="0.75" rx="19.25"></rect>
        </g>
      </g>
                     </svg>
                </div>
                <div className='podcast-detail__information'>
                     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g transform="translate(-433 -579)">
        <g fill="#fff" data-name="More" transform="rotate(90 605.5 149.5)">
          <circle
            cx="2"
            cy="2"
            r="2"
            data-name="Ellipse 23"
            transform="translate(1053 292)"
          ></circle>
          <circle
            cx="2"
            cy="2"
            r="2"
            data-name="Ellipse 24"
            transform="translate(1053 300)"
          ></circle>
          <circle
            cx="2"
            cy="2"
            r="2"
            data-name="Ellipse 25"
            transform="translate(1053 308)"
          ></circle>
        </g>
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
          data-name="Rectangle 3256"
          transform="translate(433 579)"
        >
          <rect width="40" height="40" stroke="none" rx="20"></rect>
          <rect width="38.5" height="38.5" x="0.75" y="0.75" rx="19.25"></rect>
        </g>
      </g>
                     </svg>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
