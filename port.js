const port = [ 
{ pid: 29996, info: ` 
  TCP    0.0.0.0:82             0.0.0.0:0              LISTENING       29996
  TCP    [::]:82                [::]:0                 LISTENING       29996
`}, 
{ pid: 23252, info: ` 
  TCP    0.0.0.0:81             0.0.0.0:0              LISTENING       23252
  TCP    127.0.0.1:81           127.0.0.1:52933        ESTABLISHED     23252
  TCP    127.0.0.1:9229         0.0.0.0:0              LISTENING       23252
  TCP    [::]:81                [::]:0                 LISTENING       23252
`}, 
]; 
module.exports = { port } 
