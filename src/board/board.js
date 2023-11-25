export default class Board {
  constructor() {
    this.element = document.querySelector('.board-container');
    this.boardSize = 4;
    this.monsterPosition = undefined;
    this.init();
    this.moveMonster();
  }

  init() {
    let newRowElement;
    let newColElement;

    for (let row = 0; row < this.boardSize; row++) {
      newRowElement = document.createElement('div');
      newRowElement.classList.add('board-row');
      this.element.append(newRowElement);

      for (let col = 0; col < this.boardSize; col++) {
        newColElement = document.createElement('div');
        newColElement.classList.add('board-column');
        newColElement.dataset.id = (row * this.boardSize + col).toString();
        newColElement.dataset.row = row.toString();
        newColElement.dataset.col = col.toString();
        newRowElement.append(newColElement);
      }
    }

    this.moveMonster();
  }

  moveMonster() {
    if (this.monsterPosition !== undefined) {
      this.element.querySelector(`[data-id="${this.monsterPosition}"]`).classList.remove('monster');
    }

    let newPos;
    do {
      newPos = Math.trunc(Math.random() * this.boardSize ** 2);
    } while (this.monsterPosition === newPos);

    this.monsterPosition = newPos;
    this.element.querySelector(`[data-id="${this.monsterPosition}"]`).classList.add('monster');
  }
}
