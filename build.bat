del /F /Q .\buildDist
mkdir .\buildDist\assets
copy  .\assets\* .\buildDist\assets\*
copy .\_redirects .\buildDist\_redirects
parcel build -d buildDist index.html
