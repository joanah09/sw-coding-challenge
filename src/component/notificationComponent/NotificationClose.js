import React, { useState } from "react";

function NotificationClose(props) {
    const [isActive, setActive] = useState(false);
    function remove() {
        setActive(!isActive)
        // setTimeout(() => {  
        //     setActive(!isActive)
        //     console.log("test!"); 
        // }, 1000);
    }

    // const styles = {
    //     right: isActive ? "-999px" : "0"
    // }

    return (
        <>
        {!isActive && 
            <div className="notification_item">
                <div className="close-btn" onClick={remove}>
                    <span className="material-symbols-outlined">close</span>
                </div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                
            </div>
        }
        </>
    )
}

export default NotificationClose