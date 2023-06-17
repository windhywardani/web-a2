<!DOCTYPE html>
<html>
<head>
  <title>Halaman Web Windhy Kusuma Wardani</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    
    h1 {
      color: #333;
    }
    
    p {
      color: #666;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    .button:hover {
      background-color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Selamat Datang di Halaman Web Windhy Kusuma Wardani</h1>
    <p>Klik tombol di bawah ini untuk mengubah teks:</p>
    <p id="myText">Ini adalah teks awal.</p>
    <button class="button" onclick="changeText()">Ubah Teks</button>
  </div>
  
  <script>
    function changeText() {
      var text = document.getElementById("myText");
      text.innerHTML = "Teks telah diubah!";
    }
  </script>
</body>
</html>
