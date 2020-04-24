del /F /Q.\dist
mkdir .\buildDist\assets
copy  .\assets\* .\buildDist\assets\*
parcel index.html