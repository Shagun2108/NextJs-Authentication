export async function UserProfile({params}: {params: {id: string}}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> Profile</h1>
            <hr />
            <h2> Welcome to your profile page</h2>
            <p> Here you can see your profile information</p>
            <p className="text-4xl"> Profile id : <span className="p-2 rounded bg-orange">  {params.id}</span> </p>
            <p>  Info :</p>
        </div>
    )
}

//edge connection dont have consta databse connection