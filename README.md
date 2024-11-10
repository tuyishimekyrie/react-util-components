# Getting Started with React + TypeScript

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="60px" alt="React" style="margin: 0 10px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="60px" alt="TypeScript" style="margin: 0 10px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="60px" alt="Vite" style="margin: 0 10px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" width="60px" alt="React Router" style="margin: 0 10px"/>
</div>

## Prerequisites

1. **Install Required Tools**
   - [Git](https://git-scm.com/downloads)
   - [Node.js](https://nodejs.org/) (v16 or higher)
   - A code editor (e.g., VS Code)

## Project Setup

### 1. Create New Project

```bash
# Create project directory
mkdir my-react-app
cd my-react-app

# Initialize new Vite project with React + TypeScript
npm create vite@latest . -- --template react-ts

# Install dependencies
npm install
```

### 2. Additional Dependencies

```bash
# Install common dependencies
npm install react-router-dom @types/react-router-dom    # Routing
npm install axios                                       # API calls
npm install tailwindcss postcss autoprefixer           # Styling
```

### 3. Git Setup

```bash
# Initialize git repository
git init

# Create .gitignore file
cat > .gitignore << EOL
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
EOL

# For existing repository
git clone <repository-url>
cd <repository-name>
npm install
```

### 4. Development Workflow

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 5. Git Commands

```bash
# Check status
git status

# Add changes
git add .                                  # Add all changes
git add <file-name>                       # Add specific file

# Commit changes
git commit -m "descriptive commit message"

# Push changes
git push origin main                      # Push to main branch
git push origin <branch-name>             # Push to specific branch
```

## Project Structure

```
my-react-app/
├── src/
│   ├── assets/           # Static assets (images, fonts)
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom hooks
│   ├── services/        # API services
│   ├── types/           # TypeScript types/interfaces
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
├── public/              # Public assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # Project documentation
```

## Best Practices

1. **Code Organization**
   - Use meaningful component names
   - Keep components small and focused
   - Implement proper TypeScript types
   - Follow consistent naming conventions

2. **Git Workflow**
   - Write clear commit messages
   - Create feature branches for new work
   - Review changes before committing
   - Keep commits atomic and focused

3. **Development**
   - Use environment variables for sensitive data
   - Implement error handling
   - Write maintainable and documented code
   - Follow ESLint and Prettier configurations

## Common Commands

```bash
# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout <branch-name>

# Update from remote
git pull origin main

# View commit history
git log --oneline

# Undo last commit (soft)
git reset --soft HEAD~1
```
