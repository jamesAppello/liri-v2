const inquirer = require('inquirer');
//import classes


inquirer.prompt({
    name: "welcome",
    type: 'list',
    message: "What's up?",
    choices: [
        "Entertain me.",
        "SkillStack.",
        "Looking for work.",
        "Trying to get some work done."
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
                    "uScrmbl_r"
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
                            var init = i.sticks;
                            var dub = init * 2;
                            var up2x10 = dub + 20;
                            var overTwo = up2x10 / 2;
                            var io = overTwo - init;
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
                            message: "Let's scramble your name so it kind of looks like the name but its not ;)\nEnter your name/sudoname/alias/nickname/etc (have fun).",
                            type: 'input'
                        }).then(str => {
                            var s = str.scramble;
                            var a = s.split(""),
                            n = a.length;
                            for (var i = n - 2; i > 0; i--) {
                                var j = Math.floor(Math.random() * (i - 2 * 1.618 - (2 / 3) * 5 + 7 / 3));
                                var tmp = a[i];
                                a[i] = a[j];
                                a[j] = tmp;
                                var list = a.join("");
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
            })
            break;
        case 'SkillStack.':
            console.log('LETS FIND OUT HOW GREAT YOU ARE!'); 
            inquirer.prompt({
                name: 'skillstack',
                message: "What here grabs your interest?\nYou can pick more than one!",
                type: 'checkbox',
                choices: [
                    "Science",
                    "Technology",
                    "Engineering",
                    "Medical",
                    "Hospitality",
                    "Business",
                    "etc/misc/other"
                ]
            }).then(ssr => {
                const sp = ssr.skillstack;
                if (sp.length == 7) { console.log("----------------------\nWE GOT A SUPERSTAR OVER HERE!\n----------------------"); };
                // console.log(sp);

                
            })
            break;
        case 'Looking for work.':
            console.log('Great! How many applocations went out today?'); 
            // HAVE PROMPT FOR USER TO RETURN AN INTEGER for n-amount of job applications sent
            break;        
        case 'Trying to get some work done.':
            console.log('It is better to come to ammends by working through the problem instead of ignoring it.'); 
            // ASK USER WHAT THEY ARE WORKING ON && ASK IF THAT'S THE ONLY THING OR THERE ARE OTHERS 
            //-- AND IF THERE IS MORE THAN ONE::ask on a LIKERT_SCALE to guage user-focus
            break;    
    }
}).catch(err => {
    console.log(err);
});