function drawViolationCount(){

        var d1 = [[2011, 1040], [2012, 0], [2013, 0], [2014, 0], [2015, 0]];
            var d2 = [[2011, 0], [2012, 293], [2013, 0], [2014, 0], [2015, 0]];
            var d3 = [[2011, 0], [2012, 0], [2013, 24], [2014, 0], [2015, 0]];
            var d4 = [[2011, 0], [2012, 0], [2013, 0], [2014, 2], [2015, 0]];
            var d5 = [[2011, 0], [2012, 0], [2013, 0], [2014, 0], [2015, 228]];

            var data1 = [
                    {
                        data: d1,
                        bars: {
                            show: true,
                            barWidth: 0.2,
                            align: "center",
                            fillColor: "#ABC6ED"
                        },
                        color: "#ABC6ED"
                    },
                    {
                        data: d2,
                        bars: {
                            show: true,
                            barWidth: 0.2,
                            align: "center",
                            fillColor: "#ABC6ED"
                        },
                        color: "#ABC6ED"
                    },
                    {
                        data: d3,
                        bars: {
                            show: true,
                            barWidth: 0.2,
                            align: "center",
                            fillColor: "#ABC6ED"
                        },
                        color: "#ABC6ED"
                    },
                    {
                        data: d4,
                        bars: {
                            show: true,
                            barWidth: 0.2,
                            align: "center",
                            fillColor: "#ABC6ED"
                        },
                        color: "#ABC6ED"
                    },
                    {
                        data: d5,
                        bars: {
                            show: true,
                            barWidth: 0.2,
                            align: "center",
                            fillColor: "#ABC6ED"
                        },
                        color: "#ABC6ED"
                    }

                ]

        $.plot($("#chart-violation-count"), data1, {
                xaxis: {
                    ticks: [[2011, "OS - " + 1040], [2012, "HB - " + 293], [2013, "Un.Stp - " + 24], [2014, "CntDrv - " +  2], [2015, "IDLE - " +  228]]
                }
            });
    }

    

function VehicleViolationCountController(){
	
}


VehicleViolationCountController.prototype.init = function( ) {
   
}

VehicleViolationCountController.prototype.load = function( ) {
    drawViolationCount(); 
}

