import Header from "./Header";
import classes from "./Layout.module.css";
import { useHistory } from "react-router-dom";
const Layout = (props) => {
  const history = useHistory();
  
  return (
    <div className={classes.conform}>
      {/* <Header /> */}
      {/* <div>{props.children}</div> */}
    </div>
  );
};

export default Layout;
