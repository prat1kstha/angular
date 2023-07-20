// Experimental

@hello
class User {

}

function hello(target: Function): void {
    target.prototype.test = function (): void {
        console.log("Hello from decorator");
    };
}

const user1 = new User();

(user1 as any).test();