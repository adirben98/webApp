const loginService=require('../Services/loginService')

async function login(req, res) {
    const { email, password } = req.body
  
    const result = await loginService.login(email, password)
    if (result) {
      req.session.email = email
      res.redirect('/')
    }
    else
      res.redirect('/login?error=1')
  }
  async function register(req, res) {
    const { firstName,lastName,email,password} = req.body
   
        const request= await loginService.register(firstName,lastName,email,password,null)    
        if(request)
        {
          
            req.session.email = email
            res.redirect('/')
        }
      else{
      res.redirect('/signup?error=1')

      }    
  }
  function logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  }
  
  module.exports = {
    login,
    register,
    logout
}