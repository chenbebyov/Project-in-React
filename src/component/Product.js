import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import { Button, Modal, Card } from 'react-bootstrap';

function mapStateToProps(state) {
    return {
        productsInStock: state.products.productsInStock,
        productsInCart: state.products.productsInCart
    }
}
const mapDispatchToProps = (dispatch) => ({
    addProduct: (product) => dispatch(actions.addProduct(product))

})

export default connect(mapStateToProps, mapDispatchToProps)(function Product(props) {
    const { productsInStock, addProduct } = props
    const [product, setProduct] = useState({ name: "" })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (product) => {
        setShow(true);
        setProduct(product)
    }

    const addToCart = (product) => {
        alert('המוצר נוסף לסל')
        addProduct(product)
    }

    return (
        <>
            <div className="row justify-content-around m-0">
                {productsInStock.map((products, i) => (
                    <div key={i} className="col-sm-12 col-md-6 col-lg-4 my-3">
                        <Card >
                            <Card.Body>
                                <Card.Title>{products.name}</Card.Title>
                                <Card.Text><img className="col-12 h-100" src={products.imageUrl} onClick={() => handleShow(products)}></img>
                                </Card.Text>
                                <Card.Text>מחיר: {products.price} ש"ח</Card.Text>
                                < Button block variant="btn btn-dark" className="p-1" onClick={() => addToCart(products)}>
                                   הוסף לסל
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>

                ))}
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header>{product.name}</Modal.Header>
                    <Modal.Body>
                     
                     <img style={{width:'100%'}} src={product.imageUrl} onClick={handleClose}></img>
                     <h6>מחיר: {product.price} ש"ח</h6>
                    </Modal.Body>
                </Modal>
            </div>

        </>
    )
})
