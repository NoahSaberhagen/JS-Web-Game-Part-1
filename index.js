function newImage(y, l, b) {
    let image = document.createElement('img');
    image.src = y;
    image.style.position = 'fixed';
    image.style.left = l;
    image.style.bottom = b;
    document.body.append(image);
};

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');