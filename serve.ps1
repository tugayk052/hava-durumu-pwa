$root = "C:\Users\user\Desktop\claude deneme"
$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$port/weather.html"

$mime = @{
  ".html" = "text/html"
  ".css"  = "text/css"
  ".js"   = "application/javascript"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".ico"  = "image/x-icon"
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $request = $context.Request
  $response = $context.Response
  try {
    $relPath = $request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($relPath)) { $relPath = "weather.html" }
    $filePath = Join-Path $root $relPath
    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $contentType = $mime[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $response.ContentType = $contentType
      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $response.StatusCode = 404
    }
  } catch {
  } finally {
    $response.OutputStream.Close()
  }
}
