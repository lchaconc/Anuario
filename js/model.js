function Model () {
    
}

Model.prototype.dataSet="";

Model.prototype.loadJson = function (mCallBack) { 
    $.getJSON("./data/estudiantes.json", 
        function (data, textStatus, jqXHR) {
            Model.prototype.dataSet=data;
            console.log( Model.prototype.dataSet);
            mCallBack(data);            
        }
    );
 }

 Model.prototype.getDataSet = function () {
     return  Model.prototype.dataSet;
   }

Model.prototype.getRecord = function (i) {
    return  Model.prototype.dataSet[i];
}

