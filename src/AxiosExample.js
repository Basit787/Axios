import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosExample = () => {

    const [userdata, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res);
                setData(res.data)
            })
    }, [])

    return (
        <div>
            <h1>Axios Example</h1>
            {userdata.map((data) => {
                return (
                    <>
                        <div>Name:  {data.name}</div>
                        <div>userame: {data.username}</div>
                        <div>Phone: {data.phone}</div>
                        <div>email: {data.email}</div>
                        <div>username: {data.username}</div>
                        <div>website: {data.website}</div>
                        <div>address: {data.address.city}</div>
                        <div>geo: {data.address.geo.street}</div>
                        <div>suite: {data.company.catchPhrase}</div>
                        <div>Company: {data.company.bs}</div>
                        <div>________________________________</div>
                    </>
                )
            })}
        </div>
    )
}

export default AxiosExample