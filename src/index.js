import '../css/style.css';
import './board/board.css';
import Board from './board/board';

const board = new Board();

setInterval(() => {
  board.moveMonster();
}, 2000);
