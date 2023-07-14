const Register = () => {
    return ( 
        <div class="container">
        <div class="row">
            <div class ="col-md-4"></div>
            <div class="col-md-4">
                <div class="card bg-primary " >
                    <div class="card-body">
                      <h5 class="card-title">REGISTER DETAILS</h5>
                      
                      <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">FIRST NAME</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                          
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">LAST NAME</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">EMAIL ADDRESS</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">PHONE NO.</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">ADDRESS</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            
                          </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">PASSWORD</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div class="mb-3 form-check">
                      
                          <label class="form-check-label" for="exampleCheck1">Already have an account<a href="login.html">click here</a></label>
                        </div>
                        <button type="submit" class="btn btn-primary bg-light"><a href="successregi.html">REGISTER</a></button>
                      </form>
                    </div>
                  </div>

            </div>
            <div class ="col-md-4"></div>

        </div>
    </div>
    
    
          );
     }
      
     export default Register;