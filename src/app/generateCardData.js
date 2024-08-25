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
                Link: `/guides/${dir}/step1`,
                Title: dir.replace(/-/g, ' '),
                Description: "Description for " + dir,
                Image: `/guides/${dir}/1.png`
            });
        }
    });

    fs.writeFileSync(cardDataFile, JSON.stringify(cardData, null, 2));
    console.log('cardData.json has been updated with the latest entries.');
};

// Initial generation
generateCardData();

// Watch for changes in the guides directory
chokidar.watch(guidesDir).on('all', (event, path) => {
    if (event === 'addDir' || event === 'unlinkDir') {
        console.log(`Directory changed: ${path}`);
        generateCardData(); // Update cardData.json on add/remove
    }
});