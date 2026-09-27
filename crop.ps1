Add-Type -AssemblyName System.Drawing

function Crop-Image([string]$sourcePath, [string]$destPath, [int]$x, [int]$y, [int]$w, [int]$h) {
    $src = [System.Drawing.Bitmap]::FromFile((Resolve-Path $sourcePath))
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $crop = $src.Clone($rect, $src.PixelFormat)
    $crop.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $crop.Dispose()
    $src.Dispose()
    Write-Host "Cropped $destPath successfully"
}

Crop-Image "assets/images/save-the-date-card.jpg" "assets/images/couple-illustration.jpg" 530 30 480 720
Crop-Image "assets/images/save-the-date-card.jpg" "assets/images/calendar-graphic.jpg" 20 40 450 710
Crop-Image "assets/images/card-english.jpg" "assets/images/monogram-arch.jpg" 30 50 440 700
Crop-Image "assets/images/card-english.jpg" "assets/images/invitation-en.jpg" 480 0 540 768
Crop-Image "assets/images/card-malayalam.jpg" "assets/images/invitation-ml.jpg" 480 0 540 768
