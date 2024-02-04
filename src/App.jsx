import { connect, StringCodec } from "nats.ws";
import { useState, useEffect } from 'react';
import './components/home.jsx';
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import MessagesReceiver from "./components/messages.jsx";


const sc = StringCodec();

function App() {
  const [nc, setConnection] = useState(undefined);
  const [subscription, setSubscription] = useState(null);
  const [lastError, setError] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [keySender, setKeySender] = useState(0);
  const [presence, setPresence]= useState("offline");
  let currentDate = new Date();
  currentDate.setUTCHours(currentDate.getUTCHours() + 7);
  let hours = currentDate.getUTCHours();
  let minutes = currentDate.getUTCMinutes();
  let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  let subject = "ROOM1"
  let currentUserId = "Alfian"
  let keyReceiver = 0;

  const addmyMessage = ()=>{
    setKeySender((prevKey) => prevKey + 1); 
    const dataSender = inputValue || ""
    const userId = currentUserId || "";
    const clock = formattedTime
    const m = {subject,dataSender,userId,keySender,time: new Date().toUTCString(),clock}
    setMessages((prevMessages) => {
      return [m, ...prevMessages];
    });
  }

  const addMessage = (err, msg) => {
    keyReceiver++;
    const { subject } = msg;
    const data = JSON.parse(sc.decode(msg.data));
    const userId = data.currentUserId || "";
    const dataReceiver = data.messageData || ""
    const clock = data.clock
    const m = {subject, userId, dataReceiver, keyReceiver, time: new Date().toUTCString(),clock};
    // Check if userId is not equal to currentUserId before updating the state
    if (userId !== currentUserId || userId == "") {
      setMessages((prevMessages) => {
        return [m, ...prevMessages];
      });
    }
  };
  
  const handleSubscribe = () => {
    if (nc && !subscription) {
      const sub = nc.subscribe(subject, { callback: addMessage });
      setSubscription(sub);
      setPresence("online");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePublish = () => {
    if (nc) {
      const message = {
        subject: subject,
        data: sc.encode(JSON.stringify({
          messageData: inputValue,
          currentUserId,
          clock:formattedTime
        })),
      };
      nc.publish(message.subject, message.data);
      addmyMessage()
      setInputValue("")
    }
  };
  

  const handleUnsubscribe = () => {
    if (subscription) {
      subscription.unsubscribe();
      setSubscription(null);
      setMessages([]);
      setPresence("offline");  
    }
  };

  useEffect(() => {
    if (nc === undefined) {
      connect({ servers: ["ws://127.0.0.1:8080"], waitOnFirstConnect: true })
        .then((newNc) => {
          setConnection(newNc);
        })
        .catch((err) => {
          setError("error connecting");
          console.error(err);
        });
    }
  }, [nc]); // Include nc in the dependency array to prevent unnecessary re-renders

  const state = nc ? "connected" : "not yet connected";
  
  return (
    <>
      <div className="w-full bg-white flex flex-col h-dvh justify-center items-center">
        {console.log(messages)}
        {state == "connected" 
        ?   <div className="h-full w-full lg:h-5/6 lg:w-2/6 flex flex-col shadow-[5px_5px_rgba(0,_236,_100,_0.4),_10px_10px_rgba(0,_236,_100,_0.3),_15px_15px_rgba(0,_236,_100,_0.2),_20px_20px_rgba(0,_236,_100,_0.1),_25px_25px_rgba(0,_236,_100,_0.05)] rounded-3xl">
              <header>
                <Navbar subs={handleSubscribe} unsubs={handleUnsubscribe} state={presence} subject={subject}/>
              </header>
              <main className="flex-1 overflow-y-auto flex justify-center bg-base-100">
                <div className="container px-2">
                  {messages.length > 0 && lastError === "" ? (
                    <MessagesReceiver messages={messages} userId={currentUserId}/>
                  ) : (
                  "no messages"
                  )}
                </div>
              </main>
              <footer>
                <Footer  inputValue={inputValue} onInputChange={handleInputChange} onPublish={handlePublish} />
              </footer>
          </div>
        : <span className="loading loading-bars loading-lg"></span>
        
        }
        
    </div>
    </>
  );
}

export default App;