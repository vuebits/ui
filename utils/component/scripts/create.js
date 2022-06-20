const inquirer = require('inquirer'); // eslint-disable-line
const fs = require('fs-extra'); // eslint-disable-line
const replace = require('replace-in-file'); // eslint-disable-line
const templatePath = './utils/component/template';
const docsTemplatePath = './utils/component/docs-template';
const componentsRootPath = './lib/src/components';
const docsRootPath = './docs/src';

const componentNamespace = [];
let dirName;
let path = componentsRootPath;

const pascalToKebabCase = (string) => {
  return string
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
};

const propmptForComponentName = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'Type component name'
      }
    ])
    .then(answers => {
      dirName = answers.componentName;
      // component
      const componentPath = `${path}/${dirName}`;
      fs.copySync(templatePath, componentPath);
      const componentName = `V${componentNamespace.join('')}${dirName}`;
      const kebabCaseComponentName = pascalToKebabCase(componentName);
      replace.sync({
        files: ['Component.vue', 'index.ts'].map(file => `${componentPath}/${file}`),
        from: /VComponent/g,
        to: componentName
      });
      replace.sync({
        files: ['styles.scss'].map(file => `${componentPath}/${file}`),
        from: /v-component/g,
        to: kebabCaseComponentName
      });
      fs.appendFile(`${path}/index.ts`, `export * from './${dirName}';\n`, () => { /* */ });
      fs.appendFile(`${path}/index.scss`, `\n@import './${dirName}';`, () => { /* */ });
      console.log(`${componentName} component has been created`);
      // docs
      if (componentNamespace.length === 0) {
        const componentDocsPath = `${docsRootPath}/views/Docs/Components/${dirName}`;
        fs.copySync(docsTemplatePath, componentDocsPath);
        replace.sync({
          files: ['Component.vue', 'Example.vue'].map(file => `${componentDocsPath}/${file}`),
          from: /ComponentName/g,
          to: dirName
        });
        console.log(`Docs for ${componentName} component have been created. Link them in docs router`);
      }
    });
};

const readComponents = () => {
  const components = [];
  const items = fs.readdirSync(path);
  items.forEach(item => {
    const isDir = fs.lstatSync(`${path}/${item}`).isDirectory();
    const isComponent = !/_*_/.test(item);
    if (isDir && isComponent) {
      components.push(item);
    }
  });

  if (components.length > 0) {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'type',
          message: 'Do you want to create root or nested component?',
          choices: ['root', 'nested']
        }
      ])
      .then(answers => {
        if (answers.type === 'root') {
          propmptForComponentName();
        } else {
          const propmptForParentComponent = (availableComponents) => {
            inquirer
              .prompt([
                {
                  type: 'list',
                  name: 'parentComponent',
                  message: 'Select one of available components:',
                  choices: availableComponents
                }
              ])
              .then(answers => {
                componentNamespace.push(answers.parentComponent);
                path = `${path}/${answers.parentComponent}`;
                readComponents();
              });
          };
          propmptForParentComponent(components);
        }
      });
  } else {
    propmptForComponentName();
  }
};

readComponents();
