const fs = require('fs');
const path = require('path');


const count = Number(process.argv[2]) || 10;


const outputFilePath = 'module-data.js';
const namesFilePath = path.resolve(__dirname, 'names.txt');


if (fs.existsSync(outputFilePath)) {
    console.log('Plik module-data.js już istnieje. Generowanie pominięte.');
    process.exit(0);
}


fs.readFile(namesFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd wczytywania pliku names.txt:', err);
        return;
    }

    let rawNames = data
        .split(/[\s\n]+/)        
        .map(name => name.trim())
        .filter(name => name.length > 0);

    if (rawNames.length === 0) {
        console.error('Brak imion w pliku names.txt');
        return;
    }

    const usedEmailCounts = {}; 
    const people = [];

    for (let i = 1; i <= count; i++) {
        const name = rawNames[Math.floor(Math.random() * rawNames.length)];

    
        if (!usedEmailCounts[name]) usedEmailCounts[name] = 1;
        const email = `${name.toLowerCase()}${usedEmailCounts[name]}@wsei.edu.pl`;
        usedEmailCounts[name]++;

       
        const birthYear = Math.floor(Math.random() * (2005 - 1980 + 1)) + 1980;
        const birthMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const birthDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
        const birthDate = `${birthYear}-${birthMonth}-${birthDay}`;

      
        const phone = `${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`;

        people.push({
            id: i,
            name,
            birthDate,
            email,
            phone
        });
    }


    const outputContent = `export const people = ${JSON.stringify(people, null, 4)};\n`;

    fs.writeFile(outputFilePath, outputContent, (err) => {
        if (err) {
            console.error('Błąd zapisu do pliku module-data.js:', err);
        } else {
            console.log(`Wygenerowano plik module-data.js z ${count} osobami.`);
        }
    });
});
