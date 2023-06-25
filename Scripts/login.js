const loginService=require('../Services/loginService')
const UserService=require('../Services/UserService')

async function login(req, res) {
  const { email, password } = req.body
  const User= await UserService.getUser(email)
  const result = await loginService.login(email, password)
  if (result) {
    req.session.email = email
   req.session.firstName = User.firstName;

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
          req.session.email = email;
          req.session.firstName = firstName;
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
function isloggedin(req,res){
    if(req.session.email)
    res.json({isloggedin:true,
              email:req.session.email,
            firstName:req.session.firstName})
    else
    res.json({isloggedin:false})
  }
  
  module.exports = {
    login,
    register,
    logout,
    changePass,
    isloggedin
}
