# MTÜ Noorteaeg Website

Production-ready Next.js App Router website for a multilingual Estonian NGO.

## Features
- ET/RU/EN routing under `/et`, `/ru`, `/en`
- NGO-first homepage with project and community focus
- Projects, events, attractions, LED screen, partners and contact pages
- Booking and contact API endpoints with SMTP email notifications
- Sanity CMS schema setup where each document stores all three languages
- SEO metadata, OpenGraph, robots.txt and sitemap.xml

## Run
```bash
npm install
npm run dev
```

## Environment
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `CONTACT_TO_EMAIL`, `BOOKING_TO_EMAIL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
