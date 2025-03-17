
#!/bin/bash

# Make the script executable
chmod +x start.sh

echo "Starting MediConnect application..."

# Check if Node.js is installed
if command -v node &> /dev/null; then
    echo "Node.js is installed, version: $(node -v)"
else
    echo "Node.js is not installed. Installing required packages..."
    apt-get update && apt-get install -y nodejs npm
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing Node.js dependencies..."
    npm install express
fi

# Start the server
echo "Starting server..."
node server.js
