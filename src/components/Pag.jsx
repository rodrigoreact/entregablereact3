import React from 'react';

const Pag = ({page, setPage, quantyPage}) => {
    return (
        <div className='getPages'>
            <div className="btn__pages"> { page > 1 && 
                 <button className="boton" onClick={() => setPage(page -1)}>Anterior</button>}
            </div>
            <p>{page} de {quantyPage}</p>
            <div className="btn__pages">
            { quantyPage > page && 
                <button className="boton" onClick={() => setPage(page +1)}>Próximo</button>}
            </div>
        </div>
    );
};

export default Pag;