import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Course } from './Course';


export const Allcourses = () => {
    const [courses, setCourses] = useState([
        { title: "Java Course", description: "This is java courses" },
        { title: "Python", description: "This is Python courses" },
        { title: "Django", description: "This is Django courses" },
        { title: "React", description: "This is React courses" },
        { title: "Node Js", description: "This is Nodde Js courses" }

    ]);

    return (
        <div style={{ background: "grey" }}>
            <Container className='text-center'><h1>All Courses</h1>
                <p>Lists of cources are as follows</p>
            </Container>
        
            {
                courses.length > 0
                    ? courses.map((item) => (<Course course={item} />)
                    ) : "No Cources"
            }

        </div>
    )
}
