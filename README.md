<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SecureSight Dashboard - README</title>
</head>
<body>
    <h1>SecureSight CCTV Monitoring Dashboard</h1>

    <h2>Deployment Instructions</h2>

    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v18 or higher)</li>
        <li>Docker (for MySQL)</li>
        <li>npm or yarn</li>
    </ul>

    <h3>Local Development Setup</h3>
    <ol>
        <li>Clone repo:<br><code>git clone https://github.com/your-repo/secure-sight.git</code><br><code>cd secure-sight</code></li>
        <li>Install dependencies:<br><code>npm install</code></li>
        <li>Start DB:<br><code>docker-compose up -d</code></li>
        <li>Run migrations:<br><code>npx prisma migrate dev --name init</code></li>
        <li>Seed DB:<br><code>npx prisma db seed</code></li>
        <li>Start server:<br><code>npm run dev</code></li>
    </ol>

    <h3>Production Deployment</h3>
    <ol>
        <li>Setup production DB</li>
        <li>Update <code>DATABASE_URL</code> in <code>.env</code></li>
        <li>Build and start:<br><code>npm run build</code><br><code>npm start</code></li>
        <li>Containerized:<br>
            <code>docker build -t secure-sight .</code><br>
            <code>docker run -p 3000:3000 -e DATABASE_URL=your_prod_db_url secure-sight</code>
        </li>
    </ol>

    <h2>Tech Stack</h2>
    <ul>
        <li>Next.js 15</li>
        <li>Prisma ORM</li>
        <li>Tailwind CSS</li>
        <li>MySQL</li>
        <li>Docker</li>
        <li>TypeScript</li>
    </ul>

    <h3>Architecture Highlights</h3>
    <ul>
        <li>App Router (Next.js)</li>
        <li>Optimistic UI for incidents</li>
        <li>Modular components</li>
        <li>RESTful APIs</li>
        <li>Color-coded threat indicators</li>
    </ul>

    <h2>Future Improvements</h2>
    <ul>
        <li>Incident timeline</li>
        <li>Live updates via WebSocket</li>
        <li>Advanced filters</li>
        <li>Role-based authentication</li>
        <li>Live video feeds</li>
        <li>Threat analytics</li>
        <li>Mobile UI</li>
        <li>Automated testing (unit & integration)</li>
        <li>CI/CD setup</li>
        <li>3D facility map</li>
        <li>Theme switch (dark/light)</li>
        <li>Export incident reports</li>
    </ul>

    <h2>License</h2>
    <p>MIT License - © 2023 SecureSight</p>
</body>
</html>
