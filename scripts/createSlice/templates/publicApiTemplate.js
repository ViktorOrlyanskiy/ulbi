module.exports = (sliceName, nameComponent) => `
export { ${nameComponent} } from './ui/${sliceName}/${sliceName}';
export { ${nameComponent}Schema } from './model/types/${sliceName}-shema';
`;
