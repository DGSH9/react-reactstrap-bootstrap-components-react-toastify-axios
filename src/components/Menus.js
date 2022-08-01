import React from 'react'
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Menus = () => {
    return (
        <ListGroup>
            {/* for home */}

            <Link tag="a" to="/" className='list-group-item list-group-item-action'>Home</Link>
            {/* for AddCourses */}
            <Link tag="a" to="/add-course" className='list-group-item list-group-item-action'>Add Course</Link>
            {/* for AllCourses */}
            <Link tag="a" to="/view-courses" className='list-group-item list-group-item-action'>View Course</Link>
            {/* for about */}
            <Link tag="a" to="/about" className='list-group-item list-group-item-action'>About</Link>
            {/* for contact */}
            <Link tag="a" to="/contact" className='list-group-item list-group-item-action'>Contact</Link>

        </ListGroup>
    )
}
