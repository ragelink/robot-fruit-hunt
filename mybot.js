// mybot.js submission by Leo Mata 

var moves = [NORTH, SOUTH, EAST, WEST];

function new_game() { }

function make_move() {
   var board = get_board();
   var fruits = tally();
   var tmp_coords = [0,0]
   var closest = 1000;
   var priorities = [];

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0) { return TAKE; }

   //navigate board and pick best chance to win
   for (var i = 0; i < board.length; i+=1){
      for (var j = 0; j < board[i].length; j+=1){
         var num = board[i][j];
         //validate if fruit in spot
         if (num > 0) {
            // category not lost proceed to engage
            if (fruits[num][4] == 0) {
               //calculate linear distance
               var dist_from_me = distance(i,j,get_my_x(),get_my_y());
               if (dist_from_me < closest) {
                  closest = dist_from_me;
                  closest_coords = [i,j];
               }
             }
         }
      }
   }
   
   var tmp_abs_x = Math.abs(closest_coords[0] - get_my_x());
   var tmp_abs_y = Math.abs(closest_coords[1] - get_my_y());
   if (tmp_abs_x > tmp_abs_y){
      if ((closest_coords[0]>get_my_x()) && get_my_x()<WIDTH) { return EAST;}
      if ((closest_coords[0]<get_my_x()) && get_my_x()>0) { return WEST;}
   } else {
      if ((closest_coords[1]>get_my_y()) && get_my_y()<HEIGHT) { return SOUTH;}
      if ((closest_coords[1]<get_my_y()) && get_my_y()>0) { return NORTH;}
   }

   return PASS;
}

function distance(x1,y1,x2,y2){
   //calculate distance between two points
   var dist = Math.abs(y2-y1) + Math.abs(x2-x1)
   return dist   
}

function tally(){
   // 0-type, 1-total/type, 2-mePicked/type, 3-oppPicked/type, 4 lostcat?
      var fruits = [];
      var lostcat = false; 
   for (var x = 1; x < get_number_of_item_types()+1; x +=1){
      fruits[x] = [];
      fruits[x].push(x);
      fruits[x].push(get_total_item_count(x));
      fruits[x].push(get_my_item_count(x));
      fruits[x].push(get_opponent_item_count(x));
      var midpoint = get_total_item_count(x)/2;
      if (fruits[x][3] == fruits[x][1]) { lostcat = true; }
      if (fruits[x][3] > midpoint) { lostcat = true; }
      if (lostcat) { fruits[x].push(1); } else { fruits[x].push(0);} 
   }
   return fruits;
}


