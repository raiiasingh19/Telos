import { GoogleLogin } from 'react-google-login';

const clientId = "700787076231-l74feafbp5ud34g109d9k8vf8uvfhn4g.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED!", res);
    }

    return (
        <div className="signIn">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                scope="email profile" 
                isSignedIn={true}
            />
        </div>
    )
}

export default Login
