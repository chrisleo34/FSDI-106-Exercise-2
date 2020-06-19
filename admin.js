

var items=[];

function init(){
    console.log("Admin page");
    $("#btn-register").on('click',function(){
        register();
    });
}

window.onload=init;


// object constructor

class Item{
    constructor(code,title,price,description,category,image){
        this.code=code;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
    }
}

function ddslick(){
    $('#demoBasic').ddslick({
    data: ddData,
    width: 300,
    imagePosition: "left",
    selectText: "Select your favorite social network",
    onSelected: function (data) {
        console.log(data);
    }
});

    var ddData = [
        {
            text: "Iphone X",
            value: 1,
            selected: false,
            description: "Description with Apple",
            imageSrc: "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/full-hd/pd/un32n5300afxza/gallery/DT-UN32N5300AFXZA-heroimage-050118.jpg?$product-details-jpg$"
        },
        {
            text: "Samsung Tv",
            value: 2,
            selected: false,
            description: "Description with Samsung",
            imageSrc: "https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=SPICc55"
        },
        {
            text: "Alexa Speakers",
            value: 3,
            selected: true,
            description: "Description with Alexa",
            imageSrc: "https://media.kohlsimg.com/is/image/kohls/3540402_Charcoal?wid=600&hei=600&op_sharpen=1"
        },
    
];

    console.log(ddslick);
    console.log(ddData);

}

function register(){
    // get from the form the values
    var code=$("#code").val();
    var title=$("#title").val();
    var price=$("#price").val();
    var description=$("#description").val();
    var category=$("#category").val();
    var image=$("#image").val();
    
    //create the object
    var newItem = new Item(code,title,price,description,category,image);
    
    // push the item to the items array
    items.push(newItem)
    
    //display on the console the item
    console.log(newItem);
    console.log(items);
   
}