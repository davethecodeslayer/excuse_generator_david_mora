 function excuseGenerator () {

   let who = ['The dog','My grandma','His turtle','My bird'];
   let action = ['ate','peed','crushed','broke'];
   let what = ['my homework', 'the keys', 'the car'];
   let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

   let getWho = Math.floor(Math.random()*4)
   let getAction = Math.floor(Math.random()*4);
   let getWhat = Math.floor(Math.random()*3);
   let getWhen = Math.floor(Math.random()*5);

   let myExcuse =  who[getWho] + ' ' + action[getAction] + ' ' +  what[getWhat] + ' ' + when[getWhen];

   return myExcuse;
}

console.log(excuseGenerator());