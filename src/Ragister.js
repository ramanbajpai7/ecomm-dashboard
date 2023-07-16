import React,{useState} from 'react'
function Ragister()
{
    const [name,setName]=useState("");
    const [Password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    function signUp()
    {
        let item={name,Password,email}
        console.warm(item)
    }
    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>User Ragistration</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control"/>
            <br/>
            <input type="text" value={Password} onChange={(e)=>setPassword(e.target.value)} class="form-control"/>
            <br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}class="form-control"/>
            <br/>
<button onClick={signUp} className="btn btn-primary">Ragister</button>
        </div>
    )
}
export default Ragister