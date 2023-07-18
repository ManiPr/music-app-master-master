//اضافه کردن خود آهنگ یادت رفته حتما اضاف بکن
import artistimage from './assets/images/Lou Reed.png'
let MusicData =[
    {
        "Id":'1',
        "Name":'HEF',
        "Artist":'Koud',
        'Image':'HEF.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    },
    {
        "Id":'2',
        "Name":'LP5',
        "Artist":'Apparat',
        'Image':'LP5.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    }, 
    {
        "Id":'3',
        "Name":'Numb Numb Juice',
        "Artist":'Schoolboy Q',
        'Image':'Numb Numb Juice.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    },
       {
        "Id":'4',
        "Name":'Drip or Down 2',
        "Artist":'Gunna',
        'Image':'Drip or Down 2.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    },
    {
        "Id":'5',
        "Name":'Dance',
        "Artist":'Remy Van Kesteren',
        'Image':'Dance.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    },
       {
        "Id":'6',
        "Name":'Dont Feed the Pop Monster',
        "Artist":'Broods',
        'Image':'Dont Feed the Pop Monster.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    },
    {
        "Id":'7',
        "Name":'Lemonade',
        "Artist":'Beyonce',
        'Image':'Lemonade.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    },
       {
        "Id":'8',
        "Name":'Lost Planet',
        "Artist":'Smokepurpp',
        'Image':'Lost Planet.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    },   {
        "Id":'9',
        "Name":'Ghettobaby',
        "Artist":'Kevin Abstract',
        'Image':'Ghettobaby.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    },
    {
        "Id":'10',
        "Name":'Not Waving, But Drowning',
        "Artist":'Loyle Carner',
        'Image':'Not Waving, But Drowning.png',
        "AddToLibrary":'false',
        'Play':'false',
        'Repeat':'false'
    }
    
]
let artistData=[
    {
        "Id":'1',
        "Name":'FeradonFrakhzad',
        'Image':{artistimage},
        "songs":[]
    },
    {
        "Id":'2',
        "Name":'FeradonFrakhzad',
        'Image':{artistimage},
        "songs":[]
    },
    {
        "Id":'3',
        "Name":'FeradonFrakhzad',
        'Image':{artistimage},
        "songs":[]
    },
    {
        "Id":'4',
        "Name":'FeradonFrakhzad',
        'Image':{artistimage},
        "songs":[]
    },
    {
        "Id":'5',
        "Name":'FeradonFrakhzad',
        'Image':{artistimage},
        "songs":[]
    },
    {
        "Id":'6',
        "Name":'FeradonFrakhzad',
        'Image':{artistimage},
        "songs":[]
    },
    {
        "Id":'7',
        "Name":'FeradonFrakhzad',
        'Image':{artistimage},
        "songs":[]
    },
    {
        "Id":'8',
        "Name":'FeradonFrakhzad',
        'Image':{artistimage},
        "songs":[]
    },
]
let categoryData=[
    {
        "Id":'1',
        "Name":'Programming',
    },
    {
        "Id":'2',
        "Name":'Rock',

    },
    {
        "Id":'3',
        "Name":'Pop',
    },
    {
        "Id":'4',
        "Name":'HipHop',
    },
    {
        "Id":'5',
        "Name":'Rock',
    },
    {
        "Id":'6',
        "Name":'HipHop',
    },
    {
        "Id":'7',
        "Name":'HipHop',
    },
    {
        "Id":'8',
        "Name":'HipHop',
    },  {
        "Id":'9',
        "Name":'HipHop',
    },
    ,  {
        "Id":'10',
        "Name":'HipHop',
    },
    ,  {
        "Id":'11',
        "Name":'HipHop',
    },
    ,  {
        "Id":'12',
        "Name":'HipHop',
    },
    ,  {
        "Id":'13',
        "Name":'HipHop',
    },
    ,  {
        "Id":'14',
        "Name":'HipHop',
    },
    ,  {
        "Id":'15',
        "Name":'HipHop',
    },
    ,  {
        "Id":'16',
        "Name":'HipHop',
    },
    ,  {
        "Id":'17',
        "Name":'HipHop',
    },
    ,  
    {
        "Id":'18',
        "Name":'HipHop',
    }


]
let moodsData=[
    {
        "Id":'1',
        "Name":'Party',
    },
    {
        "Id":'2',
        "Name":'Party',
    }, {
        "Id":'3',
        "Name":'Party',
    },
    {
        "Id":'4',
        "Name":'Party',
    },
    {
        "Id":'5',
        "Name":'Party',
    },
    {
        "Id":'6',
        "Name":'Party',
    },
    {
        "Id":'7',
        "Name":'Party',
    },
    {
        "Id":'8',
        "Name":'Party',
    },
    {
        "Id":'9',
        "Name":'Party',
    },
    {
        "Id":'10',
        "Name":'Party',
    }, {
        "Id":'11',
        "Name":'Party',
    }, {
        "Id":'12',
        "Name":'Party',
    },
]
let podcastCategory=[
    {
        "Id":'1',
        "Name":'Programming',
    },
    {
        "Id":'2',
        "Name":'Rock',

    },
    {
        "Id":'3',
        "Name":'Pop',
    },
    {
        "Id":'4',
        "Name":'HipHop',
    },
    {
        "Id":'5',
        "Name":'Rock',
    },
    {
        "Id":'6',
        "Name":'HipHop',
    },
    {
        "Id":'7',
        "Name":'HipHop',
    },
    {
        "Id":'8',
        "Name":'HipHop',
    },
    {
        "Id":'9',
        "Name":'HipHop',
    },
    {
        "Id":'10',
        "Name":'HipHop',
    },
]
let responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export {MusicData,artistData,categoryData,podcastCategory,responsive,moodsData}