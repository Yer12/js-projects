import * as React from "react"
import Layout from "../components/layout"
import Prices from "../components/Prices/prices";
import "./index.css";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";


const IndexPage = () => {
    return (
        <main className="page">
            <Layout>
                <Prices />
            </Layout>
            <Footer />
        </main>
    );

};


export default IndexPage
