const newImg = (name, source, left, bottom) => {
    let name = document.createElement('img');
    name.src = = source;
    name.style.position = 'fixed';
    name.style.left = left;
    name.style.bottom = bottom;
    document.body.append(name);
};

newImg(greenCharacter, 'assets/green-character.gif', '100px', '100px');
newImg(treeSprite, 'assets/pine-tree.png', '450px', '200px');