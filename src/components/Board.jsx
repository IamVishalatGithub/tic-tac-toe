import React, { useState } from 'react';

export default function Board() {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [winner, setWinner] = useState('');
    const [currentPlayer, setCurrentPlayer] = useState(0); // 0 for O , 1 for X

    const handleClick = (idx) => {
        if (board[idx] !== '' || currentPlayer === -1) return;
        let newBoard = [...board];
        if (currentPlayer) {
            newBoard[idx] = 'X';
        } else {
            newBoard[idx] = 'O';
        }

        setBoard(newBoard);

        if (checkWinner(newBoard) === 1) {
            setWinner(`Player ${currentPlayer ? 'X' : 'O'} wins`);
            setCurrentPlayer(-1); // Disable further moves
        } else if (newBoard.every(square => square !== '')) {
            setWinner('Draw');
            setCurrentPlayer(-1); // Disable further moves
        } else {
            setCurrentPlayer((prevPlayer) => !prevPlayer); // Toggle player

        }
    };

    const checkWinner = (board) => {
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

    const resetGame = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);
        setWinner('');
        setCurrentPlayer(0);
    };

    return (
        <div className='board border-white bg-gray-800'>
            <div className='row'>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(0)}>
                    {board[0]}
                </button>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(1)}>
                    {board[1]}
                </button>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(2)}>
                    {board[2]}
                </button>
            </div>

            <div className='row'>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(3)}>
                    {board[3]}
                </button>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(4)}>
                    {board[4]}
                </button>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(5)}>
                    {board[5]}
                </button>
            </div>

            <div className='row'>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(6)}>
                    {board[6]}
                </button>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(7)}>
                    {board[7]}
                </button>
                <button className='bg-gray-100 text-xl' onClick={() => handleClick(8)}>
                    {board[8]}
                </button>
            </div>
            {winner && (
                <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 backdrop-blur'>
                    <div className='bg-white p-8 rounded shadow-lg text-center'>
                        <h2 className='text-gray-600 text-2xl mb-4'>{winner}</h2>
                        <button className='bg-green-500 text-white px-4 py-2 rounded w-fit h-fit border-none outline-none'  onClick={resetGame}>
                            Play Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
