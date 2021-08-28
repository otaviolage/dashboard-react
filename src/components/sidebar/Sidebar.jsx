import "./sidebar.css"
import Dashboard from "./Menus/Dashboard"
import Quickmenu from "./Menus/Quickmenu"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <Dashboard />
                <Quickmenu />
                
            </div> 
        </div>
    )
}
