import React from 'react'
import { Button, Card } from "react-bootstrap";

const Cartao = (props) => {

    return (
        <div>

                <Card style={{ width: '18rem' }} className="mb-2">
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{ props.title }</Card.Title>
                        <Card.Text>
                            { props.children }
                        </Card.Text>
                        <Button variant="primary" href="#home" >Get started</Button>
                    </Card.Body>
                </Card>

        </div>
    )
}

export default Cartao