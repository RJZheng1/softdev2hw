data = [["California", 172], ["Texas", 155], ["Florida", 99], ["New York", 95], ["Georgia", 76], ["North Carolina", 72], ["Pennsylvania", 71], ["Illinois", 69], ["Ohio", 66], ["Michigan", 59], ["Tennessee", 58], ["Arizona", 58], ["Indiana", 57], ["Missouri", 52], ["New Jersey", 51], ["Alabama", 50], ["South Carolina", 50], ["Virginia", 49], ["Kentucky", 46], ["Louisiana", 46], ["Washington", 44], ["Oklahoma", 43], ["Massachusetts", 42], ["Wisconsin", 42], ["Mississippi", 40], ["Utah", 40], ["Arkansas", 40], ["Kansas", 40], ["Minnesota", 38], ["Maryland", 38], ["Colorado", 37], ["Nebraska", 36], ["West Virginia", 34], ["Idaho", 32], ["Iowa", 30], ["Nevada", 30], ["South Dakota", 29], ["Wyoming", 29], ["Oregon", 28], ["Connecticut", 28], ["North Dakota", 28], ["Alaska", 28], ["Montana", 27], ["New Mexico", 24], ["New Hampshire", 23], ["Puerto Rico", 23], ["Maine", 23], ["Hawaii", 19], ["District of Columbia", 19], ["Rhode Island", 19], ["Vermont", 16], ["Delaware", 16], ["Virgin Islands", 9], ["American Samoa", 9], ["Northern Marianas", 9], ["Guam", 9]]

alloted = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachussets", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "District of Columbia", "Wyoming", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio"]

var f = d3.scale.linear()
    .domain([0, d3.max(data,
		       function(d){
			   return d[1]
		       })])
    .range([0, 172])

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) {
	return f(d[1])*9 + "px";})
    .style("background-color", function(d) {
	if(alloted.indexOf(d[0]) != -1){
	    return "crimson";
	}else{
	    return "darkred";
	}
    }).text(function(d) { return d; });
