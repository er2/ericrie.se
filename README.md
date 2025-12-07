# ericrie.se

Static site built with 11ty.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment

Deploy to Digital Ocean App Platform:
- Build command: `npm run build`
- Output directory: `_site`

## Adding Posts

Add markdown files to `src/posts/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: 2025-12-07
---

Your content here...
```
