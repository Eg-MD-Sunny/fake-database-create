import React, { useEffect, useState } from 'react';

const Data = () => {
    const [fakedb, setFakedb] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setFakedb(data))
    },[])

    return (
        <div>
            {
                fakedb.map(db=><li key={db._id}>{db._id}</li>)
            }
        </div>
    );
};

export default Data;