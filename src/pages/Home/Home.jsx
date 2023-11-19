import { useRef, useState, useMemo } from 'react';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import s from './Home.module.scss';
import { converDuration } from '../../helpers/convertDuration';
import { useHover } from '../../hooks/useHover';
import { CustomCarousel } from '../../components/Carousel/Carousel';
import storage from '../../data.json';
import { Loader } from '../../components/Loader/Loader';

export const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    useMemo(() => {
        const data = JSON.parse(sessionStorage.getItem('data'));

        if (!data) {
            sessionStorage.setItem('data', JSON.stringify(storage));
            setData(storage);
            return
        }

        setData(data);
    }, []);

    const sideBarRef = useRef(null);
    const isSideBarHover = useHover(sideBarRef);

    return data ? (
        <div className={s.home} >
            <div className={s.homeBackground}>
                {selectedMovie && <video autoPlay muted loop className={s.video}>
                    <source src={selectedMovie.VideoUrl} type="video/mp4"/>
                </video>}
                {loading && <Loader/>}
                <div className={isSideBarHover ? s.layout : `${s.layout} ${s.hidden}`}></div>
                <SideMenu sideBarRef={sideBarRef} isSideBarHover={isSideBarHover} />
                <div className={s.content}>
                    <p className={s.movie}>{selectedMovie ? selectedMovie.Category : data.Featured.Category.toUpperCase()}</p>
                    <img src={require(`../../assets/${selectedMovie ? selectedMovie.TitleImage : data.Featured.TitleImage}`)} alt="FeaturedTitleImage" />
                    <p className={s.description}> {selectedMovie ? selectedMovie.ReleaseYear : data.Featured.ReleaseYear} &nbsp; {selectedMovie ? selectedMovie.MpaRating : data.Featured.MpaRating}  &nbsp; {converDuration(selectedMovie ? selectedMovie.Duration : data.Featured.Duration)}</p>
                    <p className={s.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className={s.buttonsBlock}>
                        <button className={s.playButton}>▶ Play</button>
                        <button className={s.infoButton}>More Info</button>
                    </div>
                </div>
                <CustomCarousel data={data} setData={setData} setSelectedMovie={setSelectedMovie} setLoading={setLoading}/>
            </div>
        </div>
    ) : <Loader />
}