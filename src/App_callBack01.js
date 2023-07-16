
function App(){

//콜백 promise입니다
// Promise 패턴은 비동기 작업을 순차적으로 처리한다. (중요!!)
// Promise는 new 키워드로 선언과 동시에 실행된다.
// Promise는 .then() 콜백 메서드에서 비동기 작업의 결과를 처리한다.
// Promise는 반드시 resolve 되거나 reject 되어야 한다.
// 만일 어느한쪽도 리턴되지 않으면 .then() 이 호출되지 않는다.
// 비유하자면 약속을 했으면 반드시 지켜지거나 파기되어야 한다. 어느쪽도 아니면 아직 pending 상태가 되어서 .then()이 호출 되지 않는다.


// const fetchNumber = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve(1),1000);
// })

// fetchNumber
// .then(num => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => resolve(num-1),1000)
//     });

// })
// .then(num => console.log(num))

class UserStorage{
    loginUser(id, pw){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(id === "jawsbar" && pw === "1234") resolve(id);
                else reject(new Error("not found"))
            })
        })
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            if(user === "jawsbar") resolve({name : "kim", role: "admin"})
            else reject(new Error("꺼져"))
        })
    }
}

const userStorage = new UserStorage();
const id = prompt("id");
const pw = prompt("pw");
userStorage
    .loginUser(id, pw)
    .then(userStorage.getRoles)
    .then(user => alert(`hello ${user.name} you have ${user.role}`))
    .catch(console.log("으아 조땜"))
    


    /*
    * HTML {javascript}
    */
    return(
        <div>

        </div>
    )
}

export default App;