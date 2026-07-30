# Test Plan

## Project

ScentHub Inventory Management System

## Sprint

Sprint 2

## Objective

The purpose of this test plan is to verify that Sprint 2 works correctly and satisfies the user stories.

---

# Testing Scope

The following testing levels were performed:

* Unit Testing
* API Testing
* User Interface Testing
* Integration Testing
* Manual Functional Testing

---

# Features Tested

* Add Product
* Edit Product
* Delete Product
* Search Products
* Dashboard Statistics
* CSV Export
* Ghana Cedi Currency Formatting
* Input Validation

---

# Test Environment

Operating System:
Windows 10

Backend:
Node.js
Express.js

Database:
SQLite

Frontend:
HTML
CSS
JavaScript

Browser:
Google Chrome

---

# Test Cases

| Test ID | Requirement          | Expected Result                | Status |
| ------- | -------------------- | ------------------------------ | ------ |
| TC-01   | Add Product          | Product successfully added     | Pass   |
| TC-02   | Edit Product         | Product updated correctly      | Pass   |
| TC-03   | Delete Product       | Product removed from inventory | Pass   |
| TC-04   | Search Product       | Matching products displayed    | Pass   |
| TC-05   | Dashboard Statistics | Values update automatically    | Pass   |
| TC-06   | Export CSV           | CSV downloads successfully     | Pass   |
| TC-07   | Empty Product Name   | Validation message displayed   | Pass   |
| TC-08   | Negative Price       | Product rejected               | Pass   |
| TC-09   | Negative Quantity    | Product rejected               | Pass   |
| TC-10   | Ghana Cedi Display   | Prices displayed using ₵       | Pass   |

---

# Business Rules

* Product name is required.
* Product price must be greater than or equal to zero.
* Product quantity must be greater than or equal to zero.
* Product IDs remain unique.
* Dashboard statistics update after CRUD operations.

---

# Testing Tools

* VS Code
* Node.js
* Express.js
* SQLite
* Google Chrome
* GitHub

---

# Running the Tests

1. Install project dependencies using `npm install`.
2. Start the backend server with `npm start`.
3. Open the frontend in a web browser.
4. Execute each test case manually.
5. Confirm that the observed results match the expected results.

---

# Coverage Goal

The project aims for at least 80% coverage of business logic through manual and automated testing where applicable.

