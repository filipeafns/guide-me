This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Adding New Guides

To add new guides, follow these steps:

**Step 1: Create a New Folder with Images**

Create a new folder in the `public/guides` directory, replacing `{your_tutorial}` with the name of your tutorial. For example, if your tutorial is called "Getting Started with Next.js", you would create a folder named `getting-started-with-nextjs`.

**Step 2: Add Images to the Folder**

Add images to the newly created folder, naming them sequentially as `1.png`, `2.png`, `3.png`, and so on. These images will be used to illustrate each step of your guide.

**Step 3: Duplicate the Folder and Edit JSON File**

Duplicate the folder structure you created in `public/guides` inside `src/app/guides`. Ensure each step has its own folder, and within each step folder, there is a JSON file that describes the guide for that step.

**Step 4: Update the JSON File**

Update the JSON file in `src/app/guides/{your_tutorial}` to include the following information:
- `projectTitle`: The title of your guide.
- `steps`: An array of objects, each representing a step in your guide. Each step object should include:
  - `step`: The step number.
  - `tooltipContent`: An object containing:
    - `title`: The title of the tooltip.
    - `text`: The text content of the tooltip.
    - `top`: The vertical position of the tooltip.
    - `left`: The horizontal position of the tooltip.
    - `direction`: The direction of the tooltip (e.g., "right", "left", "top", or "bottom").

**Step 5: File Watcher**

The project includes a file watcher that automatically updates the homepage based on folders created in `app/guides`. This means that once you've completed the above steps, your new guide will be automatically added to the homepage without requiring any additional configuration.
