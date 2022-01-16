import React from "react";
import './RowListMovie.css'

const RowListMovie = ({title, items}) => {

    return (
        <div className= 'movieRow'>
            <h2> {title} </h2>
            <div className= 'movieRow--ListArea'>
                <div className= 'movieRow--list'>
                    {items.length > 0 && items.map((item, key) => {
                        return(
                            <div key={key} className= 'movieRow--item'>
                                <img src= {`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                            </div>
                            
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default RowListMovie