const epub = require('epub-press-js');

const ebook = new EpubPress({
  title: 'React Under The Hood',
  description: 'React Under The Hood',
  urls: [
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Intro.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-0.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-1.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-2.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-3.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-4.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-5.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-6.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-7.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-8.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-9.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-10.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-11.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-12.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-13.html',
      'https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Part-14.html'
  ]
});

ebook.publish()
  .then(() =>{
    ebook.download();  // Default epub
    // or ebook.email('epubpress@gmail.com')
  })
  .then(() => {
    console.log('Success!');
  }).catch((error) => {
      console.log(`Error: ${error}`);
  });
