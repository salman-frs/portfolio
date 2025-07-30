# Dynamic Island Portfolio

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?logo=tailwindcss)

An interactive portfolio website featuring a Dynamic Island-inspired widget built with Next.js and TypeScript.


## Features

- **Interactive Widget States**: Four distinct interaction modes (collapsed, expanded, navigation)
- **iOS-Inspired Design**: Authentic Dynamic Island aesthetic with smooth animations
- **Performance Optimized**: Static site generation with edge deployment
- **Responsive Layout**: Mobile-first design with fluid responsiveness
- **Type Safe**: Full TypeScript implementation



## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Deployment

### Cloudflare Pages

```bash
npm run pages:build
npm run pages:deploy
```

### Environment Variables

For automated deployment, set the following secrets in your CI/CD:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Configuration

### Styling

Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'ios-blue': '#007AFF',
      'ios-green': '#34C759',
      'ios-orange': '#FF9500',
    }
  }
}
```

### Content

Modify widget content in `components/InteractiveWidget.tsx`:
- Personal information
- Social links
- Animation timings





## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.