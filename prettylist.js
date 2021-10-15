const prettylist = 
[
  {
    pid: 89500,
    name: 'origin_master',
    pm2_env: {
      namespace: 'default',
      env_development: { NODE_ENV: 'development', PORT: 81 },
      env_production: { NODE_ENV: 'production', PORT: 81 },
      kill_retry_time: 100,
      windowsHide: true,
      username: 'xu',
      treekill: true,
      automation: true,
      pmx: true,
      instance_var: 'NODE_APP_INSTANCE',
      ignore_watch: [ 'node_modules', 'log', 'dbFile', '.git', 'prettylist.js' ],
      watch: 'false',
      autorestart: true,
      vizion: true,
      merge_logs: true,
      env: {
        YARN_WRAP_OUTPUT: 'false',
        WXDRIVE_START_ARGS: '--wxdrive-setting=0 --disable-gpu --disable-software-rasterizer --enable-features=NetworkServiceInProcess',
        windir: 'C:\\WINDOWS',
        watch: 'false',
        USERPROFILE: 'C:\\Users\\xu',
        USERNAME: 'xu',
        USERDOMAIN_ROAMINGPROFILE: 'LAPTOP-4KDIA4A3',
        USERDOMAIN: 'LAPTOP-4KDIA4A3',
        TMP: 'C:\\Users\\xu\\AppData\\Local\\Temp',
        tempName: 'origin\\master',
        TEMP: 'C:\\Users\\xu\\AppData\\Local\\Temp',
        SystemRoot: 'C:\\WINDOWS',
        SystemDrive: 'C:',
        SESSIONNAME: 'Console',
        PUBLIC: 'C:\\Users\\Public',
        PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
        PROMPT: '$P$G',
        ProgramW6432: 'C:\\Program Files',
        'ProgramFiles(x86)': 'C:\\Program Files (x86)',
        ProgramFiles: 'C:\\Program Files',
        ProgramData: 'C:\\ProgramData',
        PROCESSOR_REVISION: '9e0a',
        PROCESSOR_LEVEL: '6',
        PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 158 Stepping 10, GenuineIntel',
        PROCESSOR_ARCHITECTURE: 'AMD64',
        PORT: 81,
        PM2_USAGE: 'CLI',
        PM2_JSON_PROCESSING: 'true',
        PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC',
        PATH: 'D:\\source\\edu-node-github/node_modules/.bin:C:\\Users\\xu\\AppData\\Local\\Temp\\yarn--1634295539966-0.2012627142291772;D:\\source\\edu-node-github\\node_modules\\.bin;C:\\Users\\xu\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Git\\cmd;C:\\Program Files\\TortoiseGit\\bin;C:\\Program Files (x86)\\Yarn\\bin\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin\\;C:\\Users\\xu\\AppData\\Local\\Yarn\\bin;C:\\Windows\\System32;C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin;C:\\Users\\xu\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\xu\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\xu\\AppData\\Local\\gitkraken\\bin;C:\\Program Files\\@bdeefeopdev-cli\\bin;C:\\Users\\xu\\AppData\\Roaming\\npm;F:\\Program Files\\fiddler;C:\\ProgramData\\xu\\gitkraken\\bin;C:\\Users\\xu\\.deno\\bin;F:\\Users\\xu\\AppData\\Local\\Programs\\Microsoft VS Code\\bin',
        OS: 'Windows_NT',
        OneDriveConsumer: 'C:\\Users\\xu\\OneDrive',
        OneDrive: 'C:\\Users\\xu\\OneDrive',
        NUMBER_OF_PROCESSORS: '8',
        npm_package_version: '1.0.0',
        npm_package_scripts_test: 'echo "Error: no test specified" && exit 1',
        npm_package_scripts_start: 'node app.js',
        npm_package_scripts_serve1: 'cross-env branch=origin/master PORT=81 NODE_ENV=production nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js app',
        npm_package_scripts_serve: 'cross-env name=source_scripts branch=origin/master pm2 start ecosystem.config.js --env production && pm2 logs',
        npm_package_scripts_dockerStart: 'PORT=81 node app',
        npm_package_scripts_dev1: 'cross-env branch=origin/master PORT=81 NODE_ENV=development nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js app',
        npm_package_scripts_dev: 'cross-env name=source_scripts branch=origin/master pm2 start ecosystem.config.js --env development && pm2 logs',
        npm_package_readmeFilename: 'README.md',
        npm_package_name: 'm-node',
        npm_package_main: 'app.js',
        npm_package_license: 'ISC',
        npm_package_description: '',
        npm_package_dependencies_uuid: '^8.3.2',
        npm_package_dependencies_sqlite3: '^5.0.2',
        npm_package_dependencies_rotating_file_stream: '^2.1.6',
        npm_package_dependencies_node_html_markdown: '^1.1.1',
        npm_package_dependencies_nodemon: '^2.0.13',
        npm_package_dependencies_nodemailer: '^6.6.3',
        npm_package_dependencies_multer: '^1.4.2',
        npm_package_dependencies_morgan_body: '^2.6.6',
        npm_package_dependencies_morgan: '^1.10.0',
        npm_package_dependencies_moment: '^2.29.1',
        npm_package_dependencies_mockjs: '^1.1.0',
        npm_package_dependencies_log4js: '^6.3.0',
        npm_package_dependencies_http_proxy_middleware: '^2.0.0',
        npm_package_dependencies_html_to_md: '^0.5.0',
        npm_package_dependencies_file_stream_rotator: '^0.5.7',
        npm_package_dependencies_express: '^4.17.1',
        npm_package_dependencies_cross_spawn: '^7.0.3',
        npm_package_dependencies_cross_env: '^7.0.3',
        npm_package_dependencies_cors: '^2.8.5',
        npm_package_dependencies_connect_history_api_fallback: '^1.6.0',
        npm_package_dependencies_compression: '^1.7.4',
        npm_package_dependencies_body_parser: '^1.19.0',
        npm_package_dependencies_axios: '^0.21.1',
        npm_node_execpath: 'C:\\Program Files\\nodejs\\node.exe',
        npm_lifecycle_script: 'cross-env branch=origin/master PORT=81 NODE_ENV=development nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js app',
        npm_lifecycle_event: 'dev1',
        npm_execpath: 'C:\\Program Files (x86)\\Yarn\\bin\\yarn.js',
        npm_config_version_tag_prefix: 'v',
        npm_config_version_git_tag: 'true',
        npm_config_version_git_sign: '',
        npm_config_version_git_message: 'v%s',
        npm_config_version_commit_hooks: 'true',
        npm_config_user_agent: 'yarn/1.21.1 npm/? node/v16.3.0 win32 x64',
        npm_config_strict_ssl: 'true',
        npm_config_save_prefix: '^',
        npm_config_sass_binary_site: 'http://npm.taobao.org/mirrors/node-sass',
        npm_config_registry: 'http://registry.npm.taobao.org/',
        npm_config_init_version: '1.0.0',
        npm_config_init_license: 'MIT',
        npm_config_ignore_scripts: '',
        npm_config_ignore_optional: '',
        npm_config_home: 'https://www.npmjs.org',
        npm_config_bin_links: 'true',
        npm_config_argv: '{"remain":[],"cooked":["run","dev1"],"original":["dev1"]}',
        NODE_ENV: 'production',
        NODE: 'C:\\Program Files\\nodejs\\node.exe',
        name: 'origin_master',
        LOGONSERVER: '\\\\LAPTOP-4KDIA4A3',
        LOCALAPPDATA: 'C:\\Users\\xu\\AppData\\Local',
        INIT_CWD: 'D:\\source\\edu-node-github',
        HOMEPATH: '\\Users\\xu',
        HOMEDRIVE: 'C:',
        historyPath: 'D:\\source\\edu-node-github',
        DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
        configsetroot: 'C:\\WINDOWS\\ConfigSetRoot',
        ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
        COMPUTERNAME: 'LAPTOP-4KDIA4A3',
        CommonProgramW6432: 'C:\\Program Files\\Common Files',
        'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
        CommonProgramFiles: 'C:\\Program Files\\Common Files',
        ChocolateyToolsLocation: 'C:\\tools',
        ChocolateyLastPathUpdate: '132785809108054531',
        ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
        branch: 'origin/master',
        'asl.log': 'Destination=file',
        APPDATA: 'C:\\Users\\xu\\AppData\\Roaming',
        ALLUSERSPROFILE: 'C:\\ProgramData',
        PM2_HOME: 'C:\\Users\\xu\\.pm2',
        origin_master: '{}',
        unique_id: '8891a6a6-7a1d-470c-8ed5-5135f4278839'
      },
      node_args: [ '--inspect' ],
      name: 'origin_master',
      pm_exec_path: 'D:\\temp\\m-node-edu\\origin\\master\\app.js',
      pm_cwd: 'D:\\temp\\m-node-edu\\origin\\master',
      exec_interpreter: 'node',
      exec_mode: 'fork_mode',
      instances: 1,
      pm_out_log_path: 'C:\\Users\\xu\\.pm2\\logs\\origin-master-out.log',
      pm_err_log_path: 'C:\\Users\\xu\\.pm2\\logs\\origin-master-error.log',
      pm_pid_path: 'C:\\Users\\xu\\.pm2\\pids\\origin-master-0.pid',
      km_link: true,
      vizion_running: false,
      NODE_APP_INSTANCE: 0,
      YARN_WRAP_OUTPUT: 'false',
      WXDRIVE_START_ARGS: '--wxdrive-setting=0 --disable-gpu --disable-software-rasterizer --enable-features=NetworkServiceInProcess',
      windir: 'C:\\WINDOWS',
      USERPROFILE: 'C:\\Users\\xu',
      USERNAME: 'xu',
      USERDOMAIN_ROAMINGPROFILE: 'LAPTOP-4KDIA4A3',
      USERDOMAIN: 'LAPTOP-4KDIA4A3',
      TMP: 'C:\\Users\\xu\\AppData\\Local\\Temp',
      tempName: 'origin\\master',
      TEMP: 'C:\\Users\\xu\\AppData\\Local\\Temp',
      SystemRoot: 'C:\\WINDOWS',
      SystemDrive: 'C:',
      SESSIONNAME: 'Console',
      PUBLIC: 'C:\\Users\\Public',
      PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
      PROMPT: '$P$G',
      ProgramW6432: 'C:\\Program Files',
      'ProgramFiles(x86)': 'C:\\Program Files (x86)',
      ProgramFiles: 'C:\\Program Files',
      ProgramData: 'C:\\ProgramData',
      PROCESSOR_REVISION: '9e0a',
      PROCESSOR_LEVEL: '6',
      PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 158 Stepping 10, GenuineIntel',
      PROCESSOR_ARCHITECTURE: 'AMD64',
      PORT: 81,
      PM2_USAGE: 'CLI',
      PM2_JSON_PROCESSING: 'true',
      PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC',
      PATH: 'D:\\source\\edu-node-github/node_modules/.bin:C:\\Users\\xu\\AppData\\Local\\Temp\\yarn--1634295539966-0.2012627142291772;D:\\source\\edu-node-github\\node_modules\\.bin;C:\\Users\\xu\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Git\\cmd;C:\\Program Files\\TortoiseGit\\bin;C:\\Program Files (x86)\\Yarn\\bin\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin\\;C:\\Users\\xu\\AppData\\Local\\Yarn\\bin;C:\\Windows\\System32;C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin;C:\\Users\\xu\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\xu\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\xu\\AppData\\Local\\gitkraken\\bin;C:\\Program Files\\@bdeefeopdev-cli\\bin;C:\\Users\\xu\\AppData\\Roaming\\npm;F:\\Program Files\\fiddler;C:\\ProgramData\\xu\\gitkraken\\bin;C:\\Users\\xu\\.deno\\bin;F:\\Users\\xu\\AppData\\Local\\Programs\\Microsoft VS Code\\bin',
      OS: 'Windows_NT',
      OneDriveConsumer: 'C:\\Users\\xu\\OneDrive',
      OneDrive: 'C:\\Users\\xu\\OneDrive',
      NUMBER_OF_PROCESSORS: '8',
      npm_package_version: '1.0.0',
      npm_package_scripts_test: 'echo "Error: no test specified" && exit 1',
      npm_package_scripts_start: 'node app.js',
      npm_package_scripts_serve1: 'cross-env branch=origin/master PORT=81 NODE_ENV=production nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js app',
      npm_package_scripts_serve: 'cross-env name=source_scripts branch=origin/master pm2 start ecosystem.config.js --env production && pm2 logs',
      npm_package_scripts_dockerStart: 'PORT=81 node app',
      npm_package_scripts_dev1: 'cross-env branch=origin/master PORT=81 NODE_ENV=development nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js app',
      npm_package_scripts_dev: 'cross-env name=source_scripts branch=origin/master pm2 start ecosystem.config.js --env development && pm2 logs',
      npm_package_readmeFilename: 'README.md',
      npm_package_name: 'm-node',
      npm_package_main: 'app.js',
      npm_package_license: 'ISC',
      npm_package_description: '',
      npm_package_dependencies_uuid: '^8.3.2',
      npm_package_dependencies_sqlite3: '^5.0.2',
      npm_package_dependencies_rotating_file_stream: '^2.1.6',
      npm_package_dependencies_node_html_markdown: '^1.1.1',
      npm_package_dependencies_nodemon: '^2.0.13',
      npm_package_dependencies_nodemailer: '^6.6.3',
      npm_package_dependencies_multer: '^1.4.2',
      npm_package_dependencies_morgan_body: '^2.6.6',
      npm_package_dependencies_morgan: '^1.10.0',
      npm_package_dependencies_moment: '^2.29.1',
      npm_package_dependencies_mockjs: '^1.1.0',
      npm_package_dependencies_log4js: '^6.3.0',
      npm_package_dependencies_http_proxy_middleware: '^2.0.0',
      npm_package_dependencies_html_to_md: '^0.5.0',
      npm_package_dependencies_file_stream_rotator: '^0.5.7',
      npm_package_dependencies_express: '^4.17.1',
      npm_package_dependencies_cross_spawn: '^7.0.3',
      npm_package_dependencies_cross_env: '^7.0.3',
      npm_package_dependencies_cors: '^2.8.5',
      npm_package_dependencies_connect_history_api_fallback: '^1.6.0',
      npm_package_dependencies_compression: '^1.7.4',
      npm_package_dependencies_body_parser: '^1.19.0',
      npm_package_dependencies_axios: '^0.21.1',
      npm_node_execpath: 'C:\\Program Files\\nodejs\\node.exe',
      npm_lifecycle_script: 'cross-env branch=origin/master PORT=81 NODE_ENV=development nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js app',
      npm_lifecycle_event: 'dev1',
      npm_execpath: 'C:\\Program Files (x86)\\Yarn\\bin\\yarn.js',
      npm_config_version_tag_prefix: 'v',
      npm_config_version_git_tag: 'true',
      npm_config_version_git_sign: '',
      npm_config_version_git_message: 'v%s',
      npm_config_version_commit_hooks: 'true',
      npm_config_user_agent: 'yarn/1.21.1 npm/? node/v16.3.0 win32 x64',
      npm_config_strict_ssl: 'true',
      npm_config_save_prefix: '^',
      npm_config_sass_binary_site: 'http://npm.taobao.org/mirrors/node-sass',
      npm_config_registry: 'http://registry.npm.taobao.org/',
      npm_config_init_version: '1.0.0',
      npm_config_init_license: 'MIT',
      npm_config_ignore_scripts: '',
      npm_config_ignore_optional: '',
      npm_config_home: 'https://www.npmjs.org',
      npm_config_bin_links: 'true',
      npm_config_argv: '{"remain":[],"cooked":["run","dev1"],"original":["dev1"]}',
      NODE_ENV: 'production',
      NODE: 'C:\\Program Files\\nodejs\\node.exe',
      LOGONSERVER: '\\\\LAPTOP-4KDIA4A3',
      LOCALAPPDATA: 'C:\\Users\\xu\\AppData\\Local',
      INIT_CWD: 'D:\\source\\edu-node-github',
      HOMEPATH: '\\Users\\xu',
      HOMEDRIVE: 'C:',
      historyPath: 'D:\\source\\edu-node-github',
      DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
      configsetroot: 'C:\\WINDOWS\\ConfigSetRoot',
      ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
      COMPUTERNAME: 'LAPTOP-4KDIA4A3',
      CommonProgramW6432: 'C:\\Program Files\\Common Files',
      'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
      CommonProgramFiles: 'C:\\Program Files\\Common Files',
      ChocolateyToolsLocation: 'C:\\tools',
      ChocolateyLastPathUpdate: '132785809108054531',
      ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
      branch: 'origin/master',
      'asl.log': 'Destination=file',
      APPDATA: 'C:\\Users\\xu\\AppData\\Roaming',
      ALLUSERSPROFILE: 'C:\\ProgramData',
      PM2_HOME: 'C:\\Users\\xu\\.pm2',
      origin_master: '{}',
      unique_id: '8891a6a6-7a1d-470c-8ed5-5135f4278839',
      status: 'online',
      pm_uptime: 1634295657715,
      axm_actions: [
        {
          action_name: 'km:heapdump',
          action_type: 'internal',
          arity: 2
        },
        {
          action_name: 'km:cpu:profiling:start',
          action_type: 'internal',
          arity: 2
        },
        {
          action_name: 'km:cpu:profiling:stop',
          action_type: 'internal',
          arity: 1
        },
        {
          action_name: 'km:heap:sampling:start',
          action_type: 'internal',
          arity: 2
        },
        {
          action_name: 'km:heap:sampling:stop',
          action_type: 'internal',
          arity: 1
        }
      ],
      axm_monitor: {
        'Heap Size': {
          value: '53.91',
          type: 'internal/v8/heap/total',
          unit: 'MiB',
          historic: true
        },
        'Heap Usage': {
          value: 51.49,
          type: 'internal/v8/heap/usage',
          unit: '%',
          historic: true
        },
        'Used Heap Size': {
          value: '27.76',
          type: 'internal/v8/heap/used',
          unit: 'MiB',
          historic: true
        }
      },
      axm_options: {
        error: true,
        heapdump: true,
        'feature.profiler.heapsnapshot': false,
        'feature.profiler.heapsampling': true,
        'feature.profiler.cpu_js': true,
        latency: true,
        catchExceptions: true,
        profiling: true,
        metrics: {
          http: true,
          runtime: true,
          eventLoop: true,
          network: false,
          v8: true
        },
        standalone: false,
        tracing: { outbound: false, enabled: false },
        module_conf: {},
        apm: { version: '5.0.0', type: 'node' },
        module_name: 'origin_master',
        module_version: '5.1.2'
      },
      axm_dynamic: {},
      created_at: 1634295657715,
      pm_id: 0,
      restart_time: 0,
      unstable_restarts: 0,
      version: '1.0.0',
      node_version: '16.3.0',
      versioning: {
        type: 'git',
        url: 'git@github.com:xutongbao/m-node-edu.git',
        revision: '4226cc9349cb30eb29c7cabaee585f2c8b9ccdc9',
        comment: '优化\n',
        unstaged: false,
        branch: 'HEAD',
        remotes: [ 'origin' ],
        remote: 'origin',
        branch_exists_on_remote: false,
        ahead: false,
        next_rev: null,
        prev_rev: '2c585a4942ca29fe7b6a9fe107bd530c112ff2bf',
        update_time: '2021-10-15T11:00:58.324Z',
        repo_path: 'D:\\temp\\m-node-edu\\origin\\master'
      }
    },
    pm_id: 0,
    monit: { memory: 77209600, cpu: 37.4 }
  }
]; 
module.exports = { prettylist } 
