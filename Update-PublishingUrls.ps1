$ErrorActionPreference = 'Stop'

# The script operates only on the project folder containing it.
$projectRoot = $PSScriptRoot
if (-not (Test-Path -LiteralPath (Join-Path $projectRoot 'index.html'))) {
    throw 'Place this script beside index.html in your official project folder before running it.'
}

$oldBase = 'https://emgpsd.github.io/wede5020-2026-part-3-st10479746/'
$newBase = 'https://st10479746.github.io/alexandra-digital-history-archive/'
$utf8 = New-Object System.Text.UTF8Encoding($false)

# Root page metadata, sitemap records and documentation share the public base URL.
$files = @(Get-ChildItem -LiteralPath $projectRoot -File | Where-Object {
    $_.Extension -in @('.html', '.xml') -or $_.Name -in @('robots.txt', 'README.md')
})
$docsPath = Join-Path $projectRoot 'docs'
if (Test-Path -LiteralPath $docsPath) {
    $files += @(Get-ChildItem -LiteralPath $docsPath -File -Recurse | Where-Object {
        $_.Extension -in @('.md', '.csv', '.txt') -and $_.Name -ne 'README-HISTORY.md'
    })
}

$changed = 0
foreach ($file in $files) {
    $original = [System.IO.File]::ReadAllText($file.FullName)
    $updated = $original.Replace($oldBase, $newBase)
    if ($updated -cne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $updated, $utf8)
        Write-Output ('Updated: ' + $file.FullName.Substring($projectRoot.Length + 1))
        $changed++
    }
}
Write-Output ('Completed. Files changed: ' + $changed)
Write-Output ('Publishing address: ' + $newBase)
