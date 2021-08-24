const {registerPlugin} = require('@scullyio/scully');

const postCategoryPlugin = async (route, config = {}) => {
  return ([
    {route: '/posts/typescript'},
    {route: '/posts/angular'},
    {route: '/posts/csharp'},
    {route: '/posts/dotnet'},
    {route: '/posts/fa'},
    {route: '/posts/fa_typescript'},
    {route: '/posts/fa_angular'}
  ]);
}

// DO NOT FORGET TO REGISTER THE PLUGIN
const validator = async conf => [];
registerPlugin('router', 'categoryIds', postCategoryPlugin, validator);
