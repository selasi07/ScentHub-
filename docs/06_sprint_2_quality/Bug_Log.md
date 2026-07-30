# Bug Log

## Project

ScentHub Inventory Management System

## Sprint

Sprint 2

---

| Bug ID | Defect | Severity | Owner | Status | Resolution |
|--------|---------|----------|--------|---------|------------|
| BUG-001 | Dashboard inventory value displayed incorrect totals | Medium | Kelly Adoboe | Closed | Fixed calculation logic in JavaScript |
| BUG-002 | Ghana Cedi symbol not displaying correctly | Low | Kelly Adoboe | Closed | Updated currency formatting to use ₵ |
| BUG-003 | Deleted product IDs were not reused | Low | Team | Closed | Accepted SQLite AUTOINCREMENT behaviour |
| BUG-004 | CSV export produced inconsistent formatting | Medium | Kelly Adoboe | Closed | Updated CSV generation function |
| BUG-005 | Empty product name could be submitted | High | Kelly Adoboe | Closed | Added frontend validation |
| BUG-006 | Negative price accepted | High | Kelly Adoboe | Closed | Added validation before submission |
| BUG-007 | Negative quantity accepted | High | Kelly Adoboe | Closed | Added validation before submission |
| BUG-008 | Dashboard statistics not refreshing after CRUD operations | Medium | Kelly Adoboe | Closed | Statistics refresh called after every update |
| BUG-009 | Search results not updating after delete | Medium | Kelly Adoboe | Closed | Reloaded product list after deletion |
| BUG-010 | Product image upload postponed | Low | Team | Open | Scheduled for future sprint |

---

## Summary

- Total Bugs: 10
- Closed: 9
- Open: 1

The remaining open issue (product image upload) was intentionally deferred to a future sprint due to time constraints and prioritization of core inventory management features.
