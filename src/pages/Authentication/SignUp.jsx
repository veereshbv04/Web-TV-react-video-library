export default function SignUp(){
    return (
        <div className="full-container">
            <h1>Web TV, Welcomes you</h1>
            <div className="container">
                <h2 className="subheading">Create your Account</h2>
                <input className="input" placeholder="Enter First Name" type="text"/>
                <input className="input" placeholder="Enter Second Name" type="text"/>
                <input className="input" placeholder="Enter Email Id" type="email"/>
                <input className="input" placeholder="Create Password" type="password"/>
                <button className="btn btn-primary"><a href="/pages/home.html">Sign Up</a></button>
                <small className="error-message green"><a href="/index.html">Already have an account ?</a></small>
                </div>
        </div>
    )
}