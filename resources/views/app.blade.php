<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React App</title>
    @vite('resources/css/app.css') <!-- Include Tailwind CSS -->
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body class="font-sans antialiased">
    <div id="app"></div>
</body>
</html>
