del /F /Q .\dist\

mkdir .\dist\assets

copy  .\assets\portraitCircle.svg .\dist\assets\portraitCircle.svg
copy  .\assets\resume.pdf .\dist\assets\resume.pdf
copy  .\assets\GitHubIcon.svg .\dist\assets\GitHubIcon.svg
parcel build index.html