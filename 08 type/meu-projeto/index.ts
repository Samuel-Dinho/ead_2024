type TypeA = { propA: string };
type TypeB = { propB: number };
type IntersectionType = TypeA & TypeB;

function handleUnionAndIntersection(
  input: string | number,
  details: IntersectionType
): void {
  console.log("Input:", input);
  console.log("Details:", details.propA, details.propB);
}


handleUnionAndIntersection(42, { propA: "Texto", propB: 99 });


type ConditionalType<T> = T extends true ? { flag: true } : { flag: false };

function checkConditional<T extends boolean>(input: T): ConditionalType<T> {
  return (input ? { flag: true } : { flag: false }) as ConditionalType<T>;
}


const resultTrue = checkConditional(true);  
const resultFalse = checkConditional(false); 

console.log(resultTrue); 
console.log(resultFalse); 


type Config = {
    host: string;
    port: number;
    useSSL: boolean;
  };
  
  function updateConfig(config: Partial<Config>): Config {
    const defaultConfig: Config = { host: "localhost", port: 80, useSSL: false };
    return { ...defaultConfig, ...config };
  }
  
  function printConfig(config: Readonly<Config>): void {
    console.log(`Host: ${config.host}, Port: ${config.port}, SSL: ${config.useSSL}`);
   
  }
  

  const newConfig = updateConfig({ port: 443, useSSL: true });
  printConfig(newConfig);

  
  type CountryCapitalMap = Record<string, string>;

const countries: CountryCapitalMap = {
  Brazil: "Brasília",
  USA: "Washington, D.C.",
  France: "Paris",
};

function getCapital(country: string): string | undefined {
  return countries[country];
}

// Exemplo de uso:
console.log(getCapital("Brazil")); 
console.log(getCapital("India")); 

function createPartialList<T>(items: Partial<T>[]): Partial<T>[] {
    return items;
  }
  

  type User = { id: number; name: string; age: number };
  
  const partialUsers = createPartialList<User>([
    { id: 1, name: "Alice" },
    { age: 30 },
  ]);
  console.log(partialUsers);
  