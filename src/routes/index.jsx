import {Switch, Route} from 'react-router-dom';

import Admin from '../pages/Admin'
import Cart from '../pages/Cart'


const Routes = ()=>{

    return (
    <Switch>
        <Route path="/" component={Admin} exact/>
        <Route path="/cart" component={Cart}/>
    </Switch>
    );
}

export default Routes