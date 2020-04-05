import React, {Suspense, lazy, useContext} from 'react'
import styled from 'styled-components';
import { GameContext } from "../App";
const Stage = lazy(()=>import('./Stage'));
const Start = lazy(()=>import('./Start'));
const End = lazy(()=>import('./End'));

const StyledMain = styled.main`
    width: 100%;
`;

const Game = () => {
    const gameStore = useContext(GameContext);
    const { dispatch, game} = gameStore;
    const { isFinished, isStarted, currentStage } = game;
    let renderNow;
    if(!isStarted){
        renderNow = <Start />
    }
    else if(!isFinished){
        renderNow = <Stage id={currentStage} dispatch={dispatch}/>
    }
    else {
        renderNow = <End />
    }
    return(
        <StyledMain>
            <Suspense fallback={<h2>Loading...</h2>}>
                {renderNow}
            </Suspense>
        </StyledMain>
    )
}

export default Game
