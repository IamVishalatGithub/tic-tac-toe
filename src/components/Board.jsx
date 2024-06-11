import React, { useState } from 'react'

export default function Board() {

    let curr_player = 0;
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [winner, setWinner] = useState('');

    const handleClick = (idx) => {
        let square = board;
        if(square[idx] != '' || curr_player === -1) return;
        if(curr_player) square[idx] = 'X';
        else square[idx] = 'O';
        
        console.log("clicked", square);
        curr_player = !curr_player;

        if(checkWinner() == 1) {
            setWinner("wins game");
            curr_player = -1;
            console.log("winner");
        }
        setBoard((prevBoard) => square);
    };
    

    function checkWinner() {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return 1;
          }
        }
        return 0;
      };

  return (
    <div className='board'>
        <div className='row'>

            <button onClick={() => handleClick(0)}>
                {board[0]}
            </button>
            <button onClick={() => handleClick(1)}>
                {board[1]}
            </button>
            <button onClick={() => handleClick(2)}>
                {board[2]}
            </button>

        </div>
        
        <div className='row'>

            <button onClick={() => handleClick(3)}>
                {board[3]}
            </button>
            <button onClick={() => handleClick(4)}>
                {board[4]}
            </button>
            <button onClick={() => handleClick(5)}>
                {board[5]}
            </button>
         
        </div>
        
        <div className='row'>

            <button onClick={() => handleClick(6)}>
                {board[6]}
            </button>
            <button onClick={() => handleClick(7)}>
                {board[7]}
            </button>
            <button onClick={() => handleClick(8)}>
                {board[8]}
            </button>
           
        </div>
        <h2 className='winners'> {winner} </h2>
    </div>
  );
}


