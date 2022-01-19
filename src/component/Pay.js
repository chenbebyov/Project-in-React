import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Button, Table} from 'react-bootstrap';
import { actions } from '../redux/actions';

function mapStateToProps(state) {
    return {
        productsInCart: state.products.productsInCart
    }
}
const mapDispatchToProps = (dispatch) => ({
    addProduct: (product) => dispatch(actions.addProduct(product)),
    deleteProduct: (product) => dispatch(actions.deleteProduct(product)),
    addQuantity: (product) => dispatch(actions.addQuantity(product)),
    subQuantity: (product) => dispatch(actions.subQuantity(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(function Pay(props) {
    const { productsInCart, deleteProduct, addQuantity, subQuantity} = props

    const deleteP = (product) => {
        deleteProduct(product)
    }

    const addQ = (product) => {
        addQuantity(product)
    }

    const subQ = (product) => {
        subQuantity(product)
    }

    useEffect(function () {
        {
            document.title = "Pay"
        }
    }, []);


    return (
        <>
            <p><b>דף תשלום</b></p>
            <Table striped bordered hover>
                <thead>
                    <tr className="row m-0">
                        <th className="col-2">שם מוצר</th>
                        <th className="col-2">מחיר</th>
                        <th className="col-2">כמות</th>
                        <th className="col-2">הסרה מהסל</th>
                        <th className="col-2">הפחתת כמות</th>
                        <th className="col-2">הוספת כמות</th>
                    </tr>
                </thead>
                <tbody className="m-0">{productsInCart.map((products,i) =>products.name ?(
                    <tr key={i} className="row m-0">
                        <td className="col-2">{products.name}</td>
                        <td className="col-2">{products.price*products.quantity} ש"ח</td>
                        <td className="col-2">{products.quantity}</td>
                        <td className="col-2"><Button block variant="outline-info" className="p-0" onClick={() => deleteP(products)}>הסרה</Button></td>
                        <td className="col-2"><Button block variant="outline-info" className="p-0" onClick={() => subQ(products)}>-</Button></td>
                        <td className="col-2"><Button block variant="outline-info" className="p-0" onClick={() => addQ(products)}>+</Button></td>
                    </tr>):null)}
                </tbody>
            </Table>
        </>
    )

})