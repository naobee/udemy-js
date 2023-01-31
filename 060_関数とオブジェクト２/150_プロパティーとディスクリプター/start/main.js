'use strict';

// const obj = {prop: 0};

const obj = {};

Object.defineProperty(obj, 'prop', {
  configurable: true,
  value: 0,
  writable: true
})

delete obj.prop;

// obj.prop = 1;


const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descriptor);

console.log(obj.prop);