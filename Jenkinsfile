pipeline {
    agent any
    environment { 
        CI = 'true'
    }
    stages {
        stage('build') {         
            steps {
                bat "echo ${branch}"
                bat 'yarn -v'
                bat './build.bat'
            }
        }
    }
}