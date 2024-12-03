#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
   .name('mdyousufislam')
   .description('A CLI tool to add components to React/Next.js projects')
   .version('1.0.0');

// Define the "add" command
program
   .command('add <component>')
   .description('Add a specified component')
   .action((component) => {
      const supportedComponents = ['button', 'card'];

      if (!supportedComponents.includes(component)) {
         console.log(chalk.red(`Component "${component}" is not supported.`));
         return;
      }

      // Define templates for each component
      const templates = {
         button: `
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button 
      className="btn"
      onClick={onClick}
    >
      {label || 'Default Button'}
    </button>
  );
};

export default Button;
`,
         card: `
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title || 'Default Title'}</h2>
      <p>{content || 'Default Content'}</p>
    </div>
  );
};

export default Card;
`
      };

      const componentName = component.charAt(0).toUpperCase() + component.slice(1);
      const componentTemplate = templates[component];

      // Target directory
      const targetPath = path.join(process.cwd(), `${componentName}.js`);

      try {
         fs.writeFileSync(targetPath, componentTemplate);
         console.log(
            chalk.green(`Component "${componentName}" has been created at ${targetPath}`)
         );
      } catch (error) {
         console.error(
            chalk.red(`Failed to create component "${componentName}": ${error.message}`)
         );
      }
   });

program.parse(process.argv);
