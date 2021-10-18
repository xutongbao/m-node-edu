const prettylist = 
[
  {
    pid: 6556,
    name: 'origin_master',
    pm2_env: {
      exit_code: 1,
      script: './app.js',
      prev_restart_delay: 0,
      versioning: {
        type: 'git',
        url: 'git@github.com:xutongbao/m-node-edu.git',
        revision: '4226cc9349cb30eb29c7cabaee585f2c8b9ccdc9',
        comment: '优化\n',
        unstaged: true,
        branch: 'HEAD',
        remotes: [ 'origin' ],
        remote: 'origin',
        branch_exists_on_remote: false,
        ahead: false,
        next_rev: null,
        prev_rev: '2c585a4942ca29fe7b6a9fe107bd530c112ff2bf',
        update_time: '2021-10-18T09:01:19.412Z',
        repo_path: 'D:\\temp\\m-node-edu\\origin\\master'
      },
      node_version: '16.3.0',
      version: '1.0.0',
      unstable_restarts: 0,
      restart_time: 1,
      pm_id: 0,
      created_at: 1634547678636,
      axm_dynamic: {},
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
      axm_monitor: {
        'Heap Size': {
          value: '53.41',
          type: 'internal/v8/heap/total',
          unit: 'MiB',
          historic: true
        },
        'Heap Usage': {
          value: 51.21,
          type: 'internal/v8/heap/usage',
          unit: '%',
          historic: true
        },
        'Used Heap Size': {
          value: '27.36',
          type: 'internal/v8/heap/used',
          unit: 'MiB',
          historic: true
        }
      },
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
      pm_uptime: 1634547679058,
      status: 'online',
      unique_id: '86180577-22da-4e9e-bb24-2ca8367fa5d6',
      origin_master: '{}',
      PM2_HOME: 'C:\\Users\\xu\\.pm2',
      ALLUSERSPROFILE: 'C:\\ProgramData',
      APPDATA: 'C:\\Users\\xu\\AppData\\Roaming',
      'asl.log': 'Destination=file',
      branch: 'origin\\master',
      ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
      ChocolateyLastPathUpdate: '132785809108054531',
      ChocolateyToolsLocation: 'C:\\tools',
      CommonProgramFiles: 'C:\\Program Files\\Common Files',
      'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
      CommonProgramW6432: 'C:\\Program Files\\Common Files',
      COMPUTERNAME: 'LAPTOP-4KDIA4A3',
      ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
      configsetroot: 'C:\\WINDOWS\\ConfigSetRoot',
      DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
      historyPath: 'D:\\source\\edu-node-github',
      HOMEDRIVE: 'C:',
      HOMEPATH: '\\Users\\xu',
      INIT_CWD: 'D:\\source\\edu-node-github',
      LOCALAPPDATA: 'C:\\Users\\xu\\AppData\\Local',
      LOGONSERVER: '\\\\LAPTOP-4KDIA4A3',
      NODE: 'C:\\Program Files\\nodejs\\node.exe',
      NODE_ENV: 'production',
      npm_config_argv: '{"remain":[],"cooked":["run","dev1"],"original":["dev1"]}',
      npm_config_bin_links: 'true',
      npm_config_home: 'https://www.npmjs.org',
      npm_config_ignore_optional: '',
      npm_config_ignore_scripts: '',
      npm_config_init_license: 'MIT',
      npm_config_init_version: '1.0.0',
      npm_config_registry: 'http://registry.npm.taobao.org/',
      npm_config_sass_binary_site: 'http://npm.taobao.org/mirrors/node-sass',
      npm_config_save_prefix: '^',
      npm_config_strict_ssl: 'true',
      npm_config_user_agent: 'yarn/1.21.1 npm/? node/v16.3.0 win32 x64',
      npm_config_version_commit_hooks: 'true',
      npm_config_version_git_message: 'v%s',
      npm_config_version_git_sign: '',
      npm_config_version_git_tag: 'true',
      npm_config_version_tag_prefix: 'v',
      npm_execpath: 'C:\\Program Files (x86)\\Yarn\\bin\\yarn.js',
      npm_lifecycle_event: 'dev1',
      npm_lifecycle_script: 'cross-env PORT=81 NODE_ENV=development nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js --ignore prettylist.txt --ignore port.js app',
      npm_node_execpath: 'C:\\Program Files\\nodejs\\node.exe',
      npm_package_dependencies_axios: '^0.21.1',
      npm_package_dependencies_body_parser: '^1.19.0',
      npm_package_dependencies_compression: '^1.7.4',
      npm_package_dependencies_connect_history_api_fallback: '^1.6.0',
      npm_package_dependencies_cors: '^2.8.5',
      npm_package_dependencies_cross_env: '^7.0.3',
      npm_package_dependencies_cross_spawn: '^7.0.3',
      npm_package_dependencies_express: '^4.17.1',
      npm_package_dependencies_file_stream_rotator: '^0.5.7',
      npm_package_dependencies_html_to_md: '^0.5.0',
      npm_package_dependencies_http_proxy_middleware: '^2.0.0',
      npm_package_dependencies_log4js: '^6.3.0',
      npm_package_dependencies_mockjs: '^1.1.0',
      npm_package_dependencies_moment: '^2.29.1',
      npm_package_dependencies_morgan: '^1.10.0',
      npm_package_dependencies_morgan_body: '^2.6.6',
      npm_package_dependencies_multer: '^1.4.2',
      npm_package_dependencies_nodemailer: '^6.6.3',
      npm_package_dependencies_nodemon: '^2.0.13',
      npm_package_dependencies_node_html_markdown: '^1.1.1',
      npm_package_dependencies_rotating_file_stream: '^2.1.6',
      npm_package_dependencies_sqlite3: '^5.0.2',
      npm_package_dependencies_uuid: '^8.3.2',
      npm_package_description: '',
      npm_package_license: 'ISC',
      npm_package_main: 'app.js',
      npm_package_name: 'm-node',
      npm_package_readmeFilename: 'README.md',
      npm_package_scripts_dev: 'cross-env name=source_scripts pm2 start ecosystem.config.js --env development && pm2 logs',
      npm_package_scripts_dev1: 'cross-env PORT=81 NODE_ENV=development nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js --ignore prettylist.txt --ignore port.js app',
      npm_package_scripts_dev2: 'cross-env name=origin_master pm2 start ecosystem.config.js --env development && pm2 logs',
      npm_package_scripts_dockerStart: 'PORT=81 node app',
      npm_package_scripts_serve: 'cross-env name=source_scripts pm2 start ecosystem.config.js --env production && pm2 logs',
      npm_package_scripts_serve1: 'cross-env PORT=81 NODE_ENV=production nodemon --inspect --ignore node_modules/ --ignore dbFile/ --ignore log --ignore prettylist.js --ignore prettylist.txt --ignore port.js app',
      npm_package_scripts_serve2: 'cross-env name=origin_master pm2 start ecosystem.config.js --env production && pm2 logs',
      npm_package_scripts_start: 'node app.js',
      npm_package_scripts_test: 'echo "Error: no test specified" && exit 1',
      npm_package_version: '1.0.0',
      NUMBER_OF_PROCESSORS: '8',
      OneDrive: 'C:\\Users\\xu\\OneDrive',
      OneDriveConsumer: 'C:\\Users\\xu\\OneDrive',
      OS: 'Windows_NT',
      PATH: 'D:\\source\\edu-node-github/node_modules/.bin:C:\\Users\\xu\\AppData\\Local\\Temp\\yarn--1634546396042-0.7411836837774817;D:\\source\\edu-node-github\\node_modules\\.bin;C:\\Users\\xu\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Git\\cmd;C:\\Program Files\\TortoiseGit\\bin;C:\\Program Files (x86)\\Yarn\\bin\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin\\;C:\\Users\\xu\\AppData\\Local\\Yarn\\bin;C:\\Windows\\System32;C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin;C:\\Users\\xu\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\xu\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\xu\\AppData\\Local\\gitkraken\\bin;C:\\Program Files\\@bdeefeopdev-cli\\bin;C:\\Users\\xu\\AppData\\Roaming\\npm;F:\\Program Files\\fiddler;C:\\ProgramData\\xu\\gitkraken\\bin;C:\\Users\\xu\\.deno\\bin;F:\\Users\\xu\\AppData\\Local\\Programs\\Microsoft VS Code\\bin',
      PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC',
      PM2_JSON_PROCESSING: 'true',
      PM2_USAGE: 'CLI',
      PORT: 81,
      PROCESSOR_ARCHITECTURE: 'AMD64',
      PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 158 Stepping 10, GenuineIntel',
      PROCESSOR_LEVEL: '6',
      PROCESSOR_REVISION: '9e0a',
      ProgramData: 'C:\\ProgramData',
      ProgramFiles: 'C:\\Program Files',
      'ProgramFiles(x86)': 'C:\\Program Files (x86)',
      ProgramW6432: 'C:\\Program Files',
      PROMPT: '$P$G',
      PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
      PUBLIC: 'C:\\Users\\Public',
      SESSIONNAME: 'Console',
      SystemDrive: 'C:',
      SystemRoot: 'C:\\WINDOWS',
      TEMP: 'C:\\Users\\xu\\AppData\\Local\\Temp',
      TMP: 'C:\\Users\\xu\\AppData\\Local\\Temp',
      USERDOMAIN: 'LAPTOP-4KDIA4A3',
      USERDOMAIN_ROAMINGPROFILE: 'LAPTOP-4KDIA4A3',
      USERNAME: 'xu',
      USERPROFILE: 'C:\\Users\\xu',
      windir: 'C:\\WINDOWS',
      WXDRIVE_START_ARGS: '--wxdrive-setting=0 --disable-gpu --disable-software-rasterizer --enable-features=NetworkServiceInProcess',
      YARN_WRAP_OUTPUT: 'false',
      NODE_APP_INSTANCE: 0,
      vizion_running: false,
      km_link: true,
      pm_pid_path: 'C:\\Users\\xu\\.pm2\\pids\\origin-master-0.pid',
      pm_err_log_path: 'C:\\Users\\xu\\.pm2\\logs\\origin-master-error.log',
      pm_out_log_path: 'C:\\Users\\xu\\.pm2\\logs\\origin-master-out.log',
      instances: 1,
      exec_mode: 'fork_mode',
      exec_interpreter: 'node',
      pm_cwd: 'D:\\temp\\m-node-edu\\origin\\master',
      pm_exec_path: 'D:\\temp\\m-node-edu\\origin\\master\\app.js',
      name: 'origin_master',
      node_args: [ '--inspect' ],
      env: { NODE_ENV: 'production', PORT: 81 },
      merge_logs: true,
      vizion: true,
      autorestart: true,
      watch: false,
      ignore_watch: [
        'node_modules',
        'log',
        'dbFile',
        '.git',
        'prettylist.js',
        'prettylist.txt',
        'port.js'
      ],
      instance_var: 'NODE_APP_INSTANCE',
      pmx: true,
      automation: true,
      treekill: true,
      username: 'xu',
      windowsHide: true,
      kill_retry_time: 100,
      env_production: { PORT: 81, NODE_ENV: 'production' },
      env_development: { PORT: 81, NODE_ENV: 'development' },
      namespace: 'default'
    },
    pm_id: 0,
    monit: { memory: 79605760, cpu: 62.6 }
  }
]; 
module.exports = { prettylist } 
