import React, {Component, useState} from 'react';
import "nes.css/css/nes.min.css";
import "@fontsource/press-start-2p";
import './App.css';
import ChatNess from "./ChatNess/ChatNess";
import PokedexNess from "./PokedexNess/PokedexNess";
import { Routes, Route, Link, Navigate  } from "react-router-dom";

class App extends Component <any, any >{
    render() {

        return (
            <>
                <br/>
                <div className="nes-container with-title is-centered">
                    <span className="nes-text is-primary">
                                <a className="nes-text is-primary" href="/">Home</a>
                    </span>
                    {'/'}
                    <span className="nes-text is-primary">
                                <a className="nes-text is-primary" href="/ChatNess">Chat</a>
                    </span>
                    {'/'}
                    <span className="nes-text is-primary">
                                <a className="nes-text is-primary" href="/PokedexNess">Pokedex</a>
                    </span>
                </div>
                <div>
                    <Routes>
                        <Route path="/ChatNess" element={<ChatNess />} />
                        <Route path="/PokedexNess" element={<PokedexNess />} />
                    </Routes>
                </div>
            </>
        );
    }
}

export default App;
