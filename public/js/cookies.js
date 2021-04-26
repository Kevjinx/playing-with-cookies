window.addEventListener("DOMContentLoaded", (event) => {
  // Your JavaScript goes here...
  console.log('The DOM has loaded');

});

document.cookie = "monster_name=cookie";
document.cookie = "favorite_cookie=snickerdoodle";

window.alert(`We've added some cookies, they are: ${document.cookie}`)

const cookieArr = document.cookie.split(';');


const setCookie = (name, value) => {
  return document.cookie = `${name}=${value}`;
}

setCookie('yeezy', 'skrrrrr')
setCookie('yach', 'bach')

const getCookies = () => {
  return cookieArr;
}

console.log(getCookies());

// const getCookieValue = name => {
//   let cookieArr = document.cookie.split(';');
//   let pair = {};

//   cookieArr.forEach(cookie => {
//     const [key, value] = cookie.split('=')
//     pair[key] = value;
//   });

//   console.log(pair);
//   console.log(pair[name]);
//   if (!pair[name]) {return null}
//   return pair[name];
// }

const getCookieValue = name => {
  let reee = null;
  cookieArr.forEach(cookie => {
    if (cookie.includes(name)) {
      let [key, value] = cookie.split('=')
      reee = value;
      return
    }
  })
  return reee;

}


setCookie("cat", "Jet");


console.log(getCookies()); // prints ["cat=Jet"]
console.log(getCookieValue("cat")); // "Jet"
console.log(getCookieValue("rabbit")); // null



const deleteCookie = name => {
  let count = 0;

  cookieArr.forEach((cookie, i) => {
    if (cookie.includes(name)) {
      cookieArr.splice(i , 1)

      count++;
      return;
    }
  })

  if (!count) {
    console.log('cookie not found');
  }

}

setCookie("cat", "Jet");
setCookie("dog", "Fido");

console.log(getCookies()); // prints ["cat=Jet", "dog=Fido"]
deleteCookie("cat");
console.log(getCookies()); // prints ["dog=Fido"]
deleteCookie("rabbit"); // prints "cookie not found!"
