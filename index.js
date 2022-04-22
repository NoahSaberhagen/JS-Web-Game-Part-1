const screenWidth = window.innerWidth;
const screenHeight = window.outerHeight;

console.log(screenHeight);

const newImage = (y, l, b) => {
    let image = document.createElement("img");
    image.src = y;
    image.style.position = "fixed";
    image.style.left = l;
    image.style.bottom = b;
    document.body.append(image);
    return image;
};

const newItem = (y, l, b) => {
    let item = newImage(y, l, b);
    item.addEventListener("dblclick", () => {
        item.remove();
    })
};

const newBackgroundRow = (imageLocation, startingPositionY) => {
    for(let i = 0; i < screenWidth/100; i++){
        let pixels = i * 100 + "px"
        newImage(imageLocation, pixels, startingPositionY);
    };
};

newBackgroundRow("assets/sky.png", "500px");
newBackgroundRow("assets/grass.png", "0px");
newBackgroundRow("assets/grass.png", "100px");
newBackgroundRow("assets/grass.png", "200px");
newBackgroundRow("assets/grass.png", "300px");
newBackgroundRow("assets/grass.png", "400px");


newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
newImage("assets/pillar.png", "350px", "100px");
newImage("assets/crate.png","150px","200px");
newImage("assets/well.png","500px","425px");
newImage("assets/tree.png","200px","300px");

newItem("assets/sword.png", "500px", "405px");
newItem("assets/sheild.png", "165px", "185px");
newItem("assets/staff.png", "600px", "100px");
