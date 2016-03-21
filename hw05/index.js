var rep_delegates = [["California", 172], ["Texas", 155], ["Florida", 99], ["New York", 95], ["Georgia", 76], ["North Carolina", 72], ["Pennsylvania", 71], ["Illinois", 69], ["Ohio", 66], ["Michigan", 59], ["Tennessee", 58], ["Arizona", 58], ["Indiana", 57], ["Missouri", 52], ["New Jersey", 51], ["Alabama", 50], ["South Carolina", 50], ["Virginia", 49], ["Kentucky", 46], ["Louisiana", 46], ["Washington", 44], ["Oklahoma", 43], ["Massachusetts", 42], ["Wisconsin", 42], ["Mississippi", 40], ["Utah", 40], ["Arkansas", 40], ["Kansas", 40], ["Minnesota", 38], ["Maryland", 38], ["Colorado", 37], ["Nebraska", 36], ["West Virginia", 34], ["Idaho", 32], ["Iowa", 30], ["Nevada", 30], ["South Dakota", 29], ["Wyoming", 29], ["Oregon", 28], ["Connecticut", 28], ["North Dakota", 28], ["Alaska", 28], ["Montana", 27], ["New Mexico", 24], ["New Hampshire", 23], ["Puerto Rico", 23], ["Maine", 23], ["Hawaii", 19], ["District of Columbia", 19], ["Rhode Island", 19], ["Vermont", 16], ["Delaware", 16], ["Virgin Islands", 9], ["American Samoa", 9], ["Northern Marianas", 9], ["Guam", 9]]

var rep_allocated = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachussets", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "District of Columbia", "Wyoming", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio"]

var dem_allocated = [['Iowa', 44], ['New Hampshire', 24], ['Nevada', 35], ['South Carolina', 53],
 ['Alabama', 53], ['Arkansas', 32], ['Colorado', 66], ['Georgia', 102], ['Massachusetts', 91],
 ['Minnesota', 77], ['Oklahoma', 38], ['Tennessee', 67], ['Texas', 222], ['Vermont', 16], ['Virginia', 95],
 ['Kansas', 33], ['Louisiana', 51], ['Nebraska', 25], ['Maine', 25], ['Michigan', 127], ['Mississippi', 34],
 ['Florida', 198], ['Illinois', 135], ['Missouri', 64], ['North Carolina', 104], ['Ohio', 141]];

var dem_unallocated = [['Arizona', 85], ['Idaho', 27], ['Utah', 37], ['Alaska', 20],
  ['Hawaii', 34], ['Washington State', 118], ['Wisconsin', 96], ['Wyoming', 18],
  ['New York', 291], ['Connecticut', 70], ['Delaware', 31], ['Maryland', 118],
  ['Pennsylvania', 210], ['Rhode Island', 33], ['Indiana', 92], ['West Virginia', 37],
  ['Kentucky', 61], ['Oregon', 74], ['California', 546], ['Montana', 27], ['New Jersey', 142],
  ['New Mexico', 43], ['North Dakota', 23], ['South Dakota', 25], ['District of Columbia', 45]];

d3.select(".chart")
    .selectAll("div")
    .data(rep_delegates)
    .enter().append("div")
    .style("width", function(d) {
	return parseInt(d[1])*7 + "px";})
    .style("background-color", function(d) {
	if(rep_allocated.indexOf(d[0]) != -1){
	    return "crimson";
	}else{
	    return "darkred";
	}
    }).text(function(d) { return d; });

var change = function(e){
    d3.select(".chart")
    .selectAll("div")
	.transition()
	.data(dem_allocated+dem_unallocated)
	.style("width", function(d) {
	    return parseInt(d[1])*10 + "px";})
	.style("background-color", function(d){
	    if(dem_allocated.indexOf(d) != -1){
		return "000080"
	    }else{
		return "#3F00FF"
	    }
	}).text(function(d) {return d; });
}

document.getElementsByClassName("chart")[0].addEventListener('click', change)
