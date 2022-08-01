import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Home } from './Home'

export const Header = ({ name, title }) => {
    return (
        <div>
            <Card className='my-2 bg-dark text-white'>
                <CardBody>
                    <h1 className='text-center my-3'>Welcome To Course Application</h1>
                </CardBody>
            </Card>
        </div>

    )
}
