import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const { token } = userDetails;

  const config = {
    auth: { token }
  };

  socket = io('http://localhost:5002', config);

  socket.on('connect', () => {
    console.log('sucesfully connected with socket.io server');
    console.log(socket.id);
  });
};
