del .\dist\

mkdir .\dist\assets

copy  .\assets\portraitCircle.svg .\dist\assets\portraitCircle.svg
copy  .\assets\resume.pdf .\dist\assets\resume.pdf

parcel index.html