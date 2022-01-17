import React from 'react';
import './FeaturedMovie.css'

const FeaturedMovie = ({item}) => {

    let year = new date(item.first_air_date)

    return(
        <section 
            className= 'featured' 
            style= { {backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`} } 
        >
            <div className= 'featured--vertical' >
                <div className= 'featured--horizontal' >
                    <div className= 'featured--name' > {item.name} </div>
                    <div className= 'featured--infos' >
                        <div className='featured--average' > {item.vote_average} pontos </div>
                        <div className='featured--year' >  </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;