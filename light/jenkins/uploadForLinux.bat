echo %0 %1 %2
7z.exe a \temp\zip\buildForLinux.tar %1
call C:\ftp\sftp.bat
