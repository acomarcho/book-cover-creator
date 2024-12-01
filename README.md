# PNG to SVG Converter

A web-based tool that converts PNG images to SVG format, built with Next.js and TypeScript.

## Features

- Upload PNG images and convert them to SVG format
- Real-time conversion using server-side API
- Modern, responsive interface built with Tailwind CSS
- TypeScript support for enhanced development experience

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Server-side API for image conversion

## Getting Started

1. Clone the repository:

```bash
git clone <your-repo-url>
cd png-to-svg-converter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── png-to-svg/    # API route for image conversion
│   ├── components/        # React components
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/           # Shared components
│   ├── BookCover.tsx
│   └── InputPanel.tsx
├── public/              # Static assets
└── types/              # TypeScript type definitions
```

## Development

The application uses Next.js 14 with the App Router. To make changes:

1. Modify components in the `components/` directory
2. Update API logic in `app/api/png-to-svg/`
3. Adjust styles using Tailwind CSS classes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
