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

function new_game() {
}

function update_tallies(){
   // x=0 type, x=1 count/type, x=2 my count, x=3 oposition counts, x=4 priority
   var tally[][];
   for ( var y = 0; y < get_number_of_item_types(); y +=1){
      tally[0][y] = y;
      tally[1][y] = get_total_item_count(y);
      tally[2][y] = get_my_item_count(y);
      tally[3][y] = get_opponent_item_count(y);
      tally[4][y] = 0; // clearout priority on recalc to force reprioritization
   }
   return tally;
}

function calculate_priorities(tally){
   for ( var y = 0; y < get_number_of_item_types(); y +=1){
      //cheap math to figure out if cat is won ie half
      midpoint = get_total_item_count(y) / 2;

      //deprioritize fruit categories in which I cannot win
      if (get_opponent_item_count(y) == get_total_item_count(y)){
         tally[4][y]=0;
      } else if (get_opponent_item_count(y) > midpoint) {
         tally[4][y]=0;
      }

      // deprioritize fruit categories in which I have won
      if (get_my_item_count(y) == get_total_item_count(y)){
         tally[4][y]=0;
      } else if (get_my_item_count(y) > midpoint) {
         tally[4][y]=0;
      }  
 
     
      return tally; 
   }
}

function make_move() {
   var board = get_board();
   var tally = update_tallies(board);

   var x = get_my_x();
   var y = get_my_y();
   var opx = get_oppponent_x();
   var opy = get_oppponent_x();



   // if item is found take it ZOMGZ!!!! 
   if (board[get_my_x()][get_my_y()] > 0) {
       return TAKE;
   }

   // oh where will thy header be, choseth wisely
   var rand = Math.random() * 4;
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

// Return the number of different fruit types. Each fruit type might
// be on the board multiple times (use get_total_item_count(type))
// to query how often). Your goal is to have the most fruit as
// many categories as possible.
function get_number_of_item_types()

// Returns the number of fruits you or your opponent have.
// E.g. if get_my_item_count(1) returns 3, you have 3 pieces
// of the fruit 1.
function get_my_item_count(type)
function get_opponent_item_count(type)

// Returns the total number of fruits available for a given
// category. E.g. if get_total_item_count(2) returns 5,
// a total of 5 fruits of type 2 exists on the board and
// the players inventories.
function get_total_item_count(type)

