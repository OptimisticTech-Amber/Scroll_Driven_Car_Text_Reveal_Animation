# 🚗 Interactive Car Reveal Animation

An interactive, scroll-driven car reveal animation built with **Next.js, React, Tailwind CSS, and GSAP**. The project features smooth horizontal car movement, animated text reveals, and sequential statistic cards triggered by scrolling.

## ✨ Features

* 🚘 **Car Reveal Animation** — A car moves horizontally across the screen as the user scrolls.
* 🎬 **Scroll-Driven Effects** — Smooth animations powered by GSAP ScrollTrigger.
* 📝 **Text Reveal** — A moving black overlay reveals the background text.
* 📊 **Animated Statistic Cards** — Four statistic cards appear at specific points in the car's journey.
* 📱 **Responsive Layout** — Tailwind CSS utilities help adapt the layout to different screen sizes.
* ⚡ **Smooth Motion** — GSAP timelines synchronize multiple animations.
* 📌 **Pinned Section** — The animation section stays in place while the scroll sequence plays.

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/) — React framework
* [React](https://react.dev/) — UI library
* [TypeScript](https://www.typescriptlang.org/) — Type safety
* [Tailwind CSS](https://tailwindcss.com/) — Styling
* [GSAP](https://gsap.com/) — Animation library
* [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — Scroll-based animation control
* [@gsap/react](https://gsap.com/resources/React/) — GSAP integration for React

## 📸 Preview

<!-- Add a screenshot or GIF of your animation here -->

![Car Reveal Animation Preview](./public/preview.gif)

> Replace `./public/preview.gif` with the path to your own screenshot or animation recording.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm, pnpm, or yarn
* Git

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

### 2. Navigate to the project directory

```bash
cd <YOUR_PROJECT_FOLDER>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install animation dependencies

If they are not already installed:

```bash
npm install gsap @gsap/react
```

### 5. Add the car image

Place your car image inside the `public` directory:

```text
public/
└── bugatti.png
```

Make sure the filename matches the image path used in your component.

### 6. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🎞️ Animation Sequence

The animation uses a GSAP timeline synchronized with scroll progress.

1. The car begins moving horizontally across the screen.
2. The black overlay moves to reveal the background text.
3. The first statistic card appears when the car reaches approximately 30% of its animation.
4. The second card appears at approximately 50%.
5. The third card appears at approximately 70%.
6. The fourth card appears at approximately 90%.

The animation timings can be adjusted through the GSAP timeline position parameters.

## 📂 Project Structure

```text
your-project/
├── public/
│   ├── bugatti.png
│   └── preview.gif
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── CarRevealText.tsx
├── package.json
├── tsconfig.json
└── README.md
```

*The structure above is an example; adapt it to your actual project.*

## ⚙️ Customization

### Change the car image

Replace `public/bugatti.png` with your preferred image and update the `src` property in the Next.js `Image` component.

### Adjust the animation speed

Modify the ScrollTrigger end value:

```tsx
scrollTrigger: {
  trigger: section,
  start: "top top",
  end: "+=3000",
  scrub: 1,
  pin: true,
}
```

A larger `end` value creates a longer scroll distance for the animation.

### Adjust card timing

```tsx
// Card 1: 30%
// Card 2: 50%
// Card 3: 70%
// Card 4: 90%

0.3
0.5
0.7
0.9
```

These values are timeline positions relative to the car animation, which has a duration of `1`.

## 🧠 What I Learned

* Building scroll-based animations with GSAP ScrollTrigger.
* Synchronizing multiple animations using GSAP timelines.
* Integrating GSAP with React and Next.js.
* Managing animation targets with React refs.
* Creating scroll-driven storytelling and reveal effects.
* Coordinating responsive layouts with Tailwind CSS.

## 🔮 Future Improvements

* Add more advanced car movement effects.
* Improve mobile-specific animation behavior.
* Add sound effects and interactive controls.
* Introduce more transitions and visual effects.
* Optimize animation performance across devices.

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## 📄 License

This project is available under the MIT License if you choose to distribute it under that license. Add a `LICENSE` file to the repository before claiming the project is officially licensed under MIT.
