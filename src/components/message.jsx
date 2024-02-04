const Message = ({ msg,userId}) => {
    if (msg.userId == userId && msg.dataSender != "") {
        return (
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    {msg.userId}
                </div>
                <div className="chat-bubble chat-bubble-secondary">{msg.dataSender}</div>
                <div className="chat-footer opacity-50">
                    <time className="text-xs opacity-50">{msg.clock}</time>
                </div>
            </div>
            
        );
    } else if (msg.userId != userId  && msg.dataSender != "") {
        return (
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    {msg.userId}
                </div>
                <div className="chat-bubble chat-bubble-primary">{msg.dataReceiver}</div>
                <div className="chat-footer opacity-50">
                    {msg.clock}
                </div>
            </div>
        );
    } else {
        return (
            <>
            </>
        );
    }
};

export default Message;
