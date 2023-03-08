function returnchk() {
	let num = document.getElementsByName("num")[0];
	let loc = document.getElementsByName("loc")[0];
	let newNum = num.value.replace(/\s/g, "");
	if(newNum == "" || isNaN(newNum)){
		alert("숫자를 입력해주세요.")
		num.focus();
		return false;
	} 
	if(loc.value == ""){
		alert("주소를 입력해주세요.")
		loc.focus();
		return false;
	}
	return true;
}