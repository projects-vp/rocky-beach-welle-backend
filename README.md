
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>🌊 rocky-beach-welle-backend</h1>

  <p>Dies ist das Backend für das Fanprojekt 
    <a href="https://rocky-beach-welle.de/" target="_blank">Rocky Beach Welle</a>, 
    eine Web-App rund um <em>Die drei ???</em>, mit Spotify-Integration und kuratierten Episodenlisten.
  </p>

  <h2>🚀 Live-Projekt</h2>
  <ul>
    <li>Frontend: <a href="https://rocky-beach-welle.de/" target="_blank">rocky-beach-welle.de</a></li>
    <li>Backend: Gehostet und deployed via <a href="https://render.com" target="_blank">Render</a></li>
  </ul>

  <h2>📦 Tech Stack</h2>
  <ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>JavaScript</li>
    <li>Spotify API (Authorization via Refresh Token)</li>
  </ul>

  <h2>🔐 Umgebungsvariablen</h2>
  <p>Die folgenden Variablen sind in <code>.env</code> definiert und <strong>nicht im Repository enthalten</strong> (<code>.gitignore</code>):</p>
  <pre><code>CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
</code></pre>
  <p>Diese Werte müssen im Render-Dashboard unter <strong>Environment &gt; Environment Variables</strong> eingetragen werden, damit die Spotify-API funktioniert.</p>

  <h2>📁 Projektstruktur</h2>
  <pre><code>rocky-beach-welle-backend/
├── token/                 # Enthält get-token.js für Spotify-Token-Handling
├── package.json           # Projektabhängigkeiten und Startskript
├── package-lock.json      # Lockfile
└── .gitignore             # Ignorierte Dateien (.env etc.)
</code></pre>

  <h2>🛠️ Installation &amp; Entwicklung</h2>
  <pre><code>git clone https://github.com/projects-vp/rock-beach-welle-backend.git
cd rock-beach-welle-backend
npm install
</code></pre>

  <p>Erstelle eine <code>.env</code>-Datei mit deinen Spotify-Credentials:</p>
  <pre><code>CLIENT_ID=dein-client-id
CLIENT_SECRET=dein-client-secret
REFRESH_TOKEN=dein-refresh-token
</code></pre>

  <p>Dann kannst du lokal starten mit:</p>
  <pre><code>npm start
</code></pre>
  <p>Das Skript startet <code>token/get-token.js</code>, welches den Spotify-Zugriffstoken generiert und aktualisiert.</p>

  <h2>📚 Abhängigkeiten</h2>
  <ul>
    <li><code>express</code> – Webserver</li>
    <li><code>cors</code> – Cross-Origin Resource Sharing</li>
    <li><code>dotenv</code> – Umgebungsvariablen aus <code>.env</code> laden</li>
    <li><code>request</code> – HTTP-Requests (für Spotify API)</li>
    <li><code>node-fetch</code> – Alternative Fetch-API für Node.js</li>
  </ul>

  <h2>📌 Hinweise</h2>
  <ul>
    <li>Deployment erfolgt über <a href="https://render.com" target="_blank">Render</a>, mit automatischem Build bei Push auf <code>main</code>.</li>
    <li>Die Spotify-Integration basiert auf dem Refresh-Token-Flow.</li>
  </ul>

  <hr>
  <p><strong>Mit ❤️ entwickelt von Valeria</strong><br>
</body>
</html>
