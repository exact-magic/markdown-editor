## Link markdown-editor to another project

1. Run `yarn unlink` e `yarn unlink "@exact-magic/markdown-editor"` on both projects;
2. Remove dependencies `react` and `react-dom` from editor's `devDependencies` section and run `yarn install`;
3. Confirm those dependencies aren't present at editor's node_modules folders;
4. Remove `@exact-magic/markdown-editor` from package.json on target project and run `yarn install`;
5. Install the published version of `@exact-magic/markdown-editor` on target project by running `yarn add @exact-magic/markdown-editor`;
6. Execute `yarn link` on editor's project;
7. Execute `yarn link @exact-magic/markdown-editor` on target project;
8. Change the `dev` script on target project to `"dev": "NODE_PATH=\$(pwd)/node_modules/ env-cmd -f config/.env.local next dev"`;
9. Execute `yarn watch` on editor's project to watch changes and make hot reload on the target application;
10. Execute `yarn dev` on target project.
