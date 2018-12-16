import React from 'react';
import {Link} from "react-router-dom";
import {MANUAL} from "../helpers/routesConstants";
import styles from './Page404.css'

function Page404(props) {
    return (
        <div className="">
            <div style={styles} className="container ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                                <Link to={MANUAL} className="btn btn-primary btn-lg">
                                    Take Me Home </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page404;