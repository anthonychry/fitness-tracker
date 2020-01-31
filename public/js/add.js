$(document).ready(function () {

const workout =
$("#exercise-type").val();
$("#exercise-name").val();
$("#weight").val();
$("#sets").val();
$("#reps").val();
$("#duration").val();



$.ajax({
    type: "POST",
    url: "api/add-exercise",
    

})

});