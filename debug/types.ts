interface Dog {
  name: string;
  owner: string;
}

interface Cat {
  name: string;
  owns: string;
}

interface Person {
  name: string;
  age: number;
  bestFriend: Dog | Cat;
}