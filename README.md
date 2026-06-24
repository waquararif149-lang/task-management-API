# Product Listing API

## Overview

This project is a RESTful Product Listing API built using Node.js, Express.js, MongoDB, and Mongoose. 
The API provides efficient product retrieval with support for category-based filtering and cursor-based pagination. 
The design focuses on scalability and performance for handling large product datasets.

---

## Features

* Product retrieval API
* Category-based filtering
* Cursor-based pagination
* MongoDB indexing for optimized query performance
* Seed script for generating sample product data
* Modular architecture following Controller-Service-Repository pattern

---

## Technology Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Project Structure

project-root/

├── src/

│   ├── controllers/

│   ├── services/

│   ├── repositories/

│   ├── models/

│   ├── routes/

│   └── config/

├── scripts/

├── package.json

└── README.md

---

## Installation

### Clone Repository

git clone <repository-url>

cd product-listing-api

### Install Dependencies

npm install

### Environment Variables

Create a `.env` file in the root directory and configure:

PORT=5000

MONGO_URI=your_mongodb_connection_string

### Start Application

npm run dev

---

## Database Seeding

To generate sample products:

npm run seed

This script inserts sample product records into MongoDB for testing and development purposes.

---

## API Endpoints

### Get Products

Endpoint:

GET /api/products

Query Parameters:

| Parameter | Description                 |
| --------- | --------------------------- |
| limit     | Number of products per page |
| category  | Filter products by category |
| cursor    | Cursor for pagination       |

Example:

GET /api/products?limit=25

GET /api/products?limit=25&category=Electronics

GET /api/products?limit=25&cursor=<cursor_value>

---

## Pagination Strategy

The API uses cursor-based pagination instead of skip/limit pagination.

Benefits:

* Better performance on large datasets
* Consistent results during concurrent inserts
* Reduced database scanning

Pagination is implemented using product creation timestamps and unique identifiers.

---

## Database Optimization

The following optimizations have been implemented:

* Indexed fields for faster querying
* Cursor-based pagination
* Query result limiting
* Efficient sorting strategy

---

## Sample Response

{
"success": true,
"data": [
{
"_id": "...",
"name": "Sample Product",
"price": 499
}
],
"nextCursor": {
"_id": "...",
"created_at": "..."
}
}

---

## Conclusion

This project demonstrates the implementation of a scalable product listing service using MongoDB and Express.js, 
focusing on efficient pagination and query optimization techniques.
