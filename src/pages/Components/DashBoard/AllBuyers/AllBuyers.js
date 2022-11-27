import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users?role=buyer')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBuyers(data)
            })
    }, [])
    return (
        <div>
            <p>{buyers.length}</p>
        </div>
    );
};

export default AllBuyers;