import React, { useEffect, useState } from "react";

import { data } from '../../Requests/Requests.js'
import RowListMovie from "./components/RowListMovie.js";

const HomePage = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const loadAll = async () => {
            let list = await data.getHomeList()
            setMovieList(list)
        }

        loadAll()
    }, [])

    return (
        <div>
           <section>
               {movieList.map((item, key) => {
                   return (
                       <RowListMovie />
                   )
               })}
           </section>
        </div>
    )
}

export default HomePage