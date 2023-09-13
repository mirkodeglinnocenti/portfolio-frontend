import AuthUser from "../services/AuthUser"

const Dashboard = () => {
    const {user} = AuthUser();
    return (
        <div>
            <h1>Dashboard frf</h1>
            <p>la tua email:{user.email}</p>
        </div>
    )
}

export default Dashboard