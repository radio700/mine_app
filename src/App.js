import { useEffect, useState } from "react";


function App(){

    /*
    * use state and Effect
    */
    const [Usrid,setUsrid] = useState("");
    const [UsrPw,setHours] = useState("");

    useEffect(() =>{
    
    },[])

    /*
    * User Function
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`id : ${Usrid} pw : ${UsrPw}`)
        if(Usrid === null || Usrid === "") {
            alert("id를 입력 해 주세요");
            return;
        }
        if(UsrPw === null || UsrPw === "") {
            alert("비밀번호를 입력 해 주세요");
            return;
        }

        if(Usrid === user.id && UsrPw === user.pw) alert("oo")
        else alert("유저가 존재하지 않거나 비밀번호가 틀렸어요")
        
    }

    var user = {
        id : "1234",
        pw : "qwer"
    }

    /*
    * HTML {javascript}
    */
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Usrid">ID | </label>
                <input
                    value={Usrid || ""}
                    placeholder="Usrid"
                    id="Usrid"
                    type="text"
                    onChange={(e) => setUsrid(e.target.value)}
                >
                </input>
                <label htmlFor="UsrPw">UsrPw</label>
                <input
                    placeholder="UsrPw"
                    type="password"
                    id="UsrPw"
                    value={UsrPw || ""}
                    onChange={(e) => setHours(e.currentTarget.value)}
                >
                </input>
                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default App;