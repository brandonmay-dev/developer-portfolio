# Brandon May Developer Portfolio

A personal portfolio site for Brandon May, built to showcase full-stack development skills, featured projects, experience, and contact information in a polished single-page experience.

## Overview

This project is a responsive portfolio built with React and Vite. It highlights Brandon's work as a junior full-stack developer through a modern landing page, featured project cards, an experience timeline, resume download, and a contact form powered by EmailJS.

## Features

- Animated hero section with social links and resume download
- About section focused on full-stack strengths and career goals
- Featured project showcase with live demo and GitHub links
- Experience timeline for independent, open-source, and academic work
- Contact form integration using EmailJS
- Responsive layout with custom visuals, motion, and branded styling

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- EmailJS Browser SDK
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Environment Variables

The contact form depends on EmailJS. Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Without these values, the contact form will render but message submission will fail.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Project Structure

```text
src/
  components/   Reusable UI building blocks
  layout/       Shared page layout pieces
  sections/     Portfolio sections such as Hero, Projects, and Contact
  App.jsx       Main page composition
  main.jsx      App entry point

public/
  projects/     Project screenshots
  Brandon-May-Resume.pdf
  profile-photo.jpg
```

## Featured Projects

### Sync

A full-stack music streaming and real-time chat app where users can browse albums, play songs, view online users, and message each other in real time.

### Smart Brain

A full-stack AI face detection app where users can register, sign in, submit image URLs, detect faces, and track their submission count.

## Contact

- GitHub: [github.com/brandonmay-dev](https://github.com/brandonmay-dev)
- LinkedIn: [linkedin.com/in/brandonmaydev](https://www.linkedin.com/in/brandonmaydev)
- Email: [brandon@brandonmay.dev](mailto:brandon@brandonmay.dev)
