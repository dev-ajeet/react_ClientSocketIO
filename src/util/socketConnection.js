import io from "socket.io-client";

let socket = io("http://127.0.0.1:8181");

socket.on("connect", () => {
  console.log("Connected to socket server");
  socket.emit("clientAuth", "sadcvs0fg9093434off");
});

socket.on("disconnect", () => {
  console.log("Disconnected from the socket server");
});

export default socket;
