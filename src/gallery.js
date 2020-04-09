let first=document.getElementById('first');
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let head=document.getElementById('head');
function Update(previewPic) {
	if (previewPic.id=="img1") {
		this.first.style.backgroundImage="url(src/1.jpeg)";
		this.img1.classList.add('imgstyles');
		this.head.classList.add('heading');

	}
	if (previewPic.id=="img2") {
		this.first.style.backgroundImage="url(src/2.jpeg)";
		this.img2.classList.add('imgstyles');
		this.head.classList.add('heading');

	}
	if (previewPic.id=="img3") {
		this.first.style.backgroundImage="url(src/3.jpeg)";
		this.img3.classList.add('imgstyles');
		this.head.classList.add('heading');

	}
	
}
function Undo(previewPic)
{
	if (previewPic.id=="img1") {
		this.img1.classList.remove('imgstyles');
		this.head.classList.remove('heading');
		this.first.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)";
	}
	if (previewPic.id=="img2") {
		this.img2.classList.remove('imgstyles');
		this.head.classList.remove('heading');
		this.first.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)";
	}
	if (previewPic.id=="img3") {
		this.img3.classList.remove('imgstyles');
		this.head.classList.remove('heading');
		this.first.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)";
	}

}
function getTheme()
{
	let bgcolor=getRandomColor();
	let fcolor=getRandomColor();
	document.getElementById('colors').style.color=fcolor;
	document.getElementById('colors').style.backgroundImage="linear-gradient("+bgcolor+","+bgcolor+")";
}
function getAge()
{
	let split_dob=(document.getElementById('dob').value).split('/');
	if (split_dob.length==3) {
		var month = split_dob[1];
		let day = split_dob[0];
		let year = split_dob[2];
		let dob_asdate = new Date(year, month, day);
		let today = new Date();
		let mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
		let age = Math.floor((mili_dif / (1000 * 3600 * 24 * 365.25)));


document.getElementById('message').innerHTML="-->>You are"+age+" Years Old";
}
else
{
	alert("Enter The Correct Format..");
}
} 
function getDays()
{
	let split_dob=(document.getElementById('dob').value).split('/');

	if (split_dob.length==3) 
	{

	}
	else
	{
		alert("Enter The Correct Format..");
	}
	
}
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}