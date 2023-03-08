function chk() {
	if(!frm.title.value){
		alert("제목을 입력해주세요.")
		frm.title.focus();
		return false;
	}
	
	if(!frm.write.value){
		alert("작성자를 입력해주세요.")
		frm.write.focus();
		return false;
	}
	 
	if(!frm.content.value){
		alert("내용을 입력해주세요.")
		frm.content.focus();
		return false;
	} 
	return true;
}