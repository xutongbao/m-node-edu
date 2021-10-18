const port = [ 
{ pid: 29352, info: ` 
  TCP    0.0.0.0:82             0.0.0.0:0              LISTENING       29352
  TCP    192.168.1.70:56819     13.49.22.0:443         LAST_ACK        29352
  TCP    [::]:82                [::]:0                 LISTENING       29352
`}, 
{ pid: 29392, info: ` 
  TCP    0.0.0.0:81             0.0.0.0:0              LISTENING       29392
  TCP    127.0.0.1:9229         0.0.0.0:0              LISTENING       29392
  TCP    [::]:81                [::]:0                 LISTENING       29392
  TCP    [::1]:81               [::1]:58957            ESTABLISHED     29392
`}, 
]; 
module.exports = { port } 
