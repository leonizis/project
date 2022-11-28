const solder = {
    health: 400,
    armor: 100,
   sayHello: function(){
console.log('Hy');
   }

    
};
const jonh = Object.create(solder);
jonh.sayHello();


