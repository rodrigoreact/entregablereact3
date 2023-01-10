import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({url}) => {

   const [resident, setResident] = useState({})

   useEffect(()=>{
      axios.get(url)
      .then(response => setResident(response.data))

   }, []);

   //console.log(resident);

  const bgStatus = () => {
    if (resident.status=== "Alive"){
        return "lawngreen"
    } else if (resident.status === "Dead"){
        return "red"
    } else {
        return "gray"
    }
}

bgStatus();
 
    return (
        <div className="resident__card">
            <img src={resident.image} alt="" />
            <div className='info__resident'>
                <h3>{resident.name}</h3>
                <hr />
                <p><b>Especie:</b>{resident.species}</p>
                <p><b>Origen</b>{resident.origin?.name}</p>
                <p><b>N° de Episodios:</b>{resident.episode?.length}</p>
            </div>   
            <div className='info__status'>
            <div className='status' style={{backgroundColor:bgStatus()}}></div>
                    <p>{resident.status}</p>                
            </div>
         
        </div>
    );
};

export default Residents;
