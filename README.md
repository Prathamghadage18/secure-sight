<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SecureSight Dashboard - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
            margin-top: 30px;
        }
        code {
            background-color: #f5f5f5;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        pre {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        ul {
            padding-left: 20px;
        }
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 20px 0;
        }
        .tech-card {
            background-color: #f8f9fa;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px 15px;
            width: calc(33% - 15px);
            box-sizing: border-box;
        }
        .tech-card h4 {
            margin-top: 0;
            color: #3498db;
        }
        @media (max-width: 768px) {
            .tech-card {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <h1>SecureSight CCTV Monitoring Dashboard</h1>
    
    <h2>Deployment Instructions</h2>
    
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v18 or higher)</li>
        <li>Docker (for MySQL database)</li>
        <li>npm or yarn</li>
    </ul>
    
    <h3>Local Development Setup</h3>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/your-repo/secure-sight.git
cd secure-sight</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start MySQL database:</strong>
            <pre><code>docker-compose up -d</code></pre>
        </li>
        <li><strong>Run database migrations:</strong>
            <pre><code>npx prisma migrate dev --name init</code></pre>
        </li>
        <li><strong>Seed the database:</strong>
            <pre><code>npx prisma db seed</code></pre>
        </li>
        <li><strong>Start the development server:</strong>
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>
    
    <h3>Production Deployment</h3>
    <ol>
        <li>Set up a production MySQL database (e.g., AWS RDS, PlanetScale)</li>
        <li>Update <code>DATABASE_URL</code> in <code>.env</code> file</li>
        <li>Build and start the application:
            <pre><code>npm run build
npm start</code></pre>
        </li>
        <li>For containerized deployment:
            <pre><code>docker build -t secure-sight .
docker run -p 3000:3000 -e DATABASE_URL=your_prod_db_url secure-sight</code></pre>
        </li>
    </ol>
    
    <h2>Technology Decisions</h2>
    
    <div class="tech-stack">
        <div class="tech-card">
            <h4>Next.js 15 (App Router)</h4>
            <p>Chosen for its excellent React framework with built-in API routes, server-side rendering, and optimized performance.</p>
        </div>
        <div class="tech-card">
            <h4>Prisma ORM</h4>
            <p>Provides type-safe database access with excellent developer experience and seamless MySQL integration.</p>
        </div>
        <div class="tech-card">
            <h4>Tailwind CSS</h4>
            <p>Utility-first CSS framework for rapid UI development with responsive design out of the box.</p>
        </div>
        <div class="tech-card">
            <h4>MySQL</h4>
            <p>Relational database well-suited for the structured data requirements of a security monitoring system.</p>
        </div>
        <div class="tech-card">
            <h4>Docker</h4>
            <p>Containerization for consistent database setup across development environments.</p>
        </div>
        <div class="tech-card">
            <h4>TypeScript</h4>
            <p>Type safety throughout the application to reduce runtime errors and improve maintainability.</p>
        </div>
    </div>
    
    <h3>Key Architecture Decisions</h3>
    <ul>
        <li><strong>App Router:</strong> Leveraged Next.js 15's new router for better performance and simpler data fetching</li>
        <li><strong>Optimistic UI:</strong> Implemented for incident resolution to provide immediate feedback</li>
        <li><strong>Component Structure:</strong> Modular components for maintainability and reusability</li>
        <li><strong>API Design:</strong> RESTful endpoints following security dashboard conventions</li>
        <li><strong>Visual Hierarchy:</strong> Clear threat level indicators with color coding</li>
    </ul>
    
    <h2>Future Improvements</h2>
    
    <h3>If I Had More Time...</h3>
    <ul>
        <li><strong>Incident Timeline:</strong> Implement a visual timeline at the bottom of the dashboard</li>
        <li><strong>Real-time Updates:</strong> Add WebSocket support for live incident notifications</li>
        <li><strong>Advanced Filtering:</strong> Add filters by camera, threat type, and time range</li>
        <li><strong>User Authentication:</strong> Implement proper auth with role-based access control</li>
        <li><strong>Video Playback:</strong> Replace static images with actual video feeds</li>
        <li><strong>Threat Analytics:</strong> Add charts and statistics for threat patterns</li>
        <li><strong>Mobile Responsiveness:</strong> Enhance the UI for mobile devices</li>
        <li><strong>Testing:</strong> Add comprehensive unit and integration tests</li>
        <li><strong>CI/CD Pipeline:</strong> Set up automated testing and deployment</li>
        <li><strong>3D Visualization:</strong> Implement optional 3D facility map view</li>
        <li><strong>Dark/Light Mode:</strong> Add theme switching functionality</li>
        <li><strong>Export Functionality:</strong> Allow exporting incident reports</li>
    </ul>
    
    <h2>License</h2>
    <p>MIT License - Copyright (c) 2023 SecureSight</p>
</body>
</html>