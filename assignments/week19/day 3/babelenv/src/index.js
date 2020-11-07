import 'babel-polyfill';

import user from './usermodel';

const userone = new user();

console.log('initial name set is',userone);
userone.setname('alfred Richards')
console.log('aftername set is',userone.getname())
console.log('benjimen richards')