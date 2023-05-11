import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Restaurant() {

  const [restList, setRest] = useState([])

  //api acces to data

  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))
  }



  console.log(restList);

  useEffect(() => {
    // console.log('hello');
    getData()
  }, [])
  return (
    <Row>
      {
        restList.map(rest => (
          <Col >
            <Link style={{textDecoration:'none',color:'white'}} to={`viewRest/${rest.id}`}>
              <Card className='mt-5 ms-5' style={{ width: '18rem',height:'500px' }}>
                <Card.Img variant="top" style={{ height: '300px' }} src={rest.photograph} />
                <Card.Body>
                  <Card.Title>{rest.name}</Card.Title>
                  <Card.Text>
                    {rest.address}
                  </Card.Text>
                  <Button variant="info">Add</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))
      }
    </Row>
  )
}

export default Restaurant