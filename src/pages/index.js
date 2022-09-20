import * as React from "react"
import Layout from "../components/layout"
import Prices from "../components/prices";
import "./index.css";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";


const IndexPage = () => (
    <>
        <main className="page">
            <Header/>

            <Layout>

                <Prices />

            </Layout>
            <Footer />
        </main>


    </>

)

export default IndexPage
