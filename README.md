# 🚚 ShipIt Website

Official marketing website for **ShipIt**, a modern logistics and parcel
delivery platform.

Built for performance, scalability, and international expansion.

------------------------------------------------------------------------

## 🌍 Overview

ShipIt provides:

-   📦 Domestic shipping
-   🛒 E-commerce & Cash on Delivery (COD)
-   🌐 International parcels
-   📍 Real-time shipment tracking
-   🏢 Enterprise logistics solutions

The website supports multilingual routing and is optimized for
production deployment.

------------------------------------------------------------------------

## 🛠 Tech Stack

-   Next.js 14 (App Router)
-   TypeScript
-   Tailwind CSS
-   i18n (EN / FR / AR)
-   PM2 (Process Manager)
-   Nginx (Reverse Proxy)
-   SSL via Certbot

------------------------------------------------------------------------

## 📂 Project Structure

app/ → App Router pages (localized routes) components/ → Reusable UI
components i18n/ → Locale configuration and translations public/ →
Static assets (logos, flags, favicons) middleware.ts → Locale routing
middleware

------------------------------------------------------------------------

## 🚀 Development

Install dependencies:

npm install

Run development server:

npm run dev

Build production:

npm run build

Start production server:

npm start

------------------------------------------------------------------------

## 🌐 Deployment (Production)

Production setup includes:

-   Node.js runtime
-   PM2 process manager
-   Nginx reverse proxy
-   HTTPS via Let's Encrypt (Certbot)

Example PM2 command:

pm2 start npm --name "shipit-website" -- start

------------------------------------------------------------------------

## 🔒 Environment Notes

The following files are excluded from version control:

node_modules/ .next/ .env .DS_Store

Build artifacts and dependencies should never be committed.

------------------------------------------------------------------------

## 📌 Features

-   Dynamic locale routing (`/[locale]`)
-   SEO-friendly structure
-   Responsive design
-   Dark mode support
-   Clean animation system (FadeIn components)
-   Production-optimized builds

------------------------------------------------------------------------

## 🧭 Roadmap

-   Analytics integration
-   Performance optimizations
-   Enterprise landing improvements
-   CI/CD pipeline setup
-   Docker deployment support

------------------------------------------------------------------------

## 🏢 About ShipIt

ShipIt is designed to simplify logistics across Tunisia and beyond ---
providing reliable, trackable, and scalable shipping solutions for
individuals and businesses.

------------------------------------------------------------------------

© ShipIt Logistics
