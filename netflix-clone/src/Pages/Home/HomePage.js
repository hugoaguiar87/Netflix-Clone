import React, { useEffect, useState } from "react";
import './HomePage.css'

import { data } from '../../Requests/Requests.js'
import RowListMovie from "./components/RowListMovie.js";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Loading from './components/Loading.js';

const HomePage = () => {

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)
    const [headerBackground, setHeaderBackground] = useState(false)

    useEffect(() => {
        const loadAll = async () => {
            let list = await data.getHomeList()
            setMovieList(list)

            let movieListFeatured = list.filter((i) => { return i.slug === 'originals'})
            let selectRandomMovie = Math.floor( Math.random()*(movieListFeatured[0].items.results.length - 1) )
            let movieSelected = movieListFeatured[0].items.results[selectRandomMovie]
            let getInfosMovieSelected = await data.getMovieInfos(movieSelected.id, 'tv')

            setFeaturedData(getInfosMovieSelected)
        }

        loadAll()
    }, [])

    useEffect(() => {
        const changeBackgroundHeader = () => {
            if(window.scrollY > 50) {
                setHeaderBackground(true)
            } else {
                setHeaderBackground(false)
            }
        }

        window.addEventListener('scroll', changeBackgroundHeader)
    }, [])

    return (
        <div>
            <Header headerBackground = {headerBackground} />

            {featuredData && 
                <FeaturedMovie item={featuredData} />
            }

           <section className="lists" >
               {movieList.map((item, key) => {
                   return (
                       <RowListMovie key={key} title={item.title} items={item.items.results} />
                   )
               })}
           </section>

           <footer>
               <p>
                   Criado com muito ❤️ por <a href="https://www.linkedin.com/in/hugoaguiar87/" target='_blank' >Hugo Aguiar</a>
               </p>
               <p>
                    Todos direitos de imagem reservados para Netflix
               </p>
               <p>
                    Todos os dados dos filmes foram pegos em <a href="https://developers.themoviedb.org/3/getting-started/introduction" target='_blank' >themoviedb.org</a>
               </p>
           </footer>

            {movieList.length <=0 && <Loading />}
           
        </div>

    )
}

export default HomePage