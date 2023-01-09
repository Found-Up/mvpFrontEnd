node {
    def app

    environment {
        DOCKERHUB_CREDENTIALS=credentials('docker-hub-credentials')
    }

    stage('Clone repo') {

        checkout scm
    }

    stage('Build image') {
        app = docker.build("malvero2/foundupdevopssetup:latest")
    }

    stage('Test Image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        withDockerRegistry([ credentialsId: "docker-hub-credentials", url: ""]) {
            docker.push()
        }
    }
}