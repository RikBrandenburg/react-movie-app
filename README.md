## React Movie App

This is a movie application built with React for the front-end and Appwrite for the backend. It displays a list of movies along with a trending section that shows currently popular movies.

## Features:
- Browse a list of movies with their photos and details.
- View trending movies in a dedicated tab.
- Data is managed and fetched using TMDB.

## Tech Stack:
- Front-end: React
- Database / Backend: Appwrite

Setup Instructions:

## Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## Install Dependencies
```bash
npm install
# or
yarn install
```

## Configure Environment Variables  
Rename the `.env.example` file to `.env.local` (or `.env`) and fill in your API keys and Appwrite project details:
```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

- `VITE_TMDB_API_KEY`: Your TMDB API key for fetching movie data.  
- `VITE_APPWRITE_PROJECT_ID`: Your Appwrite project ID.  
- `VITE_APPWRITE_DATABASE_ID`: Your Appwrite database ID.  
- `VITE_APPWRITE_COLLECTION_ID`: Your Appwrite collection ID.  

## Start the Application
```bash
npm start
# or
yarn start
```
Open http://localhost:3000 in your browser to view the app.

Usage:
- Browse the list of movies.  
- Click on the "Trending" tab to see popular movies.  
- All data is fetched dynamically from TMDB and managed via Appwrite.
