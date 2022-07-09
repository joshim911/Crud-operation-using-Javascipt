let course_chapter = document.getElementById('course_chapter');
let add_chapter = document.getElementById('add_chapter');
let item = 0;
add_chapter.onclick = () => {
	add_another_chapter();
}
function add_another_chapter(){
	item += 1;
	let div = document.createElement('div');
	div.setAttribute("class", "input-group");

	let input = document.createElement('input');
	input.setAttribute("type","text");
	input.setAttribute("name","chepter");
	input.setAttribute("class","form-control my-2 course-chepter");
	input.setAttribute("placeholder","Please Write The Chpeter Name");

	let delete_text = document.createElement('span');
	delete_text.setAttribute("id","chapter-no-"+item);
	delete_text.setAttribute("class","text-danger m-2 pl-1 chapter-item-remove");
	delete_text.setAttribute("onclick","delete_chapter_input("+item+")");
	delete_text.appendChild( document.createTextNode('Delete') );

	div.appendChild(input);
	div.appendChild(delete_text)
	course_chapter.appendChild(div);
}

function delete_chapter_input(x){
	let child = document.getElementById("chapter-no-"+x)
	course_chapter.removeChild(child.parentElement)
}

save_chapter.onclick = () => {

	let chapters = document.getElementsByClassName('course-chepter');
	for (let i = 0; i < chapters.length; i++) {
			console.log(chapters[i].value) 
		}
		
	}