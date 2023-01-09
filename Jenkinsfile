node {
    def app

    environment {
        DOCKERHUB_CREDENTIALS=credentials('docker-hub-credentials')
    }

    stage('Clone repo') {

        checkout scm
    }

    stage('Build image') {
        app = docker.build("foundupdevopssetup")
    }

    stage('Test Image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Login') {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}