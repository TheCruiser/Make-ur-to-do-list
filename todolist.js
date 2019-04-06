var todos=["Wake Up Early"];
var input = prompt("What Would you like to do?");

while(input!=="quit"){
	if(input==="list")
{
	listTodos();
}
else if(input==="new"){
	var newtodo=prompt("Enter new todo");
	todos.push(newtodo);
	console.log("Added todo");
	alert("Added todo");
}
else if(input==="delete"){
	var index=prompt("Enter Index of todo to be deleted");
	todos.splice(index,1);
	console.log("Deleted Todo");
	alert("Deleted Todo");
}
input = prompt("What Would you like to do?");
}
alert("OK... You're Quitting the app");
console.log("OK... You're Quitting the app");
 function listTodos(){
 	console.log("***********");
 	// alert("***********");
 	todos.forEach(function(todo, index){
		console.log(index+": "+todo);
		alert(index+": "+todo);
	});
	console.log("***********");
	// alert("********");
	// console.log(todos);
	// alert(todos);
 }