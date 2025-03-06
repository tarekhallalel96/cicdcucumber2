pipeline {
    agent {
        docker {
            image 'cypress/browsers'
        }
     }

    parameters {
        choice(name:'ENV',choices:['dev','staging','prodction'],description:'Environement')
        choice(name:'TEST_TYPE',choices:['regression','smoke','sanity'],description:'testing')
    }
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                
                sh "chmod +x ./bashs/*.sh"
                sh "./bashs/${params.TEST_TYPE}.sh"

             }
        }
        
        stage('Run Cypress Tests') {
            steps {
                
                sh "npx cypress run"
             }
        }
        
    }  
    post {
        always {
        cucumber buildStatus: 'UNSTABLE',
                failedFeaturesNumber: 1,
                failedScenariosNumber: 1,
                skippedStepsNumber: 1,
                failedStepsNumber: 1,
                classifications: [
                        [key: 'Commit', value: '<a href="${GERRIT_CHANGE_URL}">${GERRIT_PATCHSET_REVISION}</a>'],
                        [key: 'Submitter', value: '${GERRIT_PATCHSET_UPLOADER_NAME}']
                ],
                reportTitle: 'My report',
                fileIncludePattern: '**/*.cucumber.json',
                sortingMethod: 'ALPHABETICAL',
                trendsLimit: 100
         }
    }
 
}