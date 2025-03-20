import fs from 'fs';
import { marked } from 'marked';

// Function to read markdown file and write it as a proper HTML file
const convertMarkdownToHtml = (inputPath, outputPath) => {
    fs.readFile(inputPath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${inputPath}:`, err);
            return;
        }

        // Convert markdown to HTML
        const htmlContent = marked(data);

        // Create the full HTML structure
        const fullHtmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${outputPath}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                }
                h1, h2, h3 {
                    color: #333;
                }
                p {
                    color: #555;
                }
            </style>
        </head>
        <body>
            ${htmlContent} <!-- Insert converted markdown content here -->
        </body>
        </html>
        `;

        // Write the full HTML content to the output file
        fs.writeFile(outputPath, fullHtmlContent, (err) => {
            if (err) {
                console.error(`Error writing to file ${outputPath}:`, err);
                return;
            }
            console.log(`The file ${outputPath} has been saved!`);
        });
    });
};

// Convert markdown files to HTML with the full structure
convertMarkdownToHtml('./desserts/desserts.md', 'desserts.html');
convertMarkdownToHtml('./appetizers/appetizers.md', 'appetizers.html');
convertMarkdownToHtml('./main_courses/main_courses.md', 'main_courses.html');
