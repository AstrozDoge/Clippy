<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Content</title>
</head>
<body>
    <div id="content"></div>

    <script>
        // Function to extract query parameter from URL
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        // Get the ID from the URL
        var id = getParameterByName('id');

        // Fetch content based on the ID (you'll need to implement this part)
        // For demonstration purposes, we'll just display a hardcoded message
        var content = 'This is some dynamically hosted content for ID: ' + id;

        // Display the content on the page
        document.getElementById('content').innerText = content;
    </script>
</body>
</html>
