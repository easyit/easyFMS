$(document).ready(function(){
    var vpsController = new VehiclePollingStatusController();
    vpsController.load();

    var vvcController = new VehicleViolationCountController();
    vvcController.load();

    var vvsController = new VehicleViolationSummaryController();
    vvsController.load();
});