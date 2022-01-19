import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap';

function mapStateToProps(state) {
    return {
        productsInCart: state.products.productsInCart
    }
}

export default connect(mapStateToProps)(function EndPayment(props) {
    const { productsInCart } = props
    let sum = 0

    const Total = () => {
        productsInCart.forEach(e=> { sum += e.price * e.quantity });
        return sum
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr className="row m-0">
                        <th className="col-4">שם</th>
                        <th className="col-4">מחיר</th>
                        <th className="col-4">כמות</th>
                    </tr>
                </thead>
                <tbody>{productsInCart.map((products,i) =>products.name ?(
                    <tr key={i} className="row m-0">
                        <td className="col-4">{products.name}</td>
                        <td className="col-4">{products.price*products.quantity} ש"ח</td>
                        <td className="col-4">{products.quantity}</td>
                    </tr>):null)}
                </tbody>
            </Table>
            <p>סה"כ: {Total()} ש"ח</p>
        </>
    )
})