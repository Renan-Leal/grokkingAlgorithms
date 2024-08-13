const greet2 = (name: string) => console.log(`How are you ${name}?`);

const bye = () => console.log("Ok, bye!");

const greet = (name: string) => {
  console.log(`Hello, ${name}!`);
  greet2(name);
  console.log("getting ready to say bye...");
  bye();
};

greet("Renan");
