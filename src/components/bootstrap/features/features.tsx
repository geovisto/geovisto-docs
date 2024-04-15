import React, { useState, useEffect } from "react";
import "../../../pages/index.css";
import "./features.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import Link from "@docusaurus/Link";

/**
 * This file contains implementation of community frontend for home page
 *
 * @author Iva Utikalova
 */


export const Features = () => {


    return (
        <div className="container-fluid text-center">
            <div className="w-100 p-3 pt-lg-5 display-6">
                <div >
                    Features
                </div>
                <div className="w-100 p-3 pb-lg-5 lead">
                    Stay up to date with library updates.
                </div>
            </div>
            <div className="features__container">
                <div className="features__wrapper">
                </div>
                <div className="features__actions">
                </div>
            </div>
            <div className="w-100 p-3 pb-lg-5 lead">
                <Link to="/blog" className="ps-lg-3">
                    <Button variant="default">Go to Community</Button>
                </Link>
            </div>

        </div>
    );

};

export default Features;
