import React from 'react';

import {
    Card, CardBody, CardTitle, CardSubtitle, CardFooter, Button, CardText, Container
} from 'reactstrap';

export const Course = ({ course }) => {
    return (
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle tag="h2">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>

                <Container className='text-center'>
                    <Button color='danger'>Delete</Button>
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}
