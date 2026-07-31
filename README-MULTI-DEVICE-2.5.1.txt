King Tech Subscription Manager 2.5.1

Fixes the additional-device Join Shared Database error: apiJsonp is not defined.

Update the website files and push to GitHub. No Apps Script Code.gs change is required for this patch if version 2.5 is already deployed.

Safety:
- Join only downloads after confirming the shared database contains customers.
- A local checkpoint is saved before replacing data on the joining device.
- The original migrated device data is not changed by this patch.
