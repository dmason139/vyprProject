import { Outlet, Link } from "react-router-dom";
import "./Header.css"

const Layout = () => {
  return (
    <>
    <div class = "links">
        <img onClick={refreshPage} alt="‎" src="https://vyprclients.com/wp-content/uploads/2021/08/Group-16746.png"/>
        <Link class = "home" to="/">Database</Link>
        <Link class = "code" to="code">Submit</Link>
        <Link class = "filters" to="filters">Filters</Link>
        <Link class = "view" to="view">View</Link>
    </div>
    <Outlet/>
    </>
  )
};
function refreshPage() {
  window.location.reload(false);
}
export default Layout;