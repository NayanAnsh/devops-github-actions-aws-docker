# Devops_project_github_actions
 
# CI/CD Pipeline for Node.js & React App

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/NayanAnsh/devops-github-actions-aws-docker/.github%2Fworkflows%2Faws.yml)

## Project Overview
This project sets up a CI/CD pipeline using GitHub Actions. The pipeline:
- Containerizes a **Node.js + React** web app in a GitHub virtual machine.
- Pushes the **Docker image** to **AWS Elastic Container Registry (ECR)**.
- Deploys the container to **AWS ECS (EC2-based)**.
- Utilizes an **Application Load Balancer (ALB)** and an **Auto Scaling Group** for high availability.

## Tech Stack
- **Frontend**: React, Axios, Handlebars
- **Backend**: Node.js, Express.js, TypeScript
- **Infrastructure**: GitHub Actions, Docker, AWS ECS (EC2), ECR, ALB

## Repository Structure
```
/backend    → Contains Express.js API
/frontend   → React app
/.github/workflows  → CI/CD workflow configuration
Dockerfiles → For backend/frontend
```

## Environment Variables
The app requires an `.env` file with the following:
```
PORT={NUMBER}  
SECRET_MESSAGE={MESSAGE TO DISPLAY}  
USERNAME={YOUR_USERNAME}  
PASSWORD={YOUR_PASSWORD}  
```

## Deployment & Live Website
[Live Website](http://alb-t3-mid-984506528.ap-south-1.elb.amazonaws.com/) 
Note: The link may not work as the architecture might be scaled down to zero to save costs

## CI/CD Workflow
1. **Build & Test**: GitHub Actions runs tests and builds Docker images.
2. **Containerization**: Docker images for backend and frontend are created.
3. **Push to ECR**: The images are pushed to AWS Elastic Container Registry.
4. **Deploy to ECS**: The containerized app is deployed on AWS ECS (EC2-based).
5. **Load Balancing & Scaling**: ALB distributes traffic, and Auto Scaling ensures availability.

## Badges & Shields
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/your-repo-name/ci-cd-pipeline.yml)
![Docker Image Size](https://img.shields.io/docker/image-size/your-docker-image/latest)

## Notes
- No local setup instructions are provided since deployment is automated.

---
✍️ Maintained by [Nayan](https://github.com/NayanAnsh)
