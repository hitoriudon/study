/* js -> html를 처음으로 함. 원래는 querySelector로 html 태그를 js에 가져와서 속성을 이용해 innerText든 className이든 바꿨지.
근데 처음으로 js->html을 하는 것임. html에 img src=""를 만드는! 근데 왜 js에 먼저 선언해야 하냐? 
img가 여러개기 때문에, 그걸 랜덤하게 선택할 거니까 Js에 구현한 뒤 html에 반영해야겠지? html에 단순히 img src로 하는 건.. 동적이지 못하니까. */
const images = ["BEIGE.JPG", "REBELTOREBEL.JPG"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); // js->html
bgImage.src = `img/${chosenImage}`;  // js->html
document.body.appendChild(bgImage); // body에 html 추가하는 기능