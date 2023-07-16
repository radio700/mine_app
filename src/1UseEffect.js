import { useState, useEffect } from "react";

function App() {
  /*
  * use state and Effect
  */
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState("");
  const [showing,SetShowing] = useState(false);//cleanUp 강의

  //useEffect (par1: 실행부, par2 특정값 update때만)

  //[] 빈 배열 == 지정 없으니까 onload 시만
  useEffect(() => {
    console.log("한번만 실행");
  }, []);

  // //counter 값이 변경 될 떄만 console.log(); 를 실행
  // useEffect(() => {
  //   console.log(`counter is changed ${counter}`);
  // },[counter])

  // //[keyword] keyword 업데이트 될 때만
  // useEffect(() => {
  //   if(keyword !== "" && keyword.length > 5){
  //     console.log(`keyword is not empty && ${keyword}>5`);//5이상이면 실행
  //   }
  // },[keyword])

  //같이 쓸 수 있다

  useEffect(() => {
    console.log(`I when key word & counter change`);
  },[keyword,counter])


  

  /*
  * User Function
  */

  const onChange = (e) => {
    setKeyword(e.target.value);
  }

  const onClick =() => {
    setValue((current) => current+1);
  }
  console.log("i run all the time");


  const onClickbottomBtn = () => {
    SetShowing((current) => !current)
  }


  function Hello(){
    
    const byeFn = () =>{
      console.log("bye");
    }

    const hiFn = () => {
      console.log("created");
      return byeFn;//componant가 파괴 될 때 return 함수
    }
    
    useEffect(hiFn,[]);


    //짧게 쓰면 이렇게도 쓴다(cleanup)
    // useEffect(() =>{
    //   console.log("hi~");
    //   return () => console.log("bye~");
    // })


    return(
      <h1>qwedf</h1>
    )
  }



  return (
    <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here.."
        ></input>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>

        {showing? <Hello/> : null}
        <button onClick={onClickbottomBtn}>asdfasdf</button>
    </div>
  );
}

export default App;
