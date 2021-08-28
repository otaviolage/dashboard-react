import Topbar from "./../components/topbar/Topbar"
import Sidebar from "./../components/sidebar/Sidebar"
import "./admin.css"

function Admin() {
  return (
    <div className="Admin">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others"></div>
      </div>
    </div>
  );
}

export default Admin;
