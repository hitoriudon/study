import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("Bye~");
  }
  function hiFn() {
    console.log("Created :)");
    return byFn; // cleanupfunction
  }
  useEffect(hiFn, []);
  return <h1>Hello~</h1>;
}
// useEffect 첫번째 파라미터에 return이 있다면, cleanup function?
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;
/*
// useEffect 함수의 첫번째 인자는 딱 한번만 실행하고 싶은 코드. 두번째는 ???
// 글자를 타이핑할때마다 API를 새로 불러온다고 생각하면.. 완전 별로네 그게 useEffect를 쓰는 이유 아닐까
const [counter, setValue] = useState(0);
const [keyword, setKeyword] = useState("");
const onClick = () => setValue((prev) => prev + 1);
const onChange = (event) => setKeyword(event.target.value);
console.log("i run all the time");
useEffect(() => {
  console.log("Call the Api...");
}, []);
useEffect(() => {
  // lambda function
  console.log("Search For", keyword);
}, [keyword]);
return (
  <div>
    <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."
    ></input>
    <h1>{counter}</h1>
    <button onClick={onClick}>click me!</button>
  </div>
);

*/
