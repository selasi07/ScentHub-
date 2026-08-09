# Sprint 3 Review Report

## Sprint Goal

The goal of Sprint 3 was to improve the reliability, security readiness, maintainability, and operational visibility of the ScentHub application before the release candidate stage.

The sprint focused on:
- Improving backend logging and failure visibility.
- Reviewing security practices.
- Performing dependency vulnerability analysis.
- Improving repository security practices.

## Sprint Period

**Sprint:** Sprint 3  
**Dates:** 1 August 2026 – 7 August 2026

## Sprint Backlog

| Item | Status | Description |
|---|---|---|
| Improve backend logging | Completed | Added startup, route and error logging |
| Review database security | Completed | Checked database connection handling and SQL queries |
| Dependency security audit | Completed | Ran npm audit and resolved vulnerabilities |
| Repository security improvement | Completed | Added .gitignore and removed node_modules tracking |
| AI usage documentation | Completed | Updated AI_USAGE.md |
| Staging deployment evidence | Completed | Added deployment evidence |

## Implemented Functionality

### Backend
- Improved server startup logging.
- Improved database connection error reporting.
- Improved CRUD route visibility through logging.

### Database
ScentHub continues to use SQLite for inventory management.

Stored product attributes:
- id
- perfume_name
- brand
- category
- price
- quantity

### Security
- Dependency vulnerability scanning completed.
- Dependency updates completed.
- Repository ignore rules implemented.
- Database operations reviewed.

## Requirements and Backlog Changes

No major functional user stories were added or removed during Sprint 3.

The focus shifted from feature implementation to system quality and release readiness.

Changes included:
- Logging improvements for better debugging.
- Dependency audit to identify security risks.
- Repository cleanup to prevent unnecessary files from being committed.

## Engineering Evidence

### Testing
- Manual API testing performed.
- CRUD operations verified.
- Dependency audit performed.

### CI
GitHub Actions was reviewed and CI was maintained as part of the release-readiness process.

### Staging Deployment

ScentHub staging deployment:

https://scenthub-h2er.onrender.com/

Deployment evidence is included in this folder as `dashboardrender.png`.

## Known Defects and Technical Debt

| Issue | Impact | Future Improvement |
|---|---|---|
| No authentication system | No user access control | Add login and roles |
| SQLite local database | Limited scalability | Move to production database |
| Limited automated tests | Less regression coverage | Expand test suite |
| No cloud monitoring | Limited production visibility | Add production monitoring |

## Metrics and Reflection

Sprint 3 focused primarily on engineering quality, security validation and release readiness rather than large user-facing features.

Previous sprint velocities:
- Sprint 1: 12 story points
- Sprint 2: 22 story points

Sprint 3 used engineering tasks rather than the same feature story-point approach.

## Lessons Learned

1. Security reviews should be continuous.
2. Better logging improves debugging.
3. Repository hygiene matters.
4. Dependency management should be performed regularly.

## Next Sprint Improvements

- Expand automated testing.
- Add authentication and authorization.
- Improve production monitoring.
- Continue security reviews.
- Improve deployment reliability.

## Contribution Summary
|Team member| Role|
|---|---|
|Kelly Kofi Adoboe|Database/security improvements,Logging improvements and Documentatiom and repository organization|

