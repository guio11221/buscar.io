## Installation

```bash
# NPM
npm install buscar.io@latest

# Yarn
yarn add buscar.io@latest

# Git 
npm install guio11221:buscar.io
```

## Usage

```js
// const google = require('googlethis');
import google from 'buscar.io';

const options = {
  page: 0, 
  safe: false,
  parse_ads: false, 
  additional_params: { 
    hl: 'en' 
  }
}
  
const response = await google.search('TWDG', options);
console.log(response); 
```

 ```js
import google from 'buscar.io';

// Image Search
const images = await google.image('The Wolf Among Us', { safe: false });
console.log(images); 
  
// Reverse Image Search
const my_awesome_image = fs.readFileSync('./wow.png');
const reverse = await google.search(my_awesome_image, { ris: true });

console.log(reverse.results);
```
 