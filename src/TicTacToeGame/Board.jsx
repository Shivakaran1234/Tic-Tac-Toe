import React, {useState} from 'react'
import Square from './Square'
function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function checkWinner(){
        const winningCombinations = [
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ];
        for(let logic of winningCombinations){
            const [a,b,c]= logic;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    function handlClick(index){
        if(state[index]!==null){
            return;
        }
        const copyState = [...state];
        copyState[index] = xIsNext? 'X':'O';
        setState(copyState);
        setXIsNext(!xIsNext);
    }
function handleReset(){
    setState(Array(9).fill(null));
}

  return (
    <div className='board-container'>
    {isWinner?<> Congragulations !{isWinner}  wins the game <button onClick={handleReset}>play again</button></>:
    <>
    <h4>Player {xIsNext?  'X' : 'O'} turn </h4>
    <div className='board-row'>
        <Square onClick={()=>handlClick(0)}value={state[0]}/>
        <Square onClick={()=>handlClick(1)} value={state[1]}/>
        <Square onClick={()=>handlClick(2)}value={state[2]}/>
    </div>
    <div className='board-row'>
        <Square onClick={()=>handlClick(3)}value={state[3]}/>
        <Square onClick={()=>handlClick(4)}value={state[4]}/>
        <Square onClick={()=>handlClick(5)}value={state[5]}/>
    </div>
    <div className='board-row'>
        <Square onClick={()=>handlClick(6)}value={state[6]}/>
        <Square onClick={()=>handlClick(7)}value={state[7]}/>
        <Square onClick={()=>handlClick(8)}value={state[8]}/>
    </div>
    </>}
    </div>
  )
}

export default Board