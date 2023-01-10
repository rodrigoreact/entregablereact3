import React from 'react';

const Location = ({rick}) => {
    return (
            <>
            <div className="componente__localizacion">           
                <div className='titulo' style={{textAlign: 'center'}}><h1>{rick.name}</h1></div>        
            </div> 
      
            <div className="componente__localizacion2">
           
                <p><b>id:</b>{rick.id}</p>
                <p><b>Tipo:</b>{rick.type}</p>
                <p><b>Dimension:</b>{rick.dimension}</p>
                <p><b>Residentes:</b>{rick.residents?.length}</p>
            </div>
            </>       
    );
};

export default Location;