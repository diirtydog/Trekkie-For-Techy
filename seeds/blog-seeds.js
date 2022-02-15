const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    blog_text: 'Hola how are you?',
    user_id: 2
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_text: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    blog_text: 'I really hate operating cranes hence why Im trying to learn a little something different!',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    blog_text: 'I am actually pretty fat but I used to be in good shape.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    blog_text: 'One of these days I will get back in shape and take the world by storm.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    blog_text: 'I am starting to get old too.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_text: 'I can be fat or old just not fat and old.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_text: 'Sounds like I really need to tighten up hand.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    blog_text: 'Back in my day I coded up and downhill in the snow.',
    user_id: 3
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    blog_text: 'Now I am too fat for said hill lol.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_text: 'Thats why I like the coastal plain so much I reckon!',
    user_id: 6
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    blog_text: 'Maybe I decided to use too many seeds!',
    user_id: 5
  },
  {
    title: 'Donec dapibus.',
    blog_text: 'I am pretty sure 5 or 6 would have been sufficient.',
    user_id: 3
  },
  {
    title: 'Nulla tellus.',
    blog_text: 'Are you happy with your coding career?',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog_text: 'I honestly find coding so fascinating.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    blog_text: 'If this works out I will be so happy I might have to dress up like santa for christmas or any other kinky event I may attend.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_text: 'Is Austin a good location for coding?',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    blog_text: 'I heard Buna Texas was gods gift to earth!',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    blog_text: 'Dont ask how good my hearing is lol',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    blog_text: 'I do understand this could have been lorem ipsum however I am a fan of having a little fun.',
    user_id: 7
  }
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
