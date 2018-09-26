function Model () {

}

Model.prototype.dataStudents="";
Model.prototype.dataTeachers="";

Model.prototype.loadJson = function (path, mCallBack, act) {
    $.getJSON(  path,
        function (data, textStatus, jqXHR) {
            switch (act) {
                case "s":
                Model.prototype.dataStudents=data;
                //console.log( Model.prototype.dataStudents);
                break;
                case "t":
                Model.prototype.dataTeachers=data;
                //console.log( Model.prototype.dataTeachers);
                break;

                default:
                    break;
            }

            mCallBack(data);
        }
    );
 }

 Model.prototype.getStudents = function () {
     return  Model.prototype.dataStudents;
   }

Model.prototype.getRecordStudents = function (i) {
    return  Model.prototype.dataStudents[i];
}

Model.prototype.getRecordTeachers = function (i) {
    return  Model.prototype.dataTeachers[i];
}
