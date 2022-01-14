const {readFile,writeFile} = require('fs');

readFile('./content/first.txt', 'utf-8', (err,res) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(res);
    const first = res;

    readFile('./content/second.txt', 'utf-8', (err,res2) => {
        if (err){
            console.log(err);
            return;
        }
        
        console.log(res2);
        const second = res2;

        writeFile('./content/third.txt',
            `Resultado:\n${first}\n${second}`,
            (err,res) => {
                if (err){
                    console.log(err);
                    return;
                }

                console.log(res)
            }
        )

    })

})