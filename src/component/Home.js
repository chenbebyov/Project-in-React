import React from 'react';
import {BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
import {AboutAs , History ,Reason, Status}  from './AboutAs';
import Product from './Product';
import Pay from './Pay';
import NavBar from './NavBar';
import EndPayment from './EndPayment';
import home1 from '../redux/images/home1.png';
import home2 from '../redux/images/home2.png';
import { Image ,Form} from 'react-bootstrap';


export default function Home() {
    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/about">
                        <AboutAs>
                            <History/>
                            <Reason/>
                            <Status/>
                        </AboutAs>
                        </Route>
                    <Route path="/products"><Product/></Route>
                    <Route path="/pay"><Pay/></Route>
                    <Route path="/end"><EndPayment/></Route>
                    
                    <div className="d-flex justify-content-around align-items-center">
                    </div>
                </Switch>
            </Router>
         <Form inline>
           <Image id="img2" style={{padding:'10px',width:'100%' }} src={home1}></Image>
           <Image id="img3" style={{padding:'10px',width:'100%' }} src={home2}></Image>
           </Form>

        </>
    )
}