const port = [ 
  { pid: 22628, info: ` 
    TCP    0.0.0.0:82             0.0.0.0:0              LISTENING       22628
    TCP    [::]:82                [::]:0                 LISTENING       22628
  `}, 
  { pid: 26552, info: ` 
    TCP    0.0.0.0:81             0.0.0.0:0              LISTENING       26552
    TCP    127.0.0.1:9229         0.0.0.0:0              LISTENING       26552
    TCP    [::]:81                [::]:0                 LISTENING       26552
    TCP    [::1]:81               [::1]:52641            ESTABLISHED     26552
  `}, 
  ]; 
  module.exports = { port } 
  