
function lowestName(str) {
    let smallName =  str[0];
   for(const word of str){
       if( word.length < smallName.length ){
          smallName = word;
       }
   }
   return smallName;
}

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'r'];
const result = lowestName(friends);
console.log(result);

