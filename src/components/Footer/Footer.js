import React from "react";
import './Footer.sass';
import * as Img from './images';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {img: 'instagram', alt: 'Instagram', link: 'https://www.instagram.com'},
                {img: 'social', alt: 'Social', link: 'https://whatsapp.com'},
                {img: 'twitter', alt: 'Twitter', link: 'https://twitter.com'},
                {img: 'youtube', alt: 'Youtube', link: 'https://www.youtube.com'}
            ]
        }
    }

    render(){
        return (
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <p className="footer__copy">&copy; React Currency Convertor 2021  Все права защищены</p>
                        </div>

                        <div className="col-6">
                            <ul className="social">

                                {this.state.links.map((item, index) => {
                                    return (
                                        <li key={index} className="social__item">
                                            <a href={item.link} className="social__link">
                                                <img src={Img[item.img]} alt={item.alt}/>
                                            </a>
                                        </li>
                                    );
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
