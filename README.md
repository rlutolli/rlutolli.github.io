## rlutolli.dev

## Clearly this is cloned**

Personal website with minimal design and clean interactions. ⚡

## Deployment Instructions

### How to Deploy to GitHub Pages

1. **Create a GitHub Repository**
   - Create a new repository on GitHub (e.g., `yourusername.github.io` or any name you prefer)
   - Make it public

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set the source to "GitHub Actions"

4. **Adjust Configuration (if needed)**
   - If you're not using a custom domain, uncomment the `basePath` line in `next.config.js` and set it to your repository name
   - If you're using a custom domain, add it in the GitHub Pages settings

5. **Wait for Deployment**
   - GitHub Actions will automatically build and deploy your site
   - You can check the progress in the Actions tab of your repository

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
Enjoy
