const google = require('../lib/');

async function start() {
  // A simple search
  const res = await google.search('temperatura de Dourados Ms', {
    page: 0,
    safe: false,
    additional_params: {
      hl: 'pt-br'
    }
  });
  console.info('Search Results:', res);
  
  // // Image Search
  // const images = await google.image('The Wolf Among Us', { safe: false });
  // console.info('Image Search:', images); 
 
  // // Reverse Image Search
  // const reverse = await google.search('https://i.pinimg.com/236x/92/16/d9/9216d9a222ef65eb6eabfff1970180d1.jpg', { ris: true });
  // console.info('Reverse Image Search:', reverse.results);
   
  // const news = await google.getTopNews('pt-br', 'BR');
  // console.info('Google Top News:', news);
}

start();
