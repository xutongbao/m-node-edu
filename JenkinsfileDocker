pipeline {
    agent {
        docker {
            image 'node:12'
            args '-p 81:81'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('install') {
            steps {
                sh 'yarn'
            }
        }
        stage('server') {
            steps {
                sh 'yarn dockerStart'
            }
        }
    }
}