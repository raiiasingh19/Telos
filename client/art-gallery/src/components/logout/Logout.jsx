import { GoogleLogout } from 'react-google-login';

const clientId = "700787076231-l74feafbp5ud34g109d9k8vf8uvfhn4g.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("Log out successful!");
    }

    return (
        <div className="signOut">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout