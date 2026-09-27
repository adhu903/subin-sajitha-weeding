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

# In couple-illustration.jpg (480x720):
# The couple is roughly in the center: x=70 to 390, y=180 to 520
Crop-Image "assets/images/couple-illustration.jpg" "assets/images/couple-closeup.jpg" 80 150 320 380
Crop-Image "assets/images/couple-illustration.jpg" "assets/images/groom-subin.jpg" 80 170 170 240
Crop-Image "assets/images/couple-illustration.jpg" "assets/images/bride-sajitha.jpg" 220 190 170 240

# In invitation-en.jpg (540x768):
# Ganesha icon is near top center: x=220, y=60, w=100, h=80
Crop-Image "assets/images/invitation-en.jpg" "assets/images/ganesha-symbol.jpg" 215 50 110 90

# Floral header garland from top of card-english.jpg
Crop-Image "assets/images/card-english.jpg" "assets/images/floral-banner.jpg" 490 0 530 180
