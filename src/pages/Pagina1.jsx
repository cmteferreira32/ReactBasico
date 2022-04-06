import React from 'react'
import { Button, Card, Spinner, Form, Row, Col,} from "react-bootstrap";

const Pagina1 = () => {
  return (
    <div>
        
        <Cartao title="Front-end" image={ "https://pbs.twimg.com/media/DWoitEUX0AEnrdn.jpg" } >
<p>O Front-end está muito relacionado com a interface gráfica do projeto. Ou seja, é onde se desenvolve a aplicação com a qual o usuário irá interagir diretamente, seja em softwares, sites, aplicativos, etc.</p>
</Cartao>


  <Form>
  <Row>

  <Col>
  <Card style={{ width: '18rem' }} className="mb-2">
  <Card.Img variant="top" src="https://5.imimg.com/data5/FL/OJ/DC/GLADMIN-8159280/react-native-app-development-300x300-250x250.png" />
  <Card.Body>
    <Card.Title>React Native</Card.Title>
    <Card.Text>
    O React Native é um framework baseado no já aclamado React, desenvolvido pela equipe do Facebook, que possibilita o desenvolvimento de aplicações mobile, tanto para Android, como para iOS, utilizando apenas Javascript.
    </Card.Text>
    <Button variant="primary" href="#home" >Get started</Button>
  </Card.Body>
</Card>
</Col>

<Col>
<Card style={{ width: '18rem' }} className="mb-2">
  <Card.Img variant="top" src="https://agnersecurity.github.io/customer-logo-6.png" />
  <Card.Body>
    <Card.Title>Bootstrap</Card.Title>
    <Card.Text>
    Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. 
    Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma
    </Card.Text>
    <Button variant="primary">Get started</Button>
  </Card.Body>
</Card>
</Col>

<Col>
<Card style={{ width: '18rem' }} className="mb-2">
  <Card.Img variant="top" src="https://www.rhbinformatica.com.br/arquivos/2017/10/logo-html-css.png" />
  <Card.Body>
    <Card.Title>HTML e CSS</Card.Title>
    <Card.Text>
    Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto —, o HTML é o componente base da web. 
    Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos.
    </Card.Text>
    <Button variant="primary">Get started</Button>
  </Card.Body>
</Card>
</Col>

<Card style={{ width: '18rem' }} className="mb-2">
  <Card.Img variant="top" src="https://blog.vandersonguidi.com.br/wp-content/uploads/2016/11/js3.png" />
  <Card.Body>
    <Card.Title>Javascript</Card.Title>
    <Card.Text>
    
JavaScript é uma linguagem de programação voltada para aplicações web, de fácil execução e que pode ser rodada a partir de um navegador de internet. Hoje, ela é uma das mais populares do mundo, o que a faz ser considerada fundamental para programadores.
    </Card.Text>
    <Button variant="primary">Get started</Button>
  </Card.Body>
</Card>

</Row>
</Form>

<Card>
  <Card.Body><Spinner animation="border" size="sm" /><b>  What is React Native used for?</b></Card.Body>
</Card>

<Card>
  <Card.Body><Spinner animation="border" size="sm" /><b>  What is difference between React JS and React Native?</b></Card.Body>
</Card>

<h1>Veja mais...</h1>

<Button variant="primary">Primary</Button>


    </div>
  )
}

export default Pagina1