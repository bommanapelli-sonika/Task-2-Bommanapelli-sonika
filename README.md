
# Job Portal API

A simple REST API built using **Node.js**, **Express.js**, and **CORS** for managing job listings. This project provides endpoints to create, read, update, and delete job data.

## Features

- View all available jobs
- Get a job by ID
- Add new jobs
- Update existing jobs
- Delete jobs
- Enable cross-origin requests using CORS
- JSON-based API responses

## Technologies Used

- Node.js
- Express.js
- CORS

## Project Structure

```

job-portal-api/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md

````

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/job-portal-api.git
````

2. Navigate to the project folder:

```bash
cd job-portal-api
```

3. Install dependencies:

```bash
npm install
```

## Required Packages

```bash
npm install express cors
```

## Running the Application

Start the server using:

```bash
node server.js
```

If you have Nodemon installed:

```bash
npx nodemon server.js
```

The server will run on:

```text
http://localhost:5000
```

Console output:

```text
Server Running On Port 5000
```

## API Endpoints

### Get All Jobs

```http
GET /jobs
```

### Get Job by ID

```http
GET /jobs/:id
```

### Add a New Job

```http
POST /jobs
```

Sample Request Body:

```json
{
  "title": "Frontend Developer",
  "company": "ABC Technologies",
  "location": "Hyderabad",
  "salary": "₹6 LPA"
}
```

### Update a Job

```http
PUT /jobs/:id
```

Sample Request Body:

```json
{
  "title": "Senior Frontend Developer",
  "company": "ABC Technologies",
  "location": "Hyderabad",
  "salary": "₹8 LPA"
}
```

### Delete a Job

```http
DELETE /jobs/:id
```

## Testing the API

You can test the endpoints using:

* Postman
* Thunder Client
* Insomnia

Base URL:

```text
http://localhost:5000
```

## Example Response

```json
[
  {
    "id": 1,
    "title": "Frontend Developer",
    "company": "ABC Technologies",
    "location": "Hyderabad",
    "salary": "₹6 LPA"
  }
]
```

## Future Improvements

* Connect with MongoDB database
* Add user authentication and authorization
* Implement search and filtering
* Add pagination
* Deploy using Render or Railway
## Live Demo

🔗 

## Author

Bommanapelli Sonika

