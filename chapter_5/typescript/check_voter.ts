interface HashTable<T> {
    [key: string]: T;
}
const voted: HashTable<boolean> = {};

const checkVoter = (name: string) => {
    if (voted[name]) {
        console.log('Kick them out!!');
    } else {
        voted[name] = true;
        console.log('Let them vote!')
    }
}

checkVoter("tom"); // let them vote!
checkVoter("mike"); // let them vote!
checkVoter("mike"); // kick them out!