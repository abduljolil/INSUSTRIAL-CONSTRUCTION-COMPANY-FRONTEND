import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {signIn,googleSignIn }=useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const[loginError,setLoginError]=useState('');
    const [disabled ,setDisabled]=useState(true);
     const from = location.state?.from?.pathname || "/";
     console.log('state in the location', location.state);
  
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password);
        setLoginError('');
        signIn(email,password)
        .then(res=>{
          const user=res.user;
          console.log(user);
          Swal.fire({
            title: "Login Successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, { replace: true });
        })
        .catch(error=>{
          console.error(error);
          setLoginError(error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}!`,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        })
    }
    const handleCaptchaValidate = (e) =>{
        const value = e.target.value;
        if (validateCaptcha(value)==true) {
             setDisabled(false)
        }
        else{
        setDisabled(true)
        }

    }
    const handleGoogle = ()=>{
      googleSignIn()
      .then(res=>{
        console.log(res.user)
        navigate('/')
      })
      .catch(error=>{
      
        console.error(error)
      })
    }
    return (
   <>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:flex">
          <div className="text-center lg:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type= "text"  onBlur={handleCaptchaValidate}  name="captcha"   placeholder="type of captcha" className="input input-bordered" required />
                 
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} type="submit"  className="btn btn-primary" value="Login" />
              </div>
            </form>
           <div className='px-5 text-center'> <button onClick={handleGoogle} className="btn btn-ghost uppercase">Google Singup <span className='text-xl'><FcGoogle /></span></button> </div>
          <p className='text-lg  text-center py-5'><small>New Here?<Link className='font-bold' to= '/singup'>Create an account</Link></small></p>
          </div>
        </div>
      </div>
   </>
    );
};

export default Login;