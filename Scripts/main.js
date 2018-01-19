//Choose how many people

const divTable = new Array; 
divTable[0]= original;
let i=1

function cloning() {
	
	const original = $('#original');
	const clone = original.clone();
	clone.attr("id","copy"+i);
	divTable[i] = clone;
	clone.appendTo("form");
	i++;
	};

$(function() {
  $('#numerInput').on('change',function() {
	let taken = this.value;
	switch(taken){
		case "5":
			removed = personTable.splice(0,5);
			while(divTable.length < 5){
			cloning();
		}
			break;
		case "4":
			removed = personTable.splice(0,5);
			while(divTable.length < 4)
		{
			cloning();
			
		};
			if(divTable.length>3){
			i=4;
			$('#copy4').remove();
			removed = divTable.splice(4,1);
			}
			break;
		case "3":
			removed = personTable.splice(0,5);
			while(divTable.length < 3)
		{
			cloning();
		};
			if(divTable.length>2){
			i=3;
			$('#copy4').remove();
			$('#copy3').remove();
			removed = divTable.splice(3,2);
			}
			break;
		case "2":
			removed = personTable.splice(0,5);
			while(divTable.length < 2)
		{
			cloning();
			
		};
			if(divTable.length>1){
			i=2;
			$('#copy4').remove();
			$('#copy3').remove();
			$('#copy2').remove();
			removed = divTable.splice(2,3);
			}
			break;
		case "1":
			removed = personTable.splice(0,5);
			while(divTable.length < 1)
		{
			cloning();
			
		};
			if(divTable.length>0){
			i=1;
			$('#copy4').remove();
			$('#copy3').remove();
			$('#copy2').remove();
			$('#copy1').remove();
			removed = divTable.splice(1,4);
			}
			
     		break; 
			
	 }  
  });
});


//Choose person



//random person
const personTable = new Array


function addToArray(){
			if($('#original input').val()){personTable[0]=$('#original input').val();}
			if($('#copy1 input').val()){personTable[1]=$('#copy1 input').val();}
			if($('#copy2 input').val()){personTable[2]=$('#copy2 input').val();}
			if($('#copy3 input').val()){personTable[3]=$('#copy3 input').val();}
			if($('#copy4 input').val()){personTable[4]=$('#copy4 input').val();}
			}
function roll(){
		const randomPerson = personTable[Math.floor(Math.random()*(personTable.length))];
		$('.result').html(randomPerson);
		}
 $("form").submit(function(e) {
		e.preventDefault();
	 	addToArray();
	 	roll();
		})


//losowanie z tablicy tab
//


