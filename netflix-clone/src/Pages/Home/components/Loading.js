import React from 'react';
import './Loading.css'

import loading from '../../../img/loading.gif'

const Loading = () => {
    return (
        <div className='loading' >
            <img src={loading} alt='Carregando...' />
        </div>
    )
}

export default Loading;