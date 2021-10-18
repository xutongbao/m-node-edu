const port = [ 
{ pid: 33076, info: ` 
  TCP    0.0.0.0:81             0.0.0.0:0              LISTENING       33076
  TCP    127.0.0.1:81           127.0.0.1:51133        ESTABLISHED     33076
  TCP    127.0.0.1:9229         0.0.0.0:0              LISTENING       33076
  TCP    [::]:81                [::]:0                 LISTENING       33076
`}, 
{ pid: 33580, info: ` 
  TCP    0.0.0.0:82             0.0.0.0:0              LISTENING       33580
  TCP    [::]:82                [::]:0                 LISTENING       33580
`}, 
{ pid: 31808, info: ` 
  TCP    0.0.0.0:83             0.0.0.0:0              LISTENING       31808
  TCP    [::]:83                [::]:0                 LISTENING       31808
`}, 
]; 
module.exports = { port } 
