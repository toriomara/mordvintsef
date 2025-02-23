# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json yarn.lock* package-lock.json* ./

# Install dependencies
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

RUN npx prisma generate

# Build the Next.js application
RUN npm run build || yarn build

# Use a smaller image for production
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only necessary files from the base stage
COPY --from=base /app/package.json /app/yarn.lock* /app/package-lock.json* ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["npm", "start"]

# FROM node:20-alpine
# WORKDIR /app
# COPY . .
# RUN npm install --legacy-peer-deps
# RUN npx prisma generate
# COPY package*.json ./
# EXPOSE 3000
# CMD npm run dev


# sudo ln -s /etc/nginx/sites-available/mordvintsef /etc/nginx/sites-enabled/

# cat ~/.ssh/id_ed25519.pub | ssh root@90.156.168.189 "cat >> ~/.ssh/authorized_keys"

# sudo ln -s /etc/nginx/sites-available/mordvintsef.ru /etc/nginx/sites-enabled/

# sudo nano /etc/nginx/sites-available/your-nextjs-app
# https://github.com/toriomara/mordvintsef.git
# pm2 start npm --name "mordvintsef" -- start

# pm2 startup systemd
# pm2 save

# sudo nano /etc/nginx/sites-available/mordvintsef
# sudo ln -s /etc/nginx/sites-available/mordvintsef /etc/nginx/sites-enabled/

# sudo certbot --nginx -d mordvintsef.ru

# pm2 start npm --name "mordvintsef" -- start --prefix /var/www/mordvintsef
# pm2 save
# pm2 restart nextjs

###########################################################
# ssh-keygen -R 90.156.168.189
# Step 1: Update and Secure Your Server  
# Before deploying your application, it’s essential to update your server packages and secure it.
# sudo apt update && sudo apt upgrade -y

# Step 2: Install Node.js and npm
# install node v20.11 on remote server ubuntu 24.04 cli

# Redirect HTTP to HTTPS
# server {
#     listen 80;
#     server_name mordvintsef.ru www.mordvintsef.ru;
#     return 301 https://$host$request_uri;
# }

# # Main HTTPS Server Block
# server {
#     listen 443 ssl; # managed by Certbot
#     ssl_certificate /etc/letsencrypt/live/mordvintsef.ru/fullchain.pem; # managed by Certbot
#     ssl_certificate_key /etc/letsencrypt/live/mordvintsef.ru/privkey.pem; # managed by Certbot
#     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
#     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

#     location / {
#         proxy_pass http://127.0.0.1:3000;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#         proxy_cache_bypass $http_upgrade;

#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#     }

#     error_log /var/log/nginx/mordvintsef_error.log;
#     access_log /var/log/nginx/mordvintsef_access.log;
# }




