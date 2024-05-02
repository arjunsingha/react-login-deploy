# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

CICD: https://www.youtube.com/watch?v=Y9CKTQodhfw

>> create S3 bucket (in this case name: react-login-deploy-cicd)
>> give public access
>> add aws bucket policy

-- aws bucket policy

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}

>> goto CodeBuild
>> Create (build) project
>> connect to the code repo, in this case github
>> Build spec - Insert build commands
    --sample build commands--
version: 0.2

phases:
  install:
    runtime-versions:
      nodejs: 20
   
    commands:
        # install npm
        - npm ci
       
  build:
    commands:
        # run build script
        - npm run build
     
artifacts:
  # include all files required to run the application
  files:
    - '**/*'
  base-directory: 'dist'
===========================

>> creat build

>> go to codepipeline
>> give name
choose source provider
