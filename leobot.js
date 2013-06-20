//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
//  Submission for FruitBot Challenge - Scribd
//  Author: Leo Mata <ragelink@ragelink.com>
//  
//  Additional Disclaimer... my JS is primeval to say the least ;-)


function baseline_tally(){
   // x=0 type, x=1 count/type, x=2 my count, x=3 oposition counts, x=4 priority
   var tally[][];
   for (var y = 0; y < get_number_of_item_types(); y +=1){
      tally[0][y] = y;
      tally[1][y] = get_total_item_count(y);
      tally[2][y] = get_my_item_count(y);
      tally[3][y] = get_opponent_item_count(y);
      tally[4][y] = 0; // clearout priority on recalc to force reprioritization
   }
   return tally;
}

function prioritize_by_count(tally){
   for (var y = 0; y < tally[0].length; y +=1){
      //cheap math to figure out if cat is won ie half
      midpoint = get_total_item_count(y)/2;
      //increase priority on losing or matching fruit types
      if (tally[2][y] <= tally[3][y]){
         tally[5][y]++;
      }
      //completely deprioritize fruit categories in which I cannot win
      if (get_opponent_item_count(y) == get_total_item_count(y)){
         tally[4][y]=0;
      } else if (get_opponent_item_count(y) > midpoint) {
         tally[4][y]=0;
      }
      //completely deprioritize fruit categories in which I have won
      if (get_my_item_count(y) == get_total_item_count(y)){
         tally[4][y]=0;
      } else if (get_my_item_count(y) > midpoint) {
         tally[4][y]=0;
      }  
      return tally; 
   }
}

function map_fruits(board){
   var array[];
   for (var x=0; x < board.length; x+=1){
      for (var y=0; y < board[x].length; y+=1){
         if (board[x][y]>=0){
            fruit = new Object();
            fruit.type=board[x][y];
            fruit.x=x;
            fruit.y=y;
            fruit.priority=0;
            array.push(fruit);
         }
      }
   } 
   return array
}

   var board = get_board();
   var tally = update_tallies(board);
   var x = get_my_x();
   var y = get_my_y();
   var opx = get_oppponent_x();
   var opy = get_oppponent_x();

function make_move() {

   // if item is found take it ZOMGZ!!!! 
   if (board[get_my_x()][get_my_y()] > 0) {
       return TAKE;
   }

   var rand = 0;
   if (rand < 1) return NORTH;
   if (rand < 2) return SOUTH;
   if (rand < 3) return EAST;
   if (rand < 4) return WEST;
   return PASS;
}


function next_fruit(fruits){
  var board = get_board();
  var prioritized_board = [];
  
  for (var x = 0, xlen = board.length; x < len; x += 1) {
    for (var y = 0, ylen = board[x].length; y < ylen; y += 1) {
      if(board[x][y] > 0) {
        var skip = false;
        
    }
  }
}
