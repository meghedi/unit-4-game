let randomNumber = generateRandomNumber(19,120);
let wins = 0;
let losses = 0;
let totalScore = 0;

$(document).ready(function () {

    $('.randomNumber').text(randomNumber);
    $('.totalScore').text(totalScore);

    $('#crystals img').each(function () {
        let randomCrystalNum = generateRandomNumber(1, 12);
        $(this).attr('data-number', randomCrystalNum);
    });

});

function reset(){
    randomNumber = generateRandomNumber(19,120);
    totalScore = 0;
    $('.randomNumber').text(randomNumber);
    $('#crystals img').each(function () {
        let randomCrystalNum = generateRandomNumber(1, 12);
        $(this).data('number', randomCrystalNum);
        $(this).attr('data-number', randomCrystalNum);

    });
}


function generateRandomNumber(min, max){
     return Math.floor(Math.random() * max) + min;
}

$('#crystals img').on('click', function () {
    debugger;
    totalScore = $(this).data('number') + totalScore;
    if(totalScore === randomNumber){
        wins++;
        $('.wins').text(wins);
        reset();
    }else if(totalScore > randomNumber){
        losses++;    
        $('.losses').text(losses);
        reset();
    }

    $('.totalScore').text(totalScore);
});