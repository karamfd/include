# Import HTML

A script for importing HTML files in HTML

## How it works

- **include.js** file must be inside the `<head>` element of all html files.
- Requires a server to avoid getting a **CORS policy error**

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <script src="../include.js"></script>
  </head>
  <body>
    <include src="nav.html"></include>
  </body>
</html>
```
