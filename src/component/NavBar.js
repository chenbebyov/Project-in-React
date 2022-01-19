import React from 'react'
import {BrowserRouter as Router,Link}from 'react-router-dom';
import { Navbar , Image ,Form} from 'react-bootstrap';
import { ShoppingOutlined } from '@ant-design/icons';
import logo from '../redux/images/logo.png';

export default function NavBar()
{
    return(
        <>
        <Form inline>
           <Image id="img1" style={{textAlign:'center'}} src={logo}></Image>
        </Form>
        <Navbar bg="light" expand="x-lg" className="align-content-around bg-light fixed container-fluid d-flex navbar navbar-light">
        <Link to="/about"><br></br>אודות</Link>

        <Link to="/home"><br></br>דף הבית</Link>

        <Link to="/products"><br></br>מוצרים</Link>
        
        <Link to="/pay"><br></br><h4><ShoppingOutlined /></h4></Link>

        <Link to="/end"><br></br>לתשלום</Link>
        </Navbar>
        <br/>
        </>

    )
}