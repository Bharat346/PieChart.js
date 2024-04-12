# PieChart.js

#By this library you can make your own customiabel pie charts. of different color section and with animation .

# This is completely made by Java-script canvas.

=================================================================================================

use -
a) first inckude library -
<script src="https://cdn.jsdelivr.net/gh/Bharat346/PieChart.js/pie.js"></script>

b) in second script tag you can write "data","colors","labels",and define a container Id in your main file and pass them to the Function ==> 
+ createPieChart(ContainerID, data, labels, colors);
+ example :
+ var data = [30, 15, 25, 10, 20,34];
  var labels = ["C", "JS", "TS", "Python", "Java","C++"];
  var colors = ["red", "orange", "blue", "purple", "green","aqua"];
  createPieChart("chartContainer", data, labels, colors);

c) Basic Html structure : 
-- <div id = "user_given_id">
......<!-- you can add more items here like heading with own styles -->
......<div class = "popup"></div>
......<div class = "colors"></div>
--</div>

d) Each label and color pair are in a div container then you can access them and change property like this : 
---.colors div {
---    /* here is your own styles */
---}

e) To change popUps you can access popup by popup class that we define in html structure.
--- .popup{
---    /* popup styles added here */ 
---}


