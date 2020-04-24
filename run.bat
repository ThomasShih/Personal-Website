del /F .\dist

mkdir .\dist\assets

copy  .\assets .\dist\assets
parcel index.html