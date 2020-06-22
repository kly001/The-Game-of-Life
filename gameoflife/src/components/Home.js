import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>

        <h1> THE GAME OF LIFE</h1>

        <h2>The Game</h2>
        <p> The Game of Life is a 'cellular automaton' invented by mathematician John Conway.
                    It consists of a collection of cells which, based on a few mathematical rules, 
                    can live, die or multiply. Depending on the initial conditions, the cells form
                     various patterns throughout the course of the game.
        </p>        
       
       <h2>The Rules*</h2>
       <p> The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, 
         each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). 
         Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, 
         or diagonally adjacent. At each step in time, the following transitions occur:

              Any live cell with fewer than two live neighbours dies, as if by underpopulation.
              Any live cell with two or three live neighbours lives on to the next generation.
              Any live cell with more than three live neighbours dies, as if by overpopulation.
              Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
              These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

              Any live cell with two or three live neighbours survives.
              Any dead cell with three live neighbours becomes a live cell.
              All other live cells die in the next generation. Similarly, all other dead cells stay dead.
              The initial pattern constitutes the seed of the system. The first generation is created by applying 
                    the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, 
                    and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure 
                    function of the preceding one. The rules continue to be applied repeatedly to create further generations.
      </p>
      <p> *Source: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life</p>

      <h2>Example Patterns</h2>
      <p> Using the provided game board(s) and rules as outline above, the students can investigate the 
            evolution of the simplest patterns. They should verify that any single living cell or any pair 
            of living cells will die during the next iteration.
        Some possible triomino patterns (and their evolution) to check:

              Some example still lifes:

              Square : 
              Boat : 
              Loaf : 
              Ship : 
              The following pattern is called a "glider." The students should follow its evolution on the 
              game board to see that the pattern repeats every 4 generations, but translated up and to the 
              left one square. A glider will keep on moving forever across the plane.

              Another pattern similar to the glider is called the "lightweight space ship." It too slowly 
              and steadily moves across the grid.

              Early on (without the use of computers), Conway found that the F-pentomino (or R-pentomino) did not 
              evolve into a stable pattern after a few iterations. In fact, it doesn't stabilize until generation 1103.


              The F-pentomino stabilizes (meaning future iterations are easy to predict) after 1,103 iterations. 
              The class of patterns which start off small but take a very long time to become periodic and predictable 
              are called Methuselahs. The students should use the computer programs to view the evolution of this
              pattern and see how/where it becomes stable. The "acorn" is another example of a Methuselah that becomes
              predictable only after 5206 generations.


              Alan Hensel compiled a fairly large list of other common patterns and names for them, 
              available at radicaleye.com/lifepage/picgloss/picgloss.html.
</p>
                    
      </div>
    )
  }
}

export default Home
