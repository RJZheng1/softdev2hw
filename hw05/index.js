var rep_allocated = [['Iowa', 23], ['New Hampshire', 20], ['South Carolina', 50], ['Nevada', 28], ['Alabama', 50], ['Alaska', 28], ['Arkansas', 40], ['Georgia', 76], ['Massachusetts', 42], ['Minnesota', 38], ['Oklahoma', 40], ['Tennessee', 55], ['Texas', 155], ['Vermont', 16], ['Virginia', 46], ['Kansas', 38], ['Kentucky', 46], ['Louisiana', 41], ['Maine', 23], ['Hawaii', 19], ['Idaho', 32], ['Michigan', 59], ['Mississippi', 37], ['District of Columbia', 19], ['Wyoming', 11], ['Florida', 99], ['Illinois', 67], ['Missouri', 40], ['North Carolina', 71], ['Northern Mariana Islands', 9], ['Ohio', 66], ['Arizona', 58], ['Utah', 40]]

var rep_unallocated = [['Wisconsin', 42], ['Colorado', 37], ['New York', 95], ['Connecticut', 28], ['Delaware', 16], ['Maryland', 38], ['Pennsylvania', 71], ['Rhode Island', 19], ['Indiana', 57], ['Nebraska', 36], ['West Virginia', 34], ['Oregon', 28], ['Washington', 44], ['California', 172], ['Montana', 27], ['New Jersey', 51], ['New Mexico', 24], ['South Dakota', 29]]

var dem_allocated = [['Iowa', 44], ['New Hampshire', 24], ['Nevada', 35], ['South Carolina', 53],
		     ['Alabama', 53], ['Arkansas', 32], ['Colorado', 66], ['Georgia', 102], ['Massachusetts', 91],
		     ['Minnesota', 77], ['Oklahoma', 38], ['Tennessee', 67], ['Texas', 222], ['Vermont', 16], ['Virginia', 95],
		     ['Kansas', 33], ['Louisiana', 51], ['Nebraska', 25], ['Maine', 25], ['Michigan', 127], ['Mississippi', 34],
		     ['Florida', 198], ['Illinois', 135], ['Missouri', 64], ['North Carolina', 104], ['Ohio', 141]];

var dem_unallocated = [['Arizona', 85], ['Idaho', 27], ['Utah', 37], ['Alaska', 20],
		       ['Hawaii', 34], ['Washington', 118], ['Wisconsin', 96], ['Wyoming', 18],
		       ['New York', 291], ['Connecticut', 70], ['Delaware', 31], ['Maryland', 118],
		       ['Pennsylvania', 210], ['Rhode Island', 33], ['Indiana', 92], ['West Virginia', 37],
		       ['Kentucky', 61], ['Oregon', 74], ['California', 546], ['Montana', 27], ['New Jersey', 142],
		       ['New Mexico', 43], ['North Dakota', 23], ['South Dakota', 25], ['District of Columbia', 45]];

var rep = true

d3.select(".chart")
    .selectAll("div")
    .data(rep_allocated.concat(rep_unallocated))
    .enter().append("div")
    .style("width", function(d) {
	return parseInt(d[1])*10 + "px";})
    .style("background-color", function(d) {
	if(rep_unallocated.indexOf(d) != -1){
	    return "crimson";
	}else{
	    return "darkred";
	}
    }).text(function(d) { return d; });

var change = function(e){
    if(rep == true){
	d3.select(".chart")
	    .selectAll("div")
	    .data(dem_allocated.concat(dem_unallocated))
	    .transition()
	    .style("width", function(d) {
		return parseInt(d[1])*10 + "px";})
	    .style("background-color", function(d){
		if(dem_unallocated.indexOf(d) != -1){
		    return "blue"
		}else{
		    return "aqua"
		}
	    }).text(function(d) {return d; });

	d3.selectAll(".box")
	    .data(["blue", "aqua"])
	    .transition()
	    .style("background-color", function(d) { return d; });
	
	rep = false
    }else{
	d3.select(".chart")
	    .selectAll("div")
	    .data(rep_allocated.concat(rep_unallocated))
	    .transition()
	    .style("width", function(d) {
		return parseInt(d[1])*10 + "px";})
	    .style("background-color", function(d) {
		if(rep_unallocated.indexOf(d) != -1){
		    return "crimson";
		}else{
		    return "darkred";
		}
	    }).text(function(d) { return d; });

	d3.selectAll(".box")
	    .data(["crimson", "darkred"])
	    .transition()
	    .style("background-color", function(d) { return d; });
	
	rep = true
    }
}

document.getElementsByClassName("chart")[0].addEventListener('click', change)
