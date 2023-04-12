import React, { Component } from 'react';
import Config from "../config/config"

/**
 * Renders the Footer
 */
class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            2023 &copy; <a href={`${Config.appDetails.devOrgLink}`} target="_blank" rel="noopener noreferrer" className="ml-1">{Config.appDetails.devOrgName}</a>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;