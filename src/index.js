 
 export const shout = message => message.toUpperCase + '!!!';
 
 export const johnnyFive = {
    greet (name) {
      if (!name)  return  'Johnny Five is Alive';
      
      return `Hello, ${name}. I am Johnny 5.  I am alive!`;
    }
};
