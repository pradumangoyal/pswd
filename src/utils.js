import { key, alphaNumericChars } from "./secret-key";

export const generatePassword = (site, pswd) => {
  const keySize = Math.floor(key.length / 3);
  const siteSize = site.length;
  const pswdSize = pswd.length;
  const maxSize = Math.max(keySize, siteSize, pswdSize);
  let pswdGenerated = "";
  for (let i = 0; i <= maxSize; i++) {
    let keyReduced = 0;
    for (let j = 0; j <= 3; j++) {
      if (key[j + i * 3]) {
        keyReduced = keyReduced + key[j + i * 3].charCodeAt();
      }
    }
    if (site[i]) {
      keyReduced = keyReduced + site[i].charCodeAt();
    }
    if (pswd[i]) {
      keyReduced = keyReduced + pswd[i].charCodeAt();
    }
    pswdGenerated += String.fromCharCode((keyReduced % 93) + 33);
  }
  let x = pswdGenerated;
  for (let k = 0; k < x.length; k++) {
    if (isPrime(k)) {
      pswdGenerated =
        x.substring(0, k) +
        alphaNumericChars[siteSize % k] +
        x.substring(k, pswd.length);
    }
  }
  return pswdGenerated;
};

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num !== 1 && num !== 0;
};
