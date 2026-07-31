KING TECH SAFE MIGRATION 2.4

This version prevents any remote download or automatic upload until the first migration is verified.

Safety rules:
- Existing local data is never cleared during migration.
- A local checkpoint is saved before migration and before every shared download.
- Migration is marked complete only when Customers, Accounts, Payments and Expenses counts match exactly.
- Empty shared lists cannot overwrite non-empty local lists.
- No automatic sync starts before verified migration.

IMPORTANT: Replace Code.gs in Apps Script and deploy a NEW VERSION before updating the website files.
