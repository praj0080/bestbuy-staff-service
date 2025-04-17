# bestbuy-staff-service
Microservice for staff CRUD operations

# 🛠️ Best Buy Staff-Service Microservice
A straightforward cloud-native microservice developed for Best Buy's internal system may be found in this repo. With complete CRUD functionality, the service's RESTful API enables personnel to organize data.

## 🧾 Features
-CRUD (create, read, update, and delete) techniques for personnel files
- Internal data storage (no need for an external database)
-Adheres to the 12-aspect app guidelines
-Docker-based containerization with Azure Kubernetes Service (AKS) deployment
-A CI/CD workflow that has been automated using GitHub Actions

## 📦 Staff Info Structure

Each staff member has the following fields:

| Field       | Description                             |
|-------------|-----------------------------------------|
| `id`        | Unique identifier                       |
| `name`      | Full name                               |
| `position`  | Job role/position                       |
| `department`| Department they belong to               |
| `email`     | Contact email                           |
| `phone`     | Contact phone number                    |

## 🚀 API Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/staff`         | Get all staff       |
| GET    | `/api/staff/:id`     | Get staff by ID     |
| POST   | `/api/staff`         | Create new staff    |
| PUT    | `/api/staff/:id`     | Update staff        |
| DELETE | `/api/staff/:id`     | Delete staff        |

Example `POST` request body:
```json
{
  "id": "101",
  "name": "John Doe",
  "position": "Sales Associate",
  "department": "Sales",
  "email": "john.doe@bestbuy.com",
  "phone": "123-456-7890"
} ```

# Docker Image

Docker Hub: [bestbuy-staff-service](https://hub.docker.com/repository/docker/praj0080/bestbuy-staff-service/general)

## Deployment on AKS
LoadBalancer on Azure Kubernetes Service (AKS) is implemented to expose the application, which is deployed using Kubernetes.

Kubernative file: aks-deployment.yaml

To apply manually
```
kubectl apply -f aks-deployment.yaml
```
## CI/CD Pipeline
A GitHub Actions process is incorporated into the work in order to automate the build, test, and deployment phases.

.github/workflows/ci_cd.yaml is the workflow file.

This process:

creates the Docker image

sends it to Docker Hub.

deploys into AKS (if secrets are set up).

#  Technical Issues Encountered

-Authentication problems caused Docker push unsuccessfully at first; this was fixed by relogging into the Docker CLI.
-It took a few minutes to determine the LoadBalancer IP on AKS (usually for Azure).
-Throughout the CI/CD secret setup process, Azure CLI required to be re-authenticated.

