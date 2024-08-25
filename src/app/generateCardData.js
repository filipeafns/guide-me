const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const guidesDir = path.join(__dirname, 'guides');
const cardDataFile = path.join(__dirname, 'cardData.json');

const generateCardData = () => {
    const cardData = [];

    fs.readdirSync(guidesDir).forEach(dir => {
        const tutorialPath = path.join(guidesDir, dir);
        if (fs.statSync(tutorialPath).isDirectory()) {
            cardData.push({
                Link: `/${dir}/step1`,
                Title: dir.replace(/-/g, ' '),
                Description: "Description for " + dir,
                Image: `/${dir}/1.png`
            });
        }
    });

    fs.writeFileSync(cardDataFile, JSON.stringify(cardData, null, 2));
    console.log('cardData.json has been updated.');
};

// Initial generation
generateCardData();

// Watch for changes in the guides directory
chokidar.watch(guidesDir).on('addDir', (path) => {
    console.log(`New folder added: ${path}`);
    generateCardData();
});