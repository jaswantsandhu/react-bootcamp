import React, { useState } from "react";
import Message from "../components/message";
import Messages from "../config/message";

export default function HomePage() {
    const [showMessages, setShowMessages] = useState(false);

    function handleMessageClick(event) {
        console.log(event);
    }

    return (
        <>
            {showMessages &&
                Messages.map((item) => {
                    return (
                        // click is custom props not the react onClick event handler.
                        <Message message={item} click={handleMessageClick} />
                    );
                })}

            <button
                onClick={() => {
                    setShowMessages(!showMessages);
                }}
            >
                Show Messages
            </button>
        </>
    );
}
