del /F /Q .\dist\

mkdir .\dist\assets

copy  .\assets\portraitCircle.svg .\dist\assets\portraitCircle.svg
copy  .\assets\resume.pdf .\dist\assets\resume.pdf
copy  .\assets\GitHubIcon.svg .\dist\assets\GitHubIcon.svg
copy  .\assets\graph.svg .\dist\assets\graph.svg
parcel index.html