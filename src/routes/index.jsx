import {Switch, Route} from 'react-router-dom';

import Admin from '../pages/admin/Admin'
import Cart from '../pages/cart/Cart'
import Showcase from '../pages/showcase/Showcase'
import { Fragment, useState } from 'react';


const Routes = ()=>{
    return (
    <Fragment>
        <Switch>
            <Route path="/" component={Admin} exact/>
            <Route path="/cart" component={Cart}/>
            <Route path="/showcase" component={Showcase}/>
        </Switch>
    </Fragment>
    );
}

export default Routes