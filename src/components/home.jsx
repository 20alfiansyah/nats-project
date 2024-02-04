import {
    connect,
  } from "nats.ws";
  
  import {
    useEffect,
    useState,
  } from "react";
  
  export default function Home() {
    const [nats, setNats] = useState();
  
    useEffect(() => {
      (async () => {
        const nc = await connect({
          servers: ["ws://127.0.0.1:8080"],
        });
        setNats(nc);
        console.log("connected to NATS");
      })();
  
      return () => {
        nats?.drain();
        console.log("closed NATS connection");
      };
    }, []);
  
    return (
      <>
        {nats ? (
          <h1>Connected to {nats?.getServer()}</h1>
        ) : (
          <h1>Connecting to NATS...</h1>
        )}
      </>
    );
  }
  