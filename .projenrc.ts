import { typescript, javascript } from 'projen';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'zod-to-asyncapi',
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.NPM,
  releaseToNpm: true,


  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: '@hgoesi/zod-to-asyncapi',
});
project.synth();