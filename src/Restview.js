import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Operatingtime from './Operatingtime'




function Restview() {



  const [restList, setRest] = useState([])

  //api acces to data

  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))
  }



 //object create for useParams

 const params=useParams()

 console.log(params.id);


// find single restaurant data

const singleRest=restList.find(i=>i.id==params.id)
console.log(singleRest);

  useEffect(() => {
    // console.log('hello');
    getData()
  }, [])


   


  return (
    <div>
      
      {singleRest?
        (<Row>
          
              <Col lg={6} md={6}>
              <img className='w-75 container p-5' style={{height:"750px"}} src={singleRest.photograph} alt="" />
              </Col>

              <Col lg={6} md={6} className='mt-5 fs-5'>

              <ListGroup className='pe-5'>
                <ListGroup.Item> <h2 className='text-warning'>{singleRest.name}</h2> </ListGroup.Item>
                <ListGroup.Item> <p>{singleRest.address}</p> </ListGroup.Item>
                <ListGroup.Item> <p>{singleRest.neighborhood}</p> </ListGroup.Item>
                <ListGroup.Item> <p>{singleRest.cuisine_type}</p> </ListGroup.Item>
                <ListGroup.Item>
                  <Operatingtime workingTime={singleRest.operating_hours}/>
                </ListGroup.Item>
  
              </ListGroup>

              </Col>

              console.log(workingTime);
          
      </Row>):""}
    </div>
  )
}

export default Restview