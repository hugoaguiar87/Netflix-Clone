import React from 'react';
import './FeaturedMovie.css'

const FeaturedMovie = ({item}) => {

    let releaseYear = new Date(item.first_air_date)
    let genres = []

    for(let i of item.genres) {
        genres.push(i.name)
    }

    console.log('filme',item)
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
                        <div className='featured--year' > {releaseYear.getFullYear()}  </div>
                        <div className='featured--seasons' >
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                        <div className='featured--description' > {item.overview} </div>
                        <div className='featured--buttons' >
                            <button> ► Assistir </button>
                            <button> + Minha Lista </button>
                        </div>
                        <div className='featured--genres' >
                            <strong>Gêneros:</strong> {genres.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;