@echo off
cd /d "D:\CODING\丘小天的炒股生活\my-stock-site"
git add .
git commit -m "feat: add notify.json to lxd3 directory"
git pull origin main --rebase
git push origin main
pause