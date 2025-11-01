

const fs = require('fs');
const path = require('path');

// Function to explore directory
function exploreDir(dirPath) {
  try {
    // Check if the directory exists
    if (!fs.existsSync(dirPath)) {
      console.error("❌ Directory does not exist:", dirPath);
      return;
    }

    // Read directory contents
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        console.log("📁 Folder:", fullPath);
        exploreDir(fullPath); // Recursive call
      } else {
        console.log("📄 File:", fullPath);
      }
    });

  } catch (err) {
    console.error("💥 Error reading directory:", err.message);
  }
}

// Run it
const dirToExplore = process.argv[2] || __dirname; // Default: current folder
console.log("🔍 Exploring:", dirToExplore);
exploreDir(dirToExplore);
