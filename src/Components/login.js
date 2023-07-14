const Login = () => {
    return ( 
        <body>
        
    <div class="container">
        <div class="row">
            <div class ="col-md-4"></div>
            <div class="col-md-4">
                <div class="card bg-primary"> 
                    <div class="card-body">
                      <h5 class="card-title">USER LOGIN</h5>
                      
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                          
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div class="mb-3 form-check">
    
                          <label class="form-check-label" for="exampleCheck1">Forgot password  <a href="forgot.html">Change password</a></label>
                        </div>
                        <div class="mb-3 form-check">
                          
                          <label class="form-check-label" for="exampleCheck1">Not registered?  <a href="register.html">click here</a></label>
                        </div>
                        <button type="submit" class="btn btn-primary bg-light"><a href="shopping.html">Login</a></button>
                      </form>
                    </div>
                  </div>

            </div>
            <div class ="col-md-4"></div>

        </div>
    </div>
        
        </body>
    
     );
}
 
export default Login;
 