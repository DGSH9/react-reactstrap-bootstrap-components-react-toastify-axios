import React from 'react';
import { useState } from 'react';
import './App.css';
import { Button, Row, Col, Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Home } from './components/Home';
import { Allcourses } from './components/Allcourses';
import { AddCourse } from './components/AddCourse';
import { Header } from './components/Header';
import { Menus } from './components/Menus';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  const ButtonHandle = () => {
    toast("Wow so easy!");
  };

  return (
    <div>
      <Router>
        <div className='display3'>
          <ToastContainer />
          <Container>
            {/* for header */}
            <Header />

            <Row>
              {/* for left menus */}
              <Col md={2}>
                <Menus />
              </Col>

              {/* for route right content */}
              <Col md={10}>
                <Route path="/" component={Home} exact />
                <Route path="/add-course" component={AddCourse} exact />
                <Route path="/view-courses" component={Allcourses} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={Contact} exact />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>

    </div>
  );
}

export default App;
