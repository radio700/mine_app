import { useEffect, useState } from "react";
import Button from "./components/Button";


function App(){

    /*
    * use state and Effect
    */
    const [Usrid,setUsrid] = useState("");
    const [UsrPw,setHours] = useState("");
    const [success,setSuccess] = useState(false);

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

        if(Usrid === user.id && UsrPw === user.pw){
            setSuccess(true);
        }
        else{
            alert("유저가 존재하지 않거나 비밀번호가 틀렸어요");
            setSuccess(false);
        }
        
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
            
            {success === true ? "on" : 
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
                <Button
                    type="submit"
                    text="제출"//파라미터 던진거 잘 볼 것
                >
                </Button>

            </form>
            }

            

        </div>
    )
}

export default App;