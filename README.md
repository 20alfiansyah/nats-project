# Chatting Apps With REACT & NATS WS
***
## HOW TO RUN
* Open 2 Terminal in your folder
* Run `npm run dev` in first terminal 
* Run `nats-server -c ws.conf` in second terminal
> You have to atleast have 1 copy of this project and change currentuserid in app.jsx with your name and run `npm run dev`
***
## HOW TO USE
### First STEP
* make sure your nats-server is on or connection is connect
  * if connect like this
    ![image](https://github.com/20alfiansyah/nats-project/assets/91005797/012e6a8e-5450-4dff-9be8-28f4ff218b82)
  * if doesn't connect like this
    ![image](https://github.com/20alfiansyah/nats-project/assets/91005797/a8b186f7-a834-4943-aa57-9f33bd4329e7)
### Second STEP
* then you can subscribe first so the device can communicate each other with the nats-server
  * tap the avatar icon then subscribe and see the indicator change to green
    ![image](https://github.com/20alfiansyah/nats-project/assets/91005797/83540171-86ca-452d-81ff-98c33a2b762b)
  * if already subscribed <br>
    ![image](https://github.com/20alfiansyah/nats-project/assets/91005797/30f7598b-f5ce-42da-9929-fbfa4ca7464e)
  * if dont subcribed yet <br>
    ![image](https://github.com/20alfiansyah/nats-project/assets/91005797/fb297f97-1839-4795-948e-245e7fd9a395)
* voila!! you can fill input field to write some messages to other devices that already subscribed the ROOM1 subject
***
## DOCUMENTATION
* Doesnt Connect
![image](https://github.com/20alfiansyah/nats-project/assets/91005797/62f2f3f3-2e66-4026-9931-3d1f294f8f2b)
* Connected
![image](https://github.com/20alfiansyah/nats-project/assets/91005797/190f1924-f033-46d9-ad0d-0c3c76692e32)
* Communication
![image](https://github.com/20alfiansyah/nats-project/assets/91005797/129f7cb7-7e10-417e-a0fc-6c6091535f5d)
 * From Device 1 (Alfian)
  ![image](https://github.com/20alfiansyah/nats-project/assets/91005797/0e1160aa-7e48-462d-85e3-1db8ee750a35)
 * From Device 2 (Farhan)
  ![image](https://github.com/20alfiansyah/nats-project/assets/91005797/781c8adc-399d-4a5e-8afa-ae45d3778aaf)
***
# THANK YOU!
