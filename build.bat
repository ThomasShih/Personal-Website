del /F /Q .\build

copy .\* .\build

cd .\build

del /F /Q .\dist
mkdir .\dist\assets

copy  .\assets\portraitCircle.svg .\dist\assets\portraitCircle.svg
copy  .\assets\resume.pdf .\dist\assets\resume.pdf
copy  .\assets\GitHubIcon.svg .\dist\assets\GitHubIcon.svg

find -name "*.html" -type f -exec sed -i 's#react.development.js#react.production.min.js' {} +
find -name "*.html" -type f -exec sed -i 's#react-dom.development.js#react-dom.production.min.js' {} +

parcel build index.html