import React, {useState} from "react";
import './RowListMovie.css'

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const RowListMovie = ({title, items}) => {

    const [scrollList, setScrollList] = useState(0)

    const handleBefore = () => {
        let x = scrollList + Math.floor(window.screen.width/2)
        if(x > 0) {
            x=0
        }
        setScrollList(x)
    }

    const handleNext = () => {
        let x = scrollList - Math.floor(window.screen.width/2)
        let w = items.length*150
        if ((window.screen.width - w) > x ) {
            x = (window.screen.width - w) - 60
        }


        setScrollList(x)
    }

    return (
        <div className= 'movieRow'>
            <h2> {title} </h2>

            <div className="movieRow--buttonBefore" onClick={handleBefore} >
                <NavigateBeforeIcon style={{fontSize:'50'}} />
            </div>
            <div className="movieRow--buttonNext" onClick={handleNext} >
                <NavigateNextIcon style={{fontSize:'50'}} />
            </div>
            

            <div className= 'movieRow--ListArea'>                
                <div className= 'movieRow--list' style={{
                    marginLeft: scrollList,
                    width: items.length*150
                    }}>
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