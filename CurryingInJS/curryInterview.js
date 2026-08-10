// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

function curry(fn){
  return function curried(...args){
    if(args.length >= fn.length){   // chcck the args length of first time how many parameters passed.
      return fn.apply(this, args)    // if parameters are equal to function have parameter then directly return
    };
                            // else return func which takes second parameters,  
    return function(...args2){
      return curried.apply(this, args.concat(args2))    // here add all parameters which passed to fisrt and second func.
    }
  }
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`
};
const curriedJoin = curry(join);
curriedJoin(1, 2, 3);
curriedJoin(1)(2, 3);
curriedJoin(1, 2)(3);

