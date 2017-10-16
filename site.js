$(".rock").on('click',function () { 
	var result = compare('rock',computerchoice());
	$(".decision").html(result);
	});

$(".paper").on('click',function(){
	var result = compare('paper',computerchoice());
	$(".decision").html(result);
	});

$(".scissors").on('click',function (){
	var result = compare("scissors",computerchoice());	
	$(".decision").html(result);
	});

var compare = function (me,opponent){
	if(me == 'rock'){

	if (opponent == 'rock'){
		return "A tie, what is this? Soccer? Fuggetaboutit";
		} else if (opponent == 'paper'){
		return "Paper covers Rock but no one beats The Rock, jabroni";
		} else if (opponent == "scissors"){
		return "The Rock smashes scissors with The People's Elbow";
		};

		else if (me == 'paper'){

		if (opponent == 'paper'){
		return "A tie, what is this? Soccer? Fuggetaboutit";
		}else if (opponent == 'rock'){
			return "Paper covers Rock but no one beats The Rock, jabroni";
		} else if (opponent == 'scissors'){
			return "Scissors cut paper. YOU LOSE!!!";
		};

	else if (me == 'scissors'){

		if (opponent == 'rock'){
			return "The Rock lays the smackdown on scissors, jabroni";
		} else if (opponent == 'paper') {
			return "Scissors cut paper. YOU WIN!!";
		} else if (opponent == 'scissors'){
			return "A tie, what is this? Soccer? Fuggetaboutit";
		}
		else {
			return "That doesn't make sense";
		}
	};

var computerchoice = function (){
	var random = Math.random();
	if (random < 0.333) {
		return 'rock';
	} else if(random < 0.67777){
		return 'paper';
	} else {
		return 'scissors';
	}
};






