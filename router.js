import {splitPath, parseParams} from "./params.js";

export class Router {
    #router = []; //private , nobody can mutate from outside 

    // professional:  addRoute returns "this"  for chaining
    addRoute(method, path, ...handlers){
        // support multiple handlers:  add("GET", "/users", auth, handler)
        // last one is the handler, rest are route-specific middlewares

        if(handlers.length === 0) throw new Error("handler required");

        const parts = splitPath(path);

        // push into route array in object 
        this.#routes.push({
            method: method.toUpperCase(),
            path,
            parts,
            handlers, // [middleware1, middleware2, finalHandler] 
        });

        return this;   // chain:  router.add().add()
    }

    get(path, ...h){
        return this.add("GET", path, ...h);
    }

    post(path, ...h){
        return this.add("POST", path, ...h);
    }

    delete(path, ...h){
        return this.add("DELETE", path, ...h);
    }

    find(method, pathname){
        const urlParts = splitPath(pathname);

        for(let route of this.#routes){
            if(route.method !== method) continue;

            const params = parseParams(route.parts, urlParts);
            if(params){
                // return copy not refrence - caller canot corrupt router
                return {...route, params};
            }
        }
        return null;
    }
}

export const router = new Router();


// Class + private field #routes - no one can routes.push from outside.
// add() accepts ...handlers - route-level middleware becomes possible.
// find() returns { handlers, params, path } - no separate handler field.
// method.toUpperCase() - prevents get vs GET bug.

