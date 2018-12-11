import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class TicTacToe extends Component {
  state = {
    grid: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    turn: 'X',
    winner: null,
    gameOver: false
  }
  clickSquare = (square) => {
    if (this.state.winner) return
    let grid = this.state.grid;
    let row = square[0];
    let col = square[1];
    if (grid[row][col] == null) {
      grid[row][col] = this.state.turn === 'X' ? 'X' : 'O';
      this.setState({grid, turn: this.state.turn === 'X' ? 'O' : 'X'})
      this.checkGrid()
    }
  }
  checkGrid = () => {
    let grid = this.state.grid;
    for (let row = 0; row < 3; row ++) {
      for (let col = 0; col < 3; col ++) {
        // Checking down the column
        if (grid[row][col] != null && grid[0][col] === grid[1][col] && grid[1][col] === grid[2][col]) {
          this.setState({winner: grid[row][col] === 'X' ? 'X' : 'O', gameOver: true})
        }
        // Checking across the row
        if (grid[row][col] != null && grid[row][0] === grid[row][1] && grid[row][1] === grid[row][2]) {
          this.setState({winner: grid[row][col] === 'X' ? 'X' : 'O', gameOver: true})
        }
      }
    }
    // Check each row
    // Check each diagonal
    if (grid[0][0] != null && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      console.log('Winner on the diagonal')
      this.setState({winner: grid[0][0] === 'X' ? 'X' : 'O', gameOver: true})
    }
    if (grid[0][2] != null && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      this.setState({winner: grid[0][2] === 'X' ? 'X' : 'O', gameOver: true})
    }
  }
  reset = () => {
    this.setState({winner: null, turn: 'X', gameOver: false, grid: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ] })
  }
  render() {
    return (
      <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 50}}>
        <Typography variant = "display1" style = {{color: '#232323', margin: 50}}>
          {this.state.winner ? "Winner: " + this.state.winner : "Turn: " + this.state.turn}
        </Typography>
        <Button variant = "contained" color = "secondary" onClick = {() => this.reset()} style = {{marginBottom: 15}}>
          {this.state.winner ? 'Play Again' : 'Reset'}
        </Button>
        {this.state.grid.map((row, index) => (
          <div style = {{display: 'flex', flexDirection: 'row'}}>
            {row.map((square, index2) => (
              <div style = {{height: '20vh', width: '20vh', borderRadius: 5,
                backgroundColor: '#ededed', margin: 5, alignItems: 'center', justifyContent: 'center', display: 'flex'}}
                onClick = {() => this.clickSquare([index, index2])}>
                <Typography variant = "h1"> {square} </Typography>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
