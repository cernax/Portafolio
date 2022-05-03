import React, {Component} from 'react';
import "nes.css/css/nes.min.css";
import "@fontsource/press-start-2p";
import {Route, Routes} from "react-router-dom";
import PokedexNess from "../PokedexNess/PokedexNess";

class ChatNess extends Component <any, any >{
    render() {
        return (
            <>
                <a>ChatNess</a>
                <div>
                    <section className="nes-container is-dark" style={{width:"63%", margin: "auto"}}>
                        <section className="message-list">
                            <section className="message -left">
                                <i className="nes-bcrikko" />
                                <div className="nes-balloon from-left is-dark">
                                    <p>Hello NES.css</p>
                                </div>
                            </section>

                            <section className="message -right">
                                <div className="nes-balloon from-right is-dark">
                                    <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                                </div>
                                <i className="nes-bcrikko" />
                            </section>
                        </section>

                    </section>
                    <label htmlFor="name_field">Your Message</label>
                    <div  style={{width:"100%", margin: "auto"}}>
                        <input type="text" id="name_field" className="nes-input"  style={{width:"56%"}}/>
                        <button type="button" className="nes-btn is-success">Enviar</button>
                    </div>
                </div>
            </>
        );
    }
}
export default ChatNess;
