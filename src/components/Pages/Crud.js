import { useState, useEffect } from 'react' 
import {Card,Button, Container, Row, Col} from 'react-bootstrap'

import FormProduct from '../Form/FormProduct'

import dataProducts from '../../fakeData/Products'

function Crud() {

    const [dataAddProduct, setDataAddProduct] = useState();
    const [products, setProducts] = useState(dataProducts);

    useEffect(()=>{
        if(dataAddProduct){
            const newProducts = [
                ...products,
                dataAddProduct
            ]

            setProducts(newProducts)
        }
    },[dataAddProduct])

    return (
        <Container className="py-5">
            <Row className="mb-5 justify-content-center">
                <Col md="5">
                    <FormProduct setDataAddProduct={setDataAddProduct} />
                </Col>
            </Row>
            <Row>
                {products.map((product,index)=>(
                    <Col md="3" key={index}>
                        <Card>
                            <Card.Img style={{height: '250px'}} variant="top" src={product.url} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.desc}</Card.Text>
                                <Button variant="primary" className="btn-sm">Update</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Crud
