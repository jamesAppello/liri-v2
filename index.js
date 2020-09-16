const inquirer = require('inquirer'), 
    fs = require('fs');


inquirer.prompt({
    name: "welcome",
    type: 'list',
    message: "What's up?",
    choices: [
        "Entertain me.",
        "CRUDabilities",
        "MOOD_SCALE"
    ]
}).then(res => {
    switch (res.welcome) {
        case 'Entertain me.':
            console.log('lemmie see if i got some games...'); 
            // THEN PROMPT ANOTHER INQUIRER-LIST --> 'options-for-liri' to then be assisted
            inquirer.prompt({
                name: 'games',
                type: 'list',
                message: "I will have more games soon, but see how you like these first.",
                choices: [
                    "STKz_753",
                    "uScrmbl_r",
                    "hshr1"
                ]
            }).then(g => {
                var uselected = g.games;
                switch(uselected) {
                    case 'STKz_753':
                        inquirer.prompt({
                            name:'sticks',
                            message: "pick a number",
                            type: 'input'
                        }).then(i => {
                            const init = i.sticks;
                            const dub = init * 2;
                            const up2x10 = dub + 20;
                            const overTwo = up2x10 / 2;
                            const io = overTwo - init;
                            if (io === 0) { io = "{--> DIVERGES <--}"; } else { io = "{--> CONVERGES <--}" };
                            console.log(`[0]: ${init}\n[1]: ${dub}\n[2]: ${up2x10}\n[3]: ${overTwo}\n[4]: ${io}\n----------`);
                        }).catch(err => {
                            if (err) throw err;
                        }).finally(statement => {
                            statement = "Isn't it cool how regardless of whatever number you pick\nyou will ALWAYS get then (10) as your final answer?!\n*UNLESS YOU PICK SOME ASTRONOMICAL INTEGER*";
                            console.log(statement);
                            setTimeout(() => {
                                console.log('----------\nI hope you found this interesting!\nHave a blessed day!');
                            }, 1527);
                        });
                        break;
                    case 'uScrmbl_r':
                        inquirer.prompt({
                            name: 'scramble',
                            message: "Scramble a character string of your choice.\nEnter your name/sudoname/alias/nickname/etc (have fun).",
                            type: 'input'
                        }).then(str => {
                            const s = str.scramble;
                            const a = s.split(""),
                            n = a.length;
                            for (let i = n - 2; i > 0; i--) {
                                let j = Math.floor(Math.random() * ((i+(10e10*(2/3)-1)) - (Math.PI*0.618)));
                                let tmp = a[i];
                                a[i] = a[j];
                                a[j] = tmp;
                                let list = a.join("");
                                let holder = [];
                                holder.push(list);
                                console.log(holder.toString());
                                return holder;
                            } 
                        }).catch(err => {
                            if (err) throw err;
                        });
                        break; 
                }
            });
            break;
        
        case 'CRUDabilities': 
            // import 'fs' module
            inquirer.prompt({
                name: "crud",
                type: 'list',
                message: "What would you like to do?",
                choices: [
                    "CREATE_FILE",
                    "READ_FILE",
                    "UPDATE_FILE",
                    "DELETE_FILE"
                ]
            }).then(selected => {
                let feat = selected.crud;
                switch(feat) {
                    case "CREATE_FILE":
                        inquirer.prompt({
                            name: 'create',
                            message: "What do you want to say?"
                        }).then(res => {
                            let data = res.create;
                            fs.writeFile("liriLog.txt", data, () => console.log('file created!'));
                        }).catch(err => {
                            if (err) throw err;
                        });
                        break;
                    case "READ_FILE":
                        fs.readFile('liriLog.txt', 'UTF-8', (err, fileData) => {
                            if (err) throw new Error('*|*> there was an issue attempting to read file <*|*');
                            console.log(fileData);
                        });
                        break;
                    case "UPDATE_FILE":

                        inquirer.prompt({
                            name: 'addtofile',
                            message: "What else do you want to say?"
                        }).then(res => {
                            let data = res.addtofile;
                            fs.appendFile('liriLog.txt', ("\n"+data), (err) => {
                                if (err) throw new Error('*|*> there was an issue appending to the file <*|*')
                            });
                        }).catch(err => {
                            if (err) throw err;
                        })
                        break;
                    case "DELETE_FILE":
                        console.log('delete');
                        fs.unlink('liriLog.txt', () => console.log('file removed!'))
                        break;            
                }
            }).catch(err => {
                if (err) throw err;
            });
            break;        
        case 'MOOD_SCALE':
            inquirer.prompt({
                name: 'outoften',
                message: "On a scale of 1-10 (1: worst | 10: best) how would you describe your current mood?",
                type: 'list',
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }).then(res => {
                let mood_scale = res.outoften;
                if (mood_scale <= 3) {
                    console.log('----------------------\nIt is better to be pissed off than pissed on, lol.'); 
                    setTimeout(() => {
                        console.log("Keep your head up! Dwelling only makes things worse!\nYou'll be ok, because I have faith in you that you have the strength & will to do so\n----------------------")
                    }, 1221);
                } else if(mood_scale >= 7) {
                    console.log("WOOOOOPTIIIEEEE DOOOOOOOO!!!!");
                } else {
                    console.log("mehhhh")
                }
            })
            break;    
    }
}).catch(err => {
    console.log(err);
});