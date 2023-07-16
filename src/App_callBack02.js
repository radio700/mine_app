import { useState, useEffect } from "react";


function App(){

// /*
// *콜백 promise입니다
// */
// const fetchNumber = new Promise((resolve, reject) =>{
//     resolve("");
// })
// fetchNumber.then(num => {console.log(num)})//(par) == num

// /*
// * 아래위가 같다 같이 async로 promise를 자동으로 생성 해 준다
// */
// async function fetchUser() {
//     return 'jawsbareer';
// }
// const user = fetchUser();
// user.then(num => {console.log(num)})

/*
* await
*/

function delay(ms){
    return new Promise((resolve,reject) => {
        resolve(() => setTimeout(resolve,ms))
    })
}

async function getBanana(){
    await delay(5000);
    return "banana";
}

async function pickfruits(){
    const banana = await getBanana();
    return `${banana}`
}

pickfruits().then(console.log())

// const user = delay(5000);
// user.then((time) => console.log(time))




    /*
    * HTML {javascript}
    */
    return(
        <div>

        </div>
    )
}

export default App;