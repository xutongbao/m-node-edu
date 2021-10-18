const port = [
  {
    pid: 4276,
    info: `TCP    0.0.0.0:82             0.0.0.0:0              LISTENING       4276
    TCP    [::]:82                [::]:0                 LISTENING       4276`
  },
  {
    pid: 25344,
    info: `TCP    0.0.0.0:81             0.0.0.0:0              LISTENING       25344
    TCP    127.0.0.1:9229         0.0.0.0:0              LISTENING       25344
    TCP    [::]:81                [::]:0                 LISTENING       25344
    TCP    [::1]:81               [::1]:62206            ESTABLISHED     25344`
  }
]; 
module.exports = { port } 
