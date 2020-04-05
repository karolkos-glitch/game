import React, { Fragment, createContext, useReducer } from 'react'
import { createGlobalStyle } from 'styled-components';
import { initialState, gameReducer } from '../reducers';
import Header from './Header';
import Game from './game/Game';
import Footer from './Footer';

export const GameContext = createContext();
const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background: radial-gradient(#FFCDBA,#15A1AD);
        width: 100vw;
        height: 100vh;
    }
`;


const App = () => {
    const [gameStore,dispatch] = useReducer(gameReducer, initialState)
    return (
        <Fragment>
            <Global />
            <GameContext.Provider value={{game: gameStore, dispatch}} >
                <Header />
                <Game />
                <Footer />
            </GameContext.Provider>
        </Fragment>
    )
}

export default App
