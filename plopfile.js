/* eslint-disable */
const { readdirSync } = require("fs");
const APP_NAME = "react-starter"

const getDirectories = (source) =>
    readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => {
            return { name: dirent.name, value: dirent.name };
        });

module.exports = (plop) => {
    let directories = getDirectories("src/");
    plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "list",
                name: "AppName",
                message: `You are about to create a new component for ${APP_NAME}, press enter to continue ...`,
                choices: [APP_NAME],
            },
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
            {
                type: "confirm",
                name: "needRedux",
                message: "Will this component use redux operations ?",
            },
            {
                type: "list",
                name: "type",
                message: "Choose the type of component",
                choices: ["Functional Component","Class Component"],
            },
            {
                type: "list",
                name: "directory",
                message: "Choose a directory to create this component",
                choices: directories,
            },
            {
                type: "confirm",
                name: "youSureAboutThat",
                message:  (response) => `=== Confirm your action === \n+=> ${response.name} \n+=> ${response.type} \n+=> src/${response.isLegacy ? "legacy" : "views"}/${response.directory}  \nDo you want to proceed?`,
            },
            // {
            //     when: function (response) {
            //         return response.youSureAboutThat === true;
            //     },
            //     // Raw text input
            //     type: "list",
            //     // Variable name for this input
            //     name: "container",
            //     // Prompt to display on command line
            //     message: "Choose the directory where you would like to add the component",
            //     choices: directories,
            // },
        ],
        actions: (data) => {
            let path = "";
            let actions = [];
            if (data.youSureAboutThat) {
                path = `src/${data.directory}/`
                if (data.type == "Functional Component") {
                    actions.push({
                        type: "add",
                        path: path + "{{pascalCase name}}/{{pascalCase name}}.jsx",
                        templateFile: "templates/Component/Functional/component.jsx.hbs",
                    });
                    actions.push({
                        type: "add",
                        path: path + "{{pascalCase name}}/index.js",
                        templateFile: "templates/Component/Functional/index.js.hbs",
                    });
                    actions.push({
                        type: "add",
                        path: path + "{{pascalCase name}}/{{pascalCase name}}.module.css",
                        templateFile: "templates/Component/Functional/styles.css.hbs",
                    });
                    if (data.needRedux) {
                        actions.push({
                            type: "add",
                            path: path + "{{pascalCase name}}/{{pascalCase name}}Slice.js",
                            templateFile: "templates/Component/Functional/slice.js.hbs",
                        });
                        actions.push({
                            path: 'src/store.js',
                            pattern: /(\/\/ REDUCER_IMPORTS)/g,
                            template: `$1\nimport {{pascalCase name}}Reducer from \'./${data.directory + "/{{pascalCase name}}/{{pascalCase name}}Slice.js"}\';`,
                            type: 'modify',
                        });
                        actions.push({
                            path: 'src/store.js',
                            pattern: /(\/\/ REDUCERS)/g,
                            template: `$1\n        {{pascalCase name}} : {{pascalCase name}}Reducer,`,
                            type: 'modify',
                        });
                    }
                }
                if (data.type == "Class Component") {
                    actions.push({
                        type: "add",
                        path: path + "{{pascalCase name}}/{{pascalCase name}}.jsx",
                        templateFile: "templates/Component/Class/component.jsx.hbs",
                    });
                    actions.push({
                        type: "add",
                        path: path + "{{pascalCase name}}/index.js",
                        templateFile: "templates/Component/Class/index.js.hbs",
                    });
                    actions.push({
                        type: "add",
                        path: path + "{{pascalCase name}}/{{pascalCase name}}.css",
                        templateFile: "templates/Component/Class/styles.css.hbs",
                    });
                    actions.push({
                        type: "add",
                        path: path + "{{pascalCase name}}/container.js",
                        templateFile: "templates/Component/Class/container.js.hbs",
                    });
                    actions.push({
                        type: "add",
                        path: path + "{{pascalCase name}}/module.js",
                        templateFile: "templates/Component/Class/module.js.hbs",
                    });
                }

            }
            
            return actions;
        },
    });
};