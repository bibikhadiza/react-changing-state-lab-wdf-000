const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null,
      null, null, null,
      null, null, null],
      turn: "X",
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isComplete = this.isComplete.bind(this);
    this.getWinner = this.getWinner.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: Object.assign([], this.state.board, [null, null, null,
      null, null, null,
      null, null, null]),
      turn: "X"
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    var player;
    this.state.turn == "X" ? player = "O" : player = "X"
    var full_board = Object.assign([], this.state.board)
    full_board[i] = this.state.turn
    this.setState({
      board: full_board,
      turn: player
    })
    this.isComplete()
  }

  getWinner () {
    for(var x = 0; x < solutions.length; x++){
      if(`${this.state.board[solutions[x][0]]}, ${this.state.board[solutions[x][1]]}, ${this.state.board[solutions[x][2]]}` == "X, X, X"){
        return "X"
      }else if(`${this.state.board[solutions[x][0]]}, ${this.state.board[solutions[x][1]]}, ${this.state.board[solutions[x][2]]}` == "O, O, O"){
        return "O"
      }
    }
  }


  isComplete () {
    if(this.getWinner() || !this.state.board.includes(null)){
      return true
    }

  }

  render () {
    return (
      <div className="game">
      <Board board={this.state.board} onClick={this.handleClick}/>
        {this.isComplete() ? <Status winner={this.getWinner()}/> : null}
      <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
