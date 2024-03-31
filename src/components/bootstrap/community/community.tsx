import React from "react";
import "../../../pages/index.css";
import "./community.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import Link from "@docusaurus/Link";

/**
 * This file contains implementation of community frontend for home page
 *
 * @author Iva Utikalova
 */

export const Community = () => {

    return (
        <div className="container-fluid text-center">
            <div className="w-100 p-3 pt-lg-5 display-6">
                Our Community
            </div>
            <div className="w-100 p-3 pb-lg-5 lead">
                Stay up to date with library updates.
            </div>
            <div className="w-100 p-3 pb-lg-5 lead">

                <Link to="/playground#playground-hook" className="ps-lg-3">
                    <Button variant="default">Try Playground</Button>
                </Link>
            </div>
        </div>
    );
};

export default Community;
