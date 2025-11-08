npx create-next-app@latest my-app --ts --tailwind --app
cd my-app
git init
git add .
git commit -m "init"
# create a repo on GitHub (empty), then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
