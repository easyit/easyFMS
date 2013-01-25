function drawViolationSummary(vsdata){
    var pVar1Title = 'Oct - 2012';
    var pVar2Title = 'Nov - 2012';
    var pVar3Title = 'Dec - 2012';

    var options = {
            series: {
                lines: { show: true },
                points: { show: true }
            },
            legend: { show: true,  noColumns:5, container: '#legendholder' },
            xaxis: { tickDecimals: 0, ticks: [0, [1, pVar1Title], [2, pVar2Title], [3, pVar3Title]] },
            yaxis: { min: 0 },
            selection: { mode: "x" }
        };

    var placeholder = $("#chart-violation-summary");
    var plot = $.plot(placeholder, vsdata, options);
} 

function onViolationSummaryDataReceived(data) {
    drawViolationSummary(data);
}

    

function VehicleViolationSummaryController(){
    
}


VehicleViolationSummaryController.prototype.init = function( ) {
   
}

VehicleViolationSummaryController.prototype.load = function( ) {
    $.ajax({
            url: '/data/violation_summary.json',
            method: 'GET',
            dataType: 'json',
            success: onViolationSummaryDataReceived
        });
    
}