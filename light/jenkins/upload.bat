echo %0 %1 %2
7z.exe a \temp\zip\build.tar %1
ftp -s:C:\ftp\upload.ftp
ssh Administrator@39.97.238.175 "ls"