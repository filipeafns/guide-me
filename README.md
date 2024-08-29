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

Duplicate an existing folder inside app/guides, rename it to your new guide name.then replicate the new folder inside public/guides.

''''

├── app/
│   ..
│   ├── guides/ 
│   │   ├── Guide 1
│   │   └── Guide 2
│   └── App.js
├── public/
│   └── guides/  <-- Highlighted
│       ├── images/
│       │   └── Guide 1
│       │       └── 1.png
│       │   └── Guide 2
│       │       └── 1.png
├── package.json
└── README.md

''''

**Step 2: Add Images to the Folder**

Add images to the newly created folder, naming them sequentially as `1.png`, `2.png`, `3.png`, and so on. These images will be used to illustrate each step of your guide.

**Step 3: Edit JSON File inside folders**

Edit the JSON file inside each step folder to include the following information:

```json
{
  "projectTitle": "your_guide_title",
  "steps": [
    {
      "step": 1,
      "image": "1",
      "tooltipContent": {
        "title": "Step 1 Title",
        "text": "Description of step 1. Explain what the user should do or observe in this step.",
        "top": 10,
        "left": 20,
        "direction": "right"
      }
    },
    {
      "step": 2,
      "image": "2",
      "tooltipContent": {
        "title": "Step 2 Title",
        "text": "Description of step 2. Provide details about the action or information relevant to this step.",
        "top": 30,
        "left": 40,
        "direction": "left"
      }
    },
    {
      "step": 3,
      "image": "3",
      "tooltipContent": {
        "title": "Step 3 Title",
        "text": "Description of step 3. Explain the final step or conclusion of your guide.",
        "top": 50,
        "left": 60,
        "direction": "bottom"
      }
    }
  ]
}
```

**Step 4: File Watcher**

The project includes a file watcher that automatically updates the homepage based on folders created in `app/guides`. This means that once you've completed the above steps, your new guide will be automatically added to the homepage without requiring any additional configuration.
