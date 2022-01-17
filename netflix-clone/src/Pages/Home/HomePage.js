import React, { useEffect, useState } from "react";
import './HomePage.css'

import { data } from '../../Requests/Requests.js'
import RowListMovie from "./components/RowListMovie.js";
import FeaturedMovie from "./components/FeaturedMovie";

const HomePage = () => {

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)

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

    
    return (
        <div>
            {featuredData && 
                <FeaturedMovie item={featuredData} />
            }

           <section>
               {movieList.map((item, key) => {
                   return (
                       <RowListMovie key={key} title={item.title} items={item.items.results} />
                   )
               })}
           </section>
        </div>
    )
}

export default HomePage