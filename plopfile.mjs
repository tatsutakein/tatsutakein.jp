/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default function (plop) {
  plop.setGenerator('sample', {
    description: 'sample',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'sample name please'
    }],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'tools/plop/sample/**',
        destination: './sample/{{name}}',
        base: 'tools/plop/sample',
        abortOnFail: true,
      },
    ]
  });
};
