let text="cactus";
    const firstLetter = text[0];
    const regex = new RegExp(firstLetter, 'g'); 
    const result = firstLetter + text.slice(1).replace(regex, '*'); 
    console.log(result);