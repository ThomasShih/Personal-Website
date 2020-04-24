del /F /Q .\buildDist
mkdir .\buildDist\assets
copy  .\assets\* .\buildDist\assets\*
parcel build -d buildDist index.html
