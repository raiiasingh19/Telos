// const clientId = "700787076231-l74feafbp5ud34g109d9k8vf8uvfhn4g.apps.googleusercontent.com";

function Logout() {
    const handleLogout = () => {
        localStorage.removeItem("name")
        localStorage.removeItem("email") 
        localStorage.removeItem("profilePic")
        console.log("Log out successful!");
    }

    return (
        <div className="signOut">
            <button
                onClick={handleLogout}
            >Logout</button>
        </div>
    )
}

export default Logout