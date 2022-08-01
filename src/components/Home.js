import React from 'react';
import { Button, Container } from 'reactstrap';

export const Home = () => {
    return (
        <div>
            <div style={{ background: '#cfdaea', padding: 30, alignItems: 'center', textAlign: 'center' }}>
                <h1>DGSH</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Container>
                    <Button color="primary" outline>
                        Click Me
                    </Button>
                </Container>

            </div>
        </div>
    )
}
