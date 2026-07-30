# Sprint 2 Review Report

## Project

ScentHub Inventory Management System

## Sprint

Sprint 2

## Sprint Duration

25 July 2026 – 31 July 2026

---

# A. Sprint Summary

## Sprint Goal

The goal of Sprint 2 was to improve the ScentHub Inventory Management System by enhancing the user interface, implementing additional inventory management features, improving data validation, and increasing overall software quality through testing and code refinement.

---

## Sprint Backlog

| User Story                       | Planned | Status                   |
| -------------------------------- | ------- | ------------------------ |
| Add Product                      | Yes     |  Completed              |
| Edit Product                     | Yes     |  Completed              |
| Delete Product                   | Yes     |  Completed              |
| Search Products                  | Yes     |  Completed              |
| Dashboard Statistics Cards       | Yes     |  Completed              |
| CSV Export                       | Yes     |  Completed              |
| Ghana Cedi Currency Formatting   | Yes     |  Completed              |
| Input Validation                 | Yes     |  Completed              |
| Category Improvements            | Yes     |  Completed              |
| Product Image Upload             | Yes     |  Carried Over           |
| User Authentication Improvements | No      | Added to Product Backlog |

---

## Summary of Implemented Functionality

At the end of Sprint 2, the system provides:

* Product creation
* Product editing
* Product deletion
* Product search
* Dashboard statistics
* Inventory value calculation
* CSV export functionality
* Ghana Cedi currency formatting
* Input validation
* Improved user interface styling

---

## Repository Evidence

* Sprint 2 commits
* GitHub Issues
* Pull Requests
* Documentation in `docs/06_sprint_2_quality`
* Release Tag **v0.2-beta**

---

# B. Requirements and Backlog Changes

## Changes Made During Sprint

### Added

* Dashboard statistics cards
* CSV export feature
* Ghana Cedi currency formatting
* Client-side validation

### Deferred

* Product image upload
* Customer management
* Authentication system

---

## Reason for Changes

The team prioritized completion of the core inventory management workflow before implementing advanced features. Deferred functionality will be addressed in future iterations.

---

## Product Backlog Impact

Deferred features remain in the product backlog and have been reprioritized for future sprints.

---

# C. Engineering Evidence

## Pull Requests

The sprint included multiple pull requests covering:

* CRUD improvements
* Dashboard enhancements
* Validation updates
* CSV export functionality
* User interface improvements

---

## Testing

Testing activities included:

* Manual functional testing
* CRUD verification
* API testing
* Dashboard validation
* Search testing
* CSV export verification
* Input validation testing

Detailed test cases are available in **Test_Plan.md**.

---

## Deployment Evidence

The application was demonstrated locally using:

* Node.js
* Express.js
* SQLite
* HTML
* CSS
* JavaScript

Screenshots of the working application are included in the final submission.

---

## Known Defects

* Product image upload has not yet been implemented.
* Authentication has not yet been implemented.
* Pagination for large inventories is not available.

---

## Technical Debt

Current technical debt includes:

* Improved modular JavaScript architecture
* Enhanced API error handling
* Authentication and authorization
* Customer management functionality

---

# D. Metrics and Reflection

## Story Points

| Metric    | Story Points |
| --------- | -----------: |
| Planned   |           26 |
| Completed |           22 |

---

## Sprint Velocity

| Sprint   | Story Points Completed |
| -------- | ---------------------: |
| Sprint 1 |                     12 |
| Sprint 2 |                     22 |


## Lessons Learned

Lessons learned during Sprint 2:

* Validation should be implemented early rather than added after functionality is complete.
* Smaller, frequent Git commits simplify collaboration and debugging.
* User interface improvements significantly improve usability.
* Continuous testing reduces the likelihood of regressions.

---

## Team Contribution Summary

| Team Member   | Contribution                                              |
| ------------- | --------------------------------------------------------- |
| Kelly Adoboe  | Backend development, CRUD operations,frontend implememntation, validation,documentation, testing,review and quality assurance|



---

# E. Client Feedback

## Client Review

The client reviewed the Sprint 2 prototype and provided positive feedback regarding:

* Improved dashboard design
* Easier inventory management
* Clear navigation
* Faster workflow

---

## Requested Improvements

The client suggested future enhancements including:

* Product image upload
* Customer management
* Sales recording
* Authentication and user roles

---

## Questions for the Next Client Meeting

* Should different user roles have different permissions?
* Should products support multiple images?
* Should inventory reports be printable or downloadable as PDF?

---

# F. Test Plan

A detailed testing strategy has been documented separately in **Test_Plan.md**.

Testing covered:

* Unit Testing
* API Testing
* Integration Testing
* User Interface Testing
* Manual Functional Testing

Business rules, execution steps, testing tools, and coverage goals are documented in the accompanying test plan.

---

# G. Quality Evidence

Quality evidence for Sprint 2 is documented in the following files:

* **Quality_Evidence.md**
* **Bug_Log.md**
* **Test_Plan.md**

These documents include:

* Test execution summary
* Bug tracking
* Code review findings
* Refactoring completed during the sprint
* Technical debt


---

# Sprint Outcome

Sprint 2 successfully expanded the functionality of the ScentHub Inventory Management System and  improved software quality through structured testing, validation, and documentation. Core inventory management features are stable and suitable for demonstration. Remaining enhancements have been documented in the product backlog for future development.

---

