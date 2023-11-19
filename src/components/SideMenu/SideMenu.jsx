
import { NavLink } from 'react-router-dom';
import s from './SideMenu.module.scss';
import home from '../../assets/icons/home.png';
import movies from '../../assets/icons/movies.png';
import geners from '../../assets/icons/geners.png';
import tvShows from '../../assets/icons/tvShows.png';
import search from '../../assets/icons/search.png';
import watchLater from '../../assets/icons/watchLater.png';
import cover from '../../assets/cover.jpg'
import { useEffect,  useState } from 'react';
import { useInput } from '../../hooks/useInput';

export const SideMenu = ({ sideBarRef, isSideBarHover }) => {
    const [isSearch, setIsSearch] = useState(false);
    useEffect(() => setIsSearch(false), [isSideBarHover]);
    const searchInput = useInput('');

    return (
        <div className={s.sideBar} ref={sideBarRef}>
            <div className={isSideBarHover ? s.profile : `${s.profile} ${s.hidden}`}>
                <img src={cover} alt="cover" />
                <p>Valer</p>
            </div>
            <div className={isSideBarHover ? `${s.sideMenu} ${s.sideMenuHover}` : s.sideMenu} >
                <div className={s.link}>
                    <div className={s.linkContent} onClick={() => setIsSearch(true)}>
                        <img src={search} alt="search" />
                        {isSearch ? <input className={s.serchInput} placeholder='Search' {...searchInput}/> : <span>Search</span>}
                    </div>
                </div>
                <NavLink to="/home" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
                    <div className={s.linkContent}>
                        <img src={home} alt="home" />
                        <span>Home</span>
                    </div>
                </NavLink>
                <NavLink to="/tvShows" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
                    <div className={s.linkContent}>
                        <img src={tvShows} alt="tvShows" />
                        <span>TV Shows</span>
                    </div>
                </NavLink>
                <NavLink to="/movies" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
                    <div className={s.linkContent}>
                        <img src={movies} alt="movies" />
                        <span>Movies</span>
                    </div>
                </NavLink>
                <NavLink to="/geners" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
                    <div className={s.linkContent}>
                        <img src={geners} alt="geners" />
                        <span>Geners</span>
                    </div>
                </NavLink>
                <NavLink to="/watchLater" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
                    <div className={s.linkContent}>
                        <img src={watchLater} alt="watchLater" />
                        <span>Watch Later</span>
                    </div>
                </NavLink>
            </div>
            {isSideBarHover && <div className={s.sideBarFooter} >
                <p className={s.sideBarFooterItem}>LANGUAGE</p>
                <p className={s.sideBarFooterItem}>GET HELP</p>
                <p className={s.sideBarFooterItem}>EXIT</p>
            </div>}
        </div>
    )
}