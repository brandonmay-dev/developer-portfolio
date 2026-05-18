# Brandon May Developer Portfolio

A personal portfolio site for Brandon May, built to showcase full-stack development skills, featured projects, experience, resume, and contact information in a polished single-page experience.

Live Site: [brandonmay.dev](https://brandonmay.dev)

## Overview

This project is a responsive developer portfolio built with React and Vite. It highlights my work as a junior full-stack developer through a modern landing page, featured project cards, an experience timeline, resume download, and a contact form powered by EmailJS.

## Features

- Animated hero section with social links and resume download
- About section focused on full-stack strengths and career goals
- Featured project showcase with live demo and GitHub links
- Experience timeline for independent, open-source, and academic work
- Contact form integration using EmailJS
- Responsive layout with custom visuals, motion, and branded styling
- Custom favicon and branded profile image

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- EmailJS Browser SDK
- Lucide React
- Netlify

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

git clone <https://github.com/brandonmay-dev/developer-portfolio.git>
cd developer-portfolio
npm install

### Run Locally

npm run dev

Open the local URL printed by Vite in your browser.

## Environment Variables

The contact form depends on EmailJS. Create a `.env` file in the project root with:

VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=

Without these values, the contact form will render, but message submission will fail.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Project Structure

src/
components/ Reusable UI building blocks
layout/ Shared page layout pieces
sections/ Portfolio sections such as Hero, Projects, and Contact
App.jsx Main page composition
main.jsx App entry point

public/
projects/ Project screenshots
Brandon-May-Resume.pdf
profile-photo.jpg
favicon.ico

## Featured Projects

### Sync

A full-stack music streaming and real-time chat app where users can browse albums, play songs, view online users, and message each other in real time.

- Live Demo: [sync.brandonmay.dev](https://sync.brandonmay.dev/)
- GitHub: [github.com/brandonmay-dev/sync](https://github.com/brandonmay-dev/sync)

### Smart Brain

A full-stack AI face detection app where users can register, sign in, submit image URLs, detect faces, and track their submission count.

- Live Demo: [smart-brain-app-32fac457676f.herokuapp.com](https://smart-brain-app-32fac457676f.herokuapp.com/)
- Frontend: [github.com/brandonmay-dev/smart-brain](https://github.com/brandonmay-dev/smart-brain)
- Backend: [github.com/brandonmay-dev/smart-brain-api](https://github.com/brandonmay-dev/smart-brain-api)

## Deployment

This portfolio is deployed with Netlify and connected to the custom domain:

brandonmay.dev

## Contact

- Portfolio: [brandonmay.dev](https://brandonmay.dev)
- GitHub: [github.com/brandonmay-dev](https://github.com/brandonmay-dev)
- LinkedIn: [linkedin.com/in/brandonmaydev](https://www.linkedin.com/in/brandonmaydev)
- Email: [brandon@brandonmay.dev]
