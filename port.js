const port = [ 
{ pid: 27212, info: ` 
  TCP    0.0.0.0:82             0.0.0.0:0              LISTENING       27212
  TCP    192.168.1.70:51559     13.49.22.0:443         LAST_ACK        27212
  TCP    [::]:82                [::]:0                 LISTENING       27212
`}, 
{ pid: 29584, info: ` 
  TCP    0.0.0.0:81             0.0.0.0:0              LISTENING       29584
  TCP    127.0.0.1:9229         0.0.0.0:0              LISTENING       29584
  TCP    [::]:81                [::]:0                 LISTENING       29584
  TCP    [::1]:81               [::1]:55424            ESTABLISHED     29584
`}, 
]; 
module.exports = { port } 
