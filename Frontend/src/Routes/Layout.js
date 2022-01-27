import React,{Fragment} from 'react'
import { connect } from 'react-redux';
import NavBar from '../components/Navigation';
import Footer from '../components/Footer';

function Layout({children}) {
    return (
        <Fragment >
            <NavBar />
            <div style={{marginTop:'65px'}}>{children}</div>
            <Footer/>
        </Fragment>
    );
}
export default Layout;