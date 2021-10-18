const port = [ 
{ pid: 6556, info: ` 
  TCP    0.0.0.0:82             0.0.0.0:0              LISTENING       6556
  TCP    127.0.0.1:53741        127.0.0.1:5021         SYN_SENT        16556
  TCP    127.0.0.1:56324        127.0.0.1:3000         ESTABLISHED     16556
  TCP    127.0.0.1:57107        127.0.0.1:3002         ESTABLISHED     16556
  TCP    192.168.1.70:55486     14.18.245.239:443      ESTABLISHED     16556
  TCP    192.168.1.70:57067     172.217.160.110:443    SYN_SENT        16556
  TCP    192.168.1.70:58352     108.177.125.188:5228   ESTABLISHED     16556
  TCP    192.168.1.70:58894     172.217.160.110:443    SYN_SENT        16556
  TCP    [::]:82                [::]:0                 LISTENING       6556
  TCP    [::1]:53760            [::1]:8080             ESTABLISHED     16556
`}, 
]; 
module.exports = { port } 
