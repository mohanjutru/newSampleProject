//Write a function called deepClone which takes an object and creates a copy of it.
//For e.g. deepClone({ name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } }) -> { name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } }


const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}
deepClone({ name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } })


//Write a function called areAnagrams which takes two string arguments and checks whether they are anagrams.
//For e.g. areAnagrams('fried', 'fired') -> true


const areAnagrams = (str1, str2) => {
   return str1.split('').sort().join('') === str2.split('').sort().join('')
}
areAnagrams('fried', 'fired')
