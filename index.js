#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
   .name('new-ui')
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

      const componentTemplate = `
import React from 'react';

const ${component.charAt(0).toUpperCase() + component.slice(1)} = () => {
  return (
    <button className="btn">
      This is a ${component} component.
    </button>
  );
};

export default ${component.charAt(0).toUpperCase() + component.slice(1)};
`;

      const targetPath = path.join(process.cwd(), `${component}.js`);

      fs.writeFileSync(targetPath, componentTemplate);

      console.log(
         chalk.green(`Component "${component}" has been created at ${targetPath}`)
      );
   });

program.parse(process.argv);
