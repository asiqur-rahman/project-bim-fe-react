import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter,Redirect } from 'react-router-dom'
import * as Session from '../../helpers/session.helper';
import { logoutUser } from '../../redux/actions';

const Logout = (props) => {

    useEffect(()=>{
        Session.removeSession();
        props.history.push('/')
    },[])
    
    return (<React.Fragment>
    </React.Fragment>)
}

export default withRouter(connect(null, { logoutUser })(Logout));