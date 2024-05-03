import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import "./index.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Playground from "../geovisto_demos/playground";

export const Home = (): JSX.Element => (
    <Layout
        title={`Playground`}
        description="Description will go into a meta tag in <head />"
    >
        <main >
            <div className="light">
                <div className="container-fluid">
                    <h1
                        className="w-100  text-center title"
                        
                    >
                        Playground
                    </h1>
                    <div className="text-center w-100">
                        Here you can try the implemented Geovisto library.
                    </div>
                </div>
                <div className="w-100 text-center">
                    <Render_geovisto />
                </div>
            </div>
        </main>
    </Layout>
);


export function Render_geovisto(): JSX.Element {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Playground = require('../geovisto_demos/playground').default;
                return <Playground />;
            }}
        </BrowserOnly>
    );
}

export default Home;
