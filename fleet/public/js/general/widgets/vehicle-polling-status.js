function drawPollingStatus(series){
        var data = [    { label: "Moving   - ", data: 4, color: 'green' },
                { label: "Idle     - ", data: 5, color: 'yellow' },
                { label: "Stop     - ", data: 9, color: 'red' },
                { label: "Inactive - ", data: 6, color: 'gray' }
            ]

        var options = {
            series: {
                pie: {
                        //innerRadius: 0.2,
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 3/4,
                            formatter: function(label, series){
                                return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+ series.data[0][1] +'<br/>'+Math.round(series.percent)+'%</div>';
                            },
                            background: { 
                                opacity: 0.8,
                            }
                        }
                    }
                },
                legend: {
                    show: false
                }
                // grid: {
                //     hoverable: true,
                //     clickable: true
                // }
            }
            
            // and plot all we got
            $.plot($("#chart-polling-status"), data, options);

     }

function onPollingStatusDataReceived(series) {
    drawPollingStatus(series);
}


function VehiclePollingStatusController(){
	
}


VehiclePollingStatusController.prototype.init = function( ) {
   
}

VehiclePollingStatusController.prototype.load = function( ) {
    $.ajax({
            url: '/data/polling_status.json',
            method: 'GET',
            dataType: 'json',
            success: onPollingStatusDataReceived
        });
    
}

