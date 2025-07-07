# Anoushkha's Portfolio Website

## Overview

This is a personal portfolio website for Anoushkha, an AI & ML Engineering student. The application showcases her projects, beliefs, and interests through an interactive, animated interface with a modern design aesthetic featuring soft pastel colors on a dark background.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom color palette (lavender, mint, baby blue, light peach)
- **UI Components**: Radix UI primitives via shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Typography**: Space Grotesk for headers, Inter for body text
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Development**: Vite for development server and build tooling
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scroll functionality
- **Hero Section**: Animated profile image with identity points
- **Projects Section**: Dynamic project cards fetched from GitHub API
- **Beliefs Section**: Animated cards showcasing personal philosophy
- **Interactive Elements**: Cursor trail effects, easter eggs, and hover animations
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Backend Services
- **GitHub API Proxy**: Fetches repository data from GitHub API
- **Database Layer**: User management schema with Drizzle ORM
- **Static File Serving**: Serves built React application
- **Development Tools**: Hot module replacement with Vite integration

## Data Flow

1. **Client Request**: User navigates to portfolio sections
2. **GitHub Integration**: Projects fetched via backend proxy to GitHub API
3. **Database Operations**: User data managed through Drizzle ORM
4. **Real-time Updates**: React Query handles caching and background refetching
5. **Animations**: Framer Motion manages component entrance/exit animations

## External Dependencies

### Production Dependencies
- **UI Framework**: React, Radix UI components
- **Styling**: Tailwind CSS, class-variance-authority
- **Animations**: Framer Motion, react-intersection-observer
- **Data Fetching**: TanStack React Query
- **Database**: Drizzle ORM, Neon Database
- **Backend**: Express.js, session management

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Code Quality**: ESLint, Prettier (implied)
- **Database Migration**: Drizzle Kit

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files
2. **Backend Build**: esbuild bundles server code for Node.js
3. **Database Migration**: Drizzle Kit handles schema migrations
4. **Static Assets**: Built files served from `dist/public`

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reloading
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: PostgreSQL connection via `DATABASE_URL`
- **GitHub Integration**: Optional `GITHUB_TOKEN` for enhanced API limits

### Scripts
- `dev`: Development server with live reloading
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database schema migration

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
- July 07, 2025. Updated name to "ANV Anoushkha Lathikaa" with animated gradient text effects
- July 07, 2025. Modified cursor trail to remove solid dot, now shows hollow circle
- July 07, 2025. Replaced blog section with comprehensive experiences and achievements section
- July 07, 2025. Updated layout to left-aligned design with smaller profile image
- July 07, 2025. Enhanced background gradient from black to purplish tones
- July 07, 2025. Reordered sections: Introduction → Goals → Skills → Projects → Rest
- July 07, 2025. Removed cursor trail animation completely
- July 07, 2025. Updated navigation to include Goals section in proper order
- July 07, 2025. Added custom cursor animation with blackish purple color
- July 07, 2025. Removed fun facts section completely
- July 07, 2025. Transformed experiences section to academics and extra-curriculars
- July 07, 2025. Updated content with CMRTC academic details and specific achievements
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```