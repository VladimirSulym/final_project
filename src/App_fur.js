import React,{useEffect} from "react";
import {useDispatch} from 'react-redux';
import Topbar from "./Components/topbar";
import WrapHeader from "./Components/wrap_header";
import Footer from "./Components/footer";
import {fetchData, fetchFilterData} from "./store/action_creatores";

function App_fur(props) {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchData())},[])
    useEffect(() => {dispatch(fetchFilterData())},[])

  return (
    <div>
      <header className="header1">
        {/*!--Header desktop --*/}
        <div className="container-menu-header">
          <Topbar />
          <WrapHeader/>
        </div>
      </header>
        {props.children}
        {/*<!-- Footer -->*/}
      <Footer />
    </div>
  );
}

export default React.memo(App_fur);
