import React from "react";
import { Input } from "@/components/ui/input";

const MiniChat = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="mini-chat-container">
            <div className="mini-chat-header">
                <h4>John Doe</h4>
                <button onClick={onClose} className="close-button">✖</button>
            </div>
            <div className="mini-chat-body flex flex-col">
                <div className="flex justify-start">
                    <div className="chat-message">
                        <p>Hello, I'm John, how may I help you?</p>
                        <span className="timestamp">10:20</span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="chat-message user-message">
                        <p>I'd like to check my order status.</p>
                        <span className="timestamp">✔✔</span>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="chat-message">
                        <p>No problem, please provide me with your order ID.</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="chat-message user-message">
                        <p>My order ID is GQ34566</p>
                        <span className="timestamp">✔✔</span>
                    </div>
                </div>
            </div>
            <div className="chat-footer flex m-4">
                <Input type="text" placeholder="Type a message..." className="me-1" />
                <button className="send-button">➤</button>
            </div>
        </div>
    );
};

export default MiniChat;
