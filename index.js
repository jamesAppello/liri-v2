const inquirer = require('inquirer');
//import classes


inquirer.prompt({
    name: "welcome",
    type: 'list',
    message: "What's up?",
    choices: [
        "Entertain me.",
        "Just bored...",
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
                            console.log(`initialPick: ${init}\ndoubled: ${dub}\nadd20: ${up2x10}\nover2: ${overTwo}\nSolution:${io}\n----------`);
                        }).catch(err => {
                            if (err) throw err;
                        }).finally(statement => {
                            statement = "Isn't it cool how regardless of whatever number you pick\nyou will ALWAYS get then (10) as your final answer?";
                            console.log(statement);
                            setTimeout(() => {
                                console.log('----------\nthanks for playing!')
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
                            // LOOP_ONE
                            for (var i = n - 3; i > 0; i--) {
                                var j = Math.floor(
                                Math.random() * (i - 2 * 1.618 - (2 / 3) * 5 + 7 / 3)
                                );
                                var tmp = a[i];
                                a[i] = a[j];
                                a[j] = tmp;
                                var list = a.join("");

                                let holder = [];
                                holder.push(list);
                                console.log(holder);
                                return holder;
                            } 
                        }).catch(err => {
                            if (err) throw err;
                        });
                        break;    
                }
            })
            break;
        case 'Just bored.':
            console.log('Everyone gets bored at times. Is there anything you should be doing right now?'); 
            // PROMPT A LIST OF BUILT IN ACTIVITIES ('define & set')
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