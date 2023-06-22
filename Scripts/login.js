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
    const { firstName, lastName, email, password } = req.body;
  
    try {
      const request = await loginService.register(
        firstName,
        lastName,
        email,
        password,
        null
        );
        console.log(password)
        if (request) {
          //req.session.email = email;
          return res.redirect('/');
        } else {
       
        return res.redirect('/signup?error=1');
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred' });
    }
  }
  
  function logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  }

  async function changePass(req,res){
    const email=req.session.email
    const newPassword=req.body.password
      loginService.changePass(email,newPassword)

  }
  
  module.exports = {
    login,
    register,
    logout,
    changePass
}