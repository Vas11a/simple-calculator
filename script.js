
const pole = document.querySelector('.textpole');

let signut = '';
let firsnum = '';
let secnum = '';
let ans = '';
let helper = true;


function clicker (num) {
	helper = false;
	
	let resNum = pole.innerHTML = pole.innerHTML += num;
	if (pole.innerHTML == '..') {
		pole.innerHTML = '.'
	}	
	if (signut != '') {
		helper = true;
		secnum += num;
	}
}


function sign (sig) {
	if (pole.innerHTML == '') {
		helper = true;
	}
	if (helper == false) {
		helper = true;
		firsnum = pole.innerHTML;
		pole.innerHTML = pole.innerHTML += sig;
		signut = sig;
	}
	
}

function delet (param) {
	pole.innerHTML = param;
	signut = '';
	firsnum = '';
	secnum = '';
}



function answer () {
	helper = false;
	if (signut == '+') {
		ans = +firsnum + +secnum
	} else if (signut == '-') {
		ans = firsnum - secnum
	} else if (signut == '*') {
		ans = firsnum * secnum
	} else if (signut == ' / '){
		ans = firsnum / secnum
	} else {
		
	}
	
	pole.innerHTML = ans;
	delet(ans);
	ans = ''
	
}

