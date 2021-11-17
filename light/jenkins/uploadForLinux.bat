echo %0 %1 %2
7z.exe a \temp\zip\buildForLinux.tar %1
cmd.exe /c /ftp/sftp.bat
cmd.exe /c /ftp/ssh.bat
@REM call C:\ftp\sftp.bat
@REM call C:\ftp\ssh.bat
echo unzip success
