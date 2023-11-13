import { useEffect, useState } from 'react';
import { signInWithGoogle } from "../../Firebase";

function Login() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
      if(localStorage.getItem("name") && localStorage.getItem("email") && localStorage.getItem("profilePic")) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    }, [isAuth])
    
    return (
    <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    );
}

export default Login
