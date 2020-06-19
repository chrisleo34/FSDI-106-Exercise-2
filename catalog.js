

var items=[{
    //first item
    code:'1tvs',
    title:'TV 60" Samsung',
    price:'$1,000',
    description:' This is a long description for a TV',
    category:'Electronics',
    image:'https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/full-hd/pd/un32n5300afxza/gallery/DT-UN32N5300AFXZA-heroimage-050118.jpg?$product-details-jpg$'
},
  {  //second item
    code:'1phone10',
    title: 'Iphone X',
    price:'$10,000',
    description: 'This is a long description for a Phone',
    catagory:'Sound',
    image:'https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=SPICc55'
           
  },        
  
  {
      //third item
      
      code:'2spk',
      title:'Alexa Home Speaker',
      price: '$100',
      description:'This is a long description for Speakers',
      category:'Sound',
      image:'https://media.kohlsimg.com/is/image/kohls/3540402_Charcoal?wid=600&hei=600&op_sharpen=1'
    }
    ];

function displayCatalog(){
    for(var i=0;i<items.length;i++){
        
        var product=items[i];
        
    var layout=`
        <div class="item" id="${product.code}">
            <img src="${product.image}">
            <h4> ${product.title} </h4>
            <h6 class="itemPrice"> ${product.price}</h6>
            <p> ${product.description} </p>
            <button class="btn btn-secondary" > Add to Cart </button>
        </div>
        `;
        
        $('#catalog').append(layout);
    
    }
}

function init(){
    console.log('catalog page');
    displayCatalog();
}

window.onload=init;