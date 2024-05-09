pipeline {
    agent any

    stages {
        stage('Inject .env') {
            steps {
                dir("./frontend") {
                    sh '''
                        touch .env
                        echo "DOMAIN_NAME=${DOMAIN_NAME}" >> .env
                    '''
                }
            }
        }

        stage('ECR Upload') {
            steps{
                script{
                    try {
                        sh 'aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin ${ECR_REPOSITORY_URI}'
                        sh 'docker build -t ${DOCKER_IMAGE_NAME} .'
                        sh 'docker tag ${DOCKER_IMAGE_NAME}:latest ${ECR_REPOSITORY_URI}/${DOCKER_IMAGE_NAME}:latest'
                        sh 'docker push ${ECR_REPOSITORY_URI}/${DOCKER_IMAGE_NAME}:latest'
                    } catch (error) {
                        print(error)
                        echo 'Remove Deploy Files'
                        sh "sudo rm -rf /var/lib/jenkins/workspace/${env.JOB_NAME}/*"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
            post {
                success {
                    echo "The ECR Upload stage successfully."
                }
                failure {
                    echo "The ECR Upload stage failed."
                }
            }
        }
    }
}