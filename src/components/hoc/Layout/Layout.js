import React from "react";
import './Layout.sass'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";


export default class Layout extends React.Component{

    render() {
        return (
            <div className="Layout">
                {/*Header*/}
                <Header/>

                <main className="main">
                    {this.props.children}
                </main>

                {/*Footer*/}
                <Footer/>
            </div>
        );
    }
}
