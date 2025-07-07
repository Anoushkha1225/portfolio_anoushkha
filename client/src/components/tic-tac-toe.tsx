import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useParallax } from "../hooks/use-parallax";

type Player = 'X' | 'O' | null;

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameWon, setGameWon] = useState(false);
  const gameParallax = useParallax({ intensity: 6, range: 100 });

  const calculateWinner = (squares: Player[]): Player => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board) || gameWon) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    
    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameWon(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameWon(false);
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(cell => cell !== null);

  const getStatus = () => {
    if (winner) return `🎉 ${winner} Wins!`;
    if (isDraw) return "🤝 It's a Draw!";
    return `${isXNext ? 'X' : 'O'}'s Turn`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-white/5 backdrop-blur-custom rounded-2xl p-6 border border-white/10 hover:border-lavender/30 transition-all duration-300"
    >
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">Tic-Tac-Toe</h3>
        <p className="text-sm text-white/70">{getStatus()}</p>
      </div>
      
      <div 
        ref={gameParallax.ref}
        style={gameParallax.style}
        className="grid grid-cols-3 gap-2 mb-4"
      >
        {board.map((cell, index) => (
          <motion.button
            key={index}
            onClick={() => handleClick(index)}
            whileHover={{ scale: cell ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-xl font-bold transition-all duration-200 hover:bg-white/20 hover:border-mint/40"
            disabled={!!cell || !!winner || gameWon}
          >
            <span className={`${
              cell === 'X' ? 'text-mint' : cell === 'O' ? 'text-light-peach' : 'text-transparent'
            }`}>
              {cell}
            </span>
          </motion.button>
        ))}
      </div>
      
      <motion.button
        onClick={resetGame}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-lavender/20 hover:bg-lavender/30 border border-lavender/40 rounded-lg py-2 px-4 text-white/80 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 text-sm"
      >
        <RotateCcw className="w-4 h-4" />
        New Game
      </motion.button>
    </motion.div>
  );
}