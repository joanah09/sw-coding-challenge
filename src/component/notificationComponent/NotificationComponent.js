import axios from "axios";
import React, { useEffect, useState } from "react";
import baseURL from "../../baseUrl";
import 'animate.css';
import NotificationClose from "./NotificationClose";

const bearerToken = process.env.REACT_APP_BEARER
const config = {
    headers: { Authorization: `Bearer ${bearerToken}`}
}

function NotificationComponent() {

    const [user, setUser] = useState([]);
    const getData = () => {
        axios.get(`${baseURL}/notifications`, config)
        .then((res) => {
            const myData = res.data.d;
            setUser(myData);
        }).catch((err) => {
            console.log(err)
        });
    };
    useEffect(() => getData(), []);

    // function remove() {
    //     let removeItem = document.querySelector(".notification_item")
    //     let closeBtn = document.querySelector(".close-btn")
        
    //     if (closeBtn) {
    //         closeBtn.addEventListener("click", () => {
    //             removeItem.remove();
    //             console.log("clicked")
    //         })
    //     }
    //   }

      const notification = user.slice(0, 5).map((item, id) => {
        return <NotificationClose key={id} {...item} />    
    })

    return (
        <div className="notification">          
         {notification}
        </div>
    )


}

export default NotificationComponent


