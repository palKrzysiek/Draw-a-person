
const personElement = $(`.personElement`).val()

$(function() {
  $('#numerInput').on('change',function() {
	let taken = this.value;
	const FirstDiv =$('form > div:first-of-type')
	const SecondDiv = $('form > div:nth-of-type(2)')
	const ThirdDiv = $('form > div:nth-of-type(3)')
	const FourthDiv = $('form > div:nth-of-type(4)')
	const FifthDiv = $('form > div:nth-of-type(5)')
	switch(taken){
		case "5":
			$('div:hidden').removeAttr("hidden");
			break;
		case "4":
			FifthDiv.attr("hidden", "true");
			FourthDiv.removeAttr("hidden");
			ThirdDiv.removeAttr("hidden");
			SecondDiv.removeAttr("hidden");
			FirstDiv.removeAttr("hidden");
			break;
		case "3":
			FifthDiv.attr("hidden", "true");
			FourthDiv.attr("hidden", "true");
			ThirdDiv.removeAttr("hidden");
			SecondDiv.removeAttr("hidden");
			FirstDiv.removeAttr("hidden");
			break;
		case "2":
			FifthDiv.attr("hidden", "true");
			FourthDiv.attr("hidden", "true");
			ThirdDiv.attr("hidden", "true");
			SecondDiv.removeAttr("hidden");
			FirstDiv.removeAttr("hidden");
			break;
		case "1":
			FifthDiv.attr("hidden", "true");
			FourthDiv.attr("hidden", "true");
			ThirdDiv.attr("hidden", "true");
			SecondDiv.attr("hidden", "true");
			FirstDiv.removeAttr("hidden");
			break;
		case"0": 
			
			$('form > div').attr("hidden", "true");
	 }
	

	  
  });
});
let tab = [];
$(function() {
	$('form > div:first-of-type .personElement').change(function() {
		//console.log($(this).val())
		let chosenPerson1 =$(this).val();
		tab[0] = chosenPerson1;
		
				
	 });
});

$(function() {
	$('form > div:nth-of-type(2) .personElement').change(function() {
		//console.log($(this).val())
		tab[1] =$(this).val();
		
			
	 });
});
$(function() {
	$('form > div:nth-of-type(3) .personElement').change(function() {
		//console.log($(this).val())
		let chosenPerson3 =$(this).val();
		tab[2] = chosenPerson3;
		
		
	 });
});
$(function() {
	$('form > div:nth-of-type(4) .personElement').change(function() {
		//console.log($(this).val())
		let chosenPerson4 =$(this).val();
		tab[3] = chosenPerson4;
		
			
	 });
});
$(function() {
	$('form > div:nth-of-type(5) .personElement').change(function() {
		//console.log($(this).val())
		let chosenPerson5 =$(this).val();
		tab[4] = chosenPerson5;
		
		
	 });
});

	$( "form" ).submit(function(e) {
				e.preventDefault();
				var item = tab[Math.floor(Math.random()*(tab.length))];
				switch(item){
						
					case "1": $('.result').html("Wylosowano Adama!");
						break;
					case "2": $('.result').html("Wylosowano Kamila!");
						break;
					case "3": $('.result').html("Wylosowano Michała!");
						break;
					case "4": $('.result').html("Wylosowano Renatę!");
						break;
					case "5": $('.result').html("Wylosowano Kasię!");
						break;
						
				}
				
				
			});		