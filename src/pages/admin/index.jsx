import Sidebar from "../../components/Sidebar/Sidebar"
import "./admin.css"
import Header from '../../components/Header'
import { Fragment } from 'react';

function Admin() {
  return (
    <Fragment>
      <Header />
      <div className="Admin">
        <div className="container">
          <iframe width="1280" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=ae1dc8d7-0a73-4291-9fa7-9cc6aa4fffca&autoAuth=true&ctid=59d4f249-0520-46cf-b6b2-873d5da543fe&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
          <div className="others"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Admin;