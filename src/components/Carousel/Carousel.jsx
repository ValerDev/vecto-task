import React, { useState } from 'react';
import './Carousel.scss';
import { Slider } from 'infinite-react-carousel';
import { Loader } from '../Loader/Loader';

export const CustomCarousel = ({ data, setData, setSelectedMovie, setLoading }) => {
    const [update, setUpdate] = useState(1);

    const handleSelectMovie = (movie, index) => {
        setLoading(true)
        setTimeout(() => {
            setSelectedMovie(movie)
            setLoading(false)
        }, 2000);
        setUpdate(oldData => oldData + 1)
        const newData = [...data.TendingNow];
        newData.splice(index, 1);
        setData({ ...data, TendingNow: [movie, ...newData] })
        sessionStorage.setItem('data', JSON.stringify({ ...data, TendingNow: [movie, ...newData] }))
    }

    const settings = {
        arrows: false,
        arrowsBlock: false,
        slidesToShow: 8,
        wheel: true,
        wheelScroll: 2
    };

    return data.TendingNow.length ? (
        <div className='carousel' >
            <span>Trending Now</span>
            <Slider {...settings} key={update}>
                {data.TendingNow.map((movie, index) => <div className='carouselItem' key={movie.Id} onClick={() => handleSelectMovie(movie, index)}>
                    <img src={require(`../../assets/${movie.CoverImage}`)} alt={movie.TitleImage} />
                </div>)}
            </Slider>
        </div>
    ) : <Loader />
}