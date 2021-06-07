import "./login.css";
import { Button } from '@material-ui/core';
 function Login() {
  return (
      <>
    <div className="Left">
          <div className="login">LOGIN</div>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail </label><br/>
              <input type="text"  placeholder="E-mail"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label><br/>
              <input type="text"  placeholder="Password"/>
              <a  href="/" >Forgot Password</a>
            </div>
            <div className="btn btn-primary">
                <Button variant="outlined" type="submit"  color="primary" style={{ minWidth: '410px', background:"#F7D832" ,font:"Montserrat" ,
            cursor: "pointer"}}>Login</Button>
            </div>
          </form>
          <div className="bottom-form">Don't have an account yet?<b><a  style={{color:"black"}} href="/">Signup</a></b></div>
          <div className="bottom"><a href="/" >Terms of Service</a><a href="/" >Privacy Policy</a></div>
        </div>
        </>
  );
}
export default Login;