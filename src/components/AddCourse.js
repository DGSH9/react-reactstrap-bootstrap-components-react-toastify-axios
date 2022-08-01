import React, { Fragment } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

export const AddCourse = () => {
    return (
        <Fragment>
            <h1 className='text-center my-3'>Fill Course Details</h1>
            <Form>
                {/*This is for Id */}
                <FormGroup>
                    <Label for='userId'>Course id</Label>
                    <Input type='text' name='userId' id='userId' placeholder='Enter Id'></Input>
                </FormGroup>

                {/* This is for Title */}
                <FormGroup>
                    <Label for='title'>Course Title</Label>
                    <Input type='text' id='title' placeholder='Enter Title'></Input>
                </FormGroup>

                {/* this is for text Description */}
                <FormGroup>
                    <Label for='description'>Course Description</Label>
                    <Input type='textarea' placeholder='Enter Description' id='description' style={{ height: 150 }}></Input>
                </FormGroup>

                {/* This is for Button */}
                <Container className='text-center'>
                    <Button color='success'>Add Course</Button>
                    <Button color='warning ml-2'>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
