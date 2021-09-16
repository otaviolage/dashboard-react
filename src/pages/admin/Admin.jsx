import Sidebar from "./../../components/sidebar/Sidebar"
import "./admin.css"
import Topbar from '../../components/topbar/Topbar'
import { Fragment } from 'react';

function Admin() {
  return (
    <Fragment>
      <Topbar subtitle="Admin"/>
      <div className="Admin">
        <div className="container">
          <Sidebar />
          <div className="others"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Admin;
