export default function Login(){
    return (
        <div className="full-container">
            <h1>Web TV</h1>
            <div className="container">
                 <h2 className="subheading">Login In</h2>
                <input className="input" placeholder="Enter Email Id" type="email"/>
                <input className="input" placeholder="Enter Password" type="password"/>
                <small className="error-message green"><a>Forget password ?</a></small>
                <button className="btn btn-primary"><a href="/pages/home.html">Sign In</a></button>
            </div>
        </div>
    )
}