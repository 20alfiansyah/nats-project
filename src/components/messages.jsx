import Message from "./message"
const Messages = ({ messages, userId}) => {
    return (
        <div className="">
            {messages.map((m) => (
                <Message msg={m} userId={userId}  />
            ))}
        </div>
    )
}

export default Messages
