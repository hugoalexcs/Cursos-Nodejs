function carCalcule(origin, destination){}
function busCalcule(origin, destination){}
function subwayCalcule(origin, destination){}
function trainCalcule(origin, destination){}


module.exports["car"] = carCalcule;
module.exports["bus"] = busCalcule;
module.exports["subway"] = subwayCalcule;
module.exports["train"] = trainCalcule;


/**
 function getTime( origin, destination, type ){
    require("veichulestrategy")[type](origin,destination)
}
 */