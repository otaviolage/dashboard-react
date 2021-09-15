import {Switch, Route} from 'react-router-dom';

import Admin from '../pages/admin/Admin'
import Cart from '../pages/cart/Cart'
import Showcase from '../pages/showcase/Showcase'
import Topbar from '../components/topbar/Topbar'
import { Fragment } from 'react';


const Routes = ()=>{

    return (
    <Fragment>
        <Topbar />
        <Switch>
            <Route path="/" component={Admin} exact/>
            <Route path="/cart" component={Cart}/>
            <Route path="/showcase" component={Showcase}/>
        </Switch>
    </Fragment>
    );
}

export default Routes