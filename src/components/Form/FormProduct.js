import {useState} from 'react' 

import {Form,Button} from 'react-bootstrap'

function FormProduct({setDataAddProduct}) {

    const [product, setProduct] = useState({
        name: '',
        desc: '',
        url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'
    })

    const { name, desc } = product;

    const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        setDataAddProduct(product)

        setProduct({
            name: '',
            desc: '',
            url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'
        })
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <div className="h3 text-center">Add product</div>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control onChange={handleOnChange} name="name" value={name} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDesc">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={handleOnChange} name="desc" value={desc} type="text" placeholder="Description" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormProduct
