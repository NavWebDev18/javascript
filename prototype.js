 /*prototype : Every object has a hidden property called [[Prototype]] accessed via *** Object.getPrototypeOf() or __proto__ ***
               It acts like a backup object. If JS doesn’t find a property in your object, it looks into its prototype.

               example : 

               const user = {
                    name: "Mallikharjun"
                };
                console.log(user.age); // ❌ undefined

                Now JS checks:
                Does user have age? → ❌
                Check prototype → maybe yes

                Add to prototype:
                const user = {
                    name: "Mallikharjun"
                };

                user.__proto__.age = 22;
                console.log(user.age); // ✅ 22
                Even though age is NOT in user, it comes from prototype.

                prototype chain: object → prototype → null

                Prototypal Inheritance:
                One object can inherit properties and methods from another object

                const parent = {
                    greet() {
                        console.log("Hello from parent");
                    }
                };
                const child = {};
                child.__proto__ = parent;
                child.greet(); // ✅ Hello from parent
                child doesn’t have greet, but it inherits it.


                Prototype with Constructor Functions:
                function Person(name) {
                    this.name = name;
                }

                Person.prototype.sayHello = function() {
                console.log("Hi, I am " + this.name);
                };

                const p1 = new Person("Mallikharjun");
                const p2 = new Person("Ravi");

                p1.sayHello(); // Hi, I am Mallikharjun
                p2.sayHello(); // Hi, I am Ravi



                Instance Specific Properties/ Methods: 
                The Instance Specific Properties/ Methods are the properties or methods specific to the instance object.
                function Person(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                }

                Person.prototype.displayFullName = function() {
                return this.firstName + " " + this.lastName;
                };

                let person1 = new Person("Virat", "Kohli");
                console.log(Object.getOwnPropertyNames(person1));

*/
