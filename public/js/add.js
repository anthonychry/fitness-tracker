$(document).ready(function () {

$("#newExercise").on("click", function(){
    const workout = {
        exerciseType: $("#exercise-type").val(),
        exerciseName: $("#exercise-name").val(),
        weight: $("#weight").val(),
        sets: $("#sets").val(),
        reps: $("#reps").val(),
        duration: $("#duration").val()
        }
    console.log(workout);

    addExercise(workout);

});

function addExercise(object) {
    $.ajax({
        type: "POST",
        url: "api/add-exercise",
        data: object
    })
    };


});