import React, { useEffect, useState } from 'react';
import axios from "axios";
import Location from './Location';
import Residents from './Residents';
import Pag from './Pag';

const Randm_app = () => {
    const [rickLocation, setRickLocation] = useState({});
   
    useEffect(() => {
        let idLocation =Math.floor(Math.random()*126)
    axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then(res => setRickLocation(res.data))
    }, [])

    console.log(rickLocation);
    
    const [searchLoc, setSearchLoc] = useState("");

    const search = () => {

        axios.get(`https://rickandmortyapi.com/api/location/${searchLoc}`)
        .then(res => setRickLocation(res.data))
        setSearchLoc("")
    }

    const [page , setPage] = useState(1);
    const perPage = 4
    const firstIndex= (page-1)*perPage
    const quantyPage = Math.ceil(rickLocation.residents?.length / perPage)
    
    const nadie = rickLocation.residents?.slice(firstIndex,firstIndex+perPage)   
    
    return (

        <div className='principal'>
              <div className='entrada'>
                <input type="text" value={searchLoc} onChange={(e) => setSearchLoc(e.target.value)}/>
                <button className="boton__busqueda" onClick={search}>Buscar</button>
             </div>
          <Location rick={rickLocation} />

          <Pag page={page} setPage={setPage} quantyPage={quantyPage} />
          <div className='contenido__residentes'>
            {nadie?.map((rick) => (
            <Residents url={rick} key={rick}/>  

           ))       
           }
           </div>
        </div>
    );
};

export default Randm_app;