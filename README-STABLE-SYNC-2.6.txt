KING TECH SUBSCRIPTION MANAGER — STABLE SYNC 2.6

This build removes the duplicated inline application code and loads one tested app.js file as the single source of truth.

Fixes:
- Join Shared Database no longer fails with apiJsonp/localCounts missing errors.
- Existing device data is checkpointed before a shared download.
- A device cannot join an empty shared customer database.
- Migrated/joined devices refresh every 20 seconds.
- Changes made after joining upload to the shared spreadsheet.
- New service-worker cache forces the corrected files to load.

Apps Script: keep the already deployed Code.gs from version 2.5. No new Apps Script deployment is required for this frontend fix.
