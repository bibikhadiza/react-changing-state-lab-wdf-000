const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  constructor(){
    super()
  }
  render () {
    const { board, onClick } = this.props;
     const field = board.map((field, i) => <Field player={field} onClick={onClick.bind(null, i)}/>)
    return (
      <div className="board">
        {field}
      </div>
    );
  }
}

module.exports = Board;
