import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])

    return (
        <div>
            <h4>Course List</h4>
            <div>
                {
                    category.map(c => <p key={c.id}>

                        <Button variant="outline-success"><Link className='text-dark text-decoration-none' to={`/details/${c.id}`}>{c.name}</Link></Button>{' '}

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;