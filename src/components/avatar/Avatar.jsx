// API for finding avatar through username and userid
// https://avatars.githubusercontent.com/<username>
// https://avatars.githubusercontent.com/u/<userid>

//API for finding all user details
// https://api.github.com/users

// API for finding user all details through username
// https://api.github.com/users/sonu2027


import { useEffect, useState } from "react"
import axios from "axios";
import "./Avatar.css"

function Avatar(props) {
    console.log("Entering in avatar");
    const [avatar, setAvatar] = useState([])

    async function downloadAvatar() {
        const response = await axios.get(`https://api.github.com/users/${props.username}`)
        console.log("response", response);
        console.log("Downloaded");
        setAvatar([
            response.data.avatar_url,
            response.data.name,
            response.data.id,
            response.data.location,
            response.data.created_at,
            response.data.public_repos,
            response.data.repos_url,
            response.data.followers,
            response.data.followers_url,
            response.data.following,
            response.data.following_url
        ])
    }


    useEffect(() => {
        downloadAvatar()
        console.log("Downloaded1");
    }, [])

    return (
        <>
            <img src={avatar[0]} alt="Image" />
            <div><b>{avatar[1]}</b></div>
            <div>ID: {avatar[2]}</div>
            <div>Location: {avatar[3]}</div>
            <div>Created at: {avatar[4]}</div>
            <div>Public Repos: {avatar[5]}</div>
            <a href={avatar[6]}>Repos url</a>
            <div>Followers: {avatar[7]}</div>
            <a href={avatar[8]}>Followers url</a>
            <p>Following: {avatar[9]}</p>
            <a href={avatar[10]}>Follwing url</a>
        </>
    )
}
export default Avatar