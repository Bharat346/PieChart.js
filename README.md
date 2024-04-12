# PieChart.js

PieChart.js is a lightweight JavaScript library for creating customizable pie charts using HTML canvas.

## Usage

1. **Include the library:**  
   Add the following script tag to your HTML file to include the PieChart.js library:
   
   ```html
   <script src="https://cdn.jsdelivr.net/gh/Bharat346/PieChart.js/pie.js"></script>


2. in second script tag you can write "data","colors","labels",and define a container Id in your main file and pass them to the Function :
"createPieChart(ContainerID, data, labels, colors);"
example :
   ```html
   var data = [30, 15, 25, 10, 20,34];
   var labels = ["C", "JS", "TS", "Python", "Java","C++"];
   var colors = ["red", "orange", "blue", "purple", "green","aqua"];
   createPieChart("chartContainer", data, labels, colors);

3. Basic Html structure : 
   ```html
   <div id = "user_given_id">
      <!-- you can add more items here like heading with own styles -->
      <div class = "popup"></div>
      <div class = "colors"></div>
   </div>

4. Each label and color pair are in a div container then you can access them and change property like this : 
   ```html
   .colors div {
      /* here is your own styles */
   }

5. To change popUps you can access popup by popup class that we define in html structure.
   ```html
   .popup{
      /* popup styles added here */ 
   }

## License

PieChart.js is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



