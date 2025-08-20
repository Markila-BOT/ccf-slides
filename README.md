# CFF Slides - Presentation App

A modern presentation application built with Next.js and Spectacle, designed to display slide content from images.

## Features

- **7-Slide Presentation**: Displays content from `d-1.png` through `d-7.png`
- **Modern UI**: Clean, responsive design with smooth transitions
- **Spectacle Integration**: Professional presentation framework
- **Image-Based Content**: Each slide showcases a different image from the public folder

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the presentation.

## Project Structure

```
cff-slides/
├── app/
│   ├── components/
│   │   └── PresentationSlides.tsx  # Main presentation component
│   ├── page.tsx                    # Entry point
│   └── layout.tsx                  # App layout
├── public/
│   ├── d-1.png                     # Slide 1
│   ├── d-2.png                     # Slide 2
│   ├── d-3.png                     # Slide 3
│   ├── d-4.png                     # Slide 4
│   ├── d-5.png                     # Slide 5
│   ├── d-6.png                     # Slide 6
│   └── d-7.png                     # Slide 7
└── package.json
```

## Customization

### Adding New Slides

1. Add new images to the `public/` folder
2. Update `PresentationSlides.tsx` to include new slide components
3. Follow the existing pattern for consistent styling

### Theme Customization

The presentation uses a modern theme with:

- **Primary Color**: White (#ffffff)
- **Secondary Color**: Blue (#2563eb)
- **Accent Color**: Purple (#7c3aed)
- **Font**: Inter with system fallbacks

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [Spectacle](https://formidable.com/open-source/spectacle/) - Presentation framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Spectacle Documentation](https://formidable.com/open-source/spectacle/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
