
function my_calc() {

	var but_add = document.getElementById("add"),
		but_sub = document.getElementById("subtr"),
		but_mul = document.getElementById("mult"),
		but_div = document.getElementById("div"),
		but_eq = document.getElementById("equals"),
		but_clear = document.getElementById("clear"),
		field = document.getElementById("field"),
		oper, first_num, second_num, result;

	var isOperationSelected = false;
		
	// asign events for numbers buttons
	for (var i=0; i<10; i++) {
		var numBut = document.getElementById("num"+i);
		numBut.onclick = insertNum;
	};

	but_eq.onclick = eq;
	but_add.onclick = math_act;
	but_sub.onclick = math_act;
	but_mul.onclick = math_act;
	but_div.onclick = math_act;
	but_clear.onclick = clear_field;

	function insertNum() {
		if (isOperationSelected) {
			clear_field();
			isOperationSelected = false;
		}
		field.value = field.value + this.value;
	};

	function clear_field() {
		field.value = "";
	};

	function math_act() {
		first_num = field.value;
		oper = this.value;
		isOperationSelected = true;
	};

	function eq() {
		second_num = field.value;
		counter();
	    field.value = result;
	    if (result == Infinity) {
	    	clear_field();
	    };
	};

	function counter(a, b, c) {
		a = first_num;
		b = second_num;
		c = oper;
		switch (oper) {
	    	case "+": 
	    	result = parseInt(first_num) + parseInt(second_num);
	    	break;
	    	case "-": 
	    	result = parseInt(first_num) - parseInt(second_num);
	    	break;
	    	case "*": 
	    	result = parseInt(first_num) * parseInt(second_num);
	    	break;
	    	case "/": 
		    	if (parseInt(second_num) == 0) {
		    		alert ("На ноль не делим!");
		    	}
	    	result = parseInt(first_num) / parseInt(second_num);
	    	break;
	    };
	    return result;
	};

};

setTimeout(my_calc, 1000);
