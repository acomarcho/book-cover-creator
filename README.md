# Book Cover Creator

A web-based tool that helps you create simple, minimalistic book covers, built with Next.js and TypeScript.

![image](https://github.com/user-attachments/assets/ca96397a-89ae-42f0-94a1-e1b84d6d0ebf)

![image](https://github.com/user-attachments/assets/20046f8c-e818-4643-b9ce-720e0818f479)


## Features

- Create professional-looking book covers with customizable elements
- Add title, author, and subtitle text
- Insert custom SVG icons and graphics
- Choose from multiple color schemes (light and dark modes)
- Export covers as PNG images
- Modern, responsive interface built with Tailwind CSS
- TypeScript support for enhanced development experience

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [html2canvas](https://html2canvas.hertzen.com/) - HTML to canvas rendering

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
