import React, {useEffect, useState} from "react";
import Navigation from "../components/Navigation/navigation.js";
import {Card, Container,Button,Col,Row,CardGroup} from "react-bootstrap";
import person from "../Assets/person.png"
import Footer from "../components/Footer/Footer.js"
import "./Home.css"
import axios from "axios";

const Home = () => {
    const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };


    return(
        <>
        <Navigation/>
        <Container fluid>
        
        
        <div >
            <CardGroup className=" justify-content-center" >
            {users.map((user) => (
                <Col className="col-sm-3 m-2 col-12">
        <Card  className="mt-5  card-bio">
            <Card.Img variant="top" className="card-img" src={person} />
            <Card.Body>
                <div className="text-center">
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.gender}</Card.Text>
                </div>
                <Card.Text>
                {user.information.substring(0,150)}
                </Card.Text>
                <div className="text-center">
                <Button variant="primary">Go somewhere</Button>
                </div>
            </Card.Body>
        </Card>
        </Col>
        ))}
       
        </CardGroup>
        </div>
        
        
        
        </Container>
        <Footer/>
        </>
    )
}
export default Home;