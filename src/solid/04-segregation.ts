interface Bird {
  eat(): void;
}

interface FlyignBird {
  fly(): number;
}

interface RunningBird {
  run(): void;
}

interface SwimmingBird {
  swim(): void;
}

class Tucan implements Bird, FlyignBird {
  public eat() {}
  public fly() { return 100;}
}

class Humminbird implements Bird, FlyignBird {
  public eat() {}
  public fly() { return 100;}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmingBird {
  public eat() {}
  public swim() {}
} 