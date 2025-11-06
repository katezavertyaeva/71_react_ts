import "./styles.css";

function Lesson07() {
  // Тип any - любой тип
  let city: any = "Berlin";
  city = 235543;
  city = true;
  city = [34, "London", null, false];

  // Типизация объектов через interface
  interface User {
    name: string;
    age: number;
    // знак вопроса указывает на то, что свойство необязательное
    isAdmin?: boolean;
  }

  const userData: User = {
    name: "John",
    age: 43,
    // isAdmin: true,
  };

  interface Address {
    city: string;
    postcode: string | number;
  }

  const address1: Address = {
    city: "Paris",
    postcode: 12345,
    street: "Main street",
  };

  const address2: Address = {
    city: "London",
    postcode: "356643",
    street: "Main street",
  };

  //   Создание одноимённых интерфейсов - интерфейс с таким же именем не будет
  // отдельным интерфейсом, он просто будет дополнять предыдущий
  interface Address {
    street: string;
  }

  //  Наследование интерфейсов
  interface Person {
    fullName: string;
    email: string;
  }

  interface Admin extends Person {
    adminId: number;
  }

  const personData: Person = {
    fullName: "Adam Smith",
    email: "adam@gmail.com",
  };

  const adminData: Admin = {
    email: "john@gmail.com",
    adminId: 212999,
    fullName: "John Johnson",
  };

  // Типизация через type
  // Использование type для создания усложнённого типа для переменных
  type Weight = string | number | null;
  let personWeight: Weight = "56kg";
  let userWeight: Weight = null;
  userWeight = 45;

  // Использование type для типизации объекта
  type Animal = {
    name: string;
    weight: Weight;
  };

  const animalData: Animal = {
    name: "Lion",
    weight: "200 kg",
  };

  // Одноименные типы (type) создавать нельзя
  //   type Animal = string;

  // Объединение типов
  type ZooAnimal = Animal & { country: string };

  const zebra: ZooAnimal = {
    country: "Afrika",
    name: "Zebra",
    weight: null,
  };

  //   Generic - дженерик это переменная, в которую мы можем подставит
  //   нужный тип в момент использование
  //   Generic & Type
  type CustomTupel<T = string> = [number, string, T];

  const arrayMix: CustomTupel<boolean> = [24, "Bob", false];
  const arrayMix2: CustomTupel<number> = [40, "Mary", 2345];
  const arrayMix3: CustomTupel = [56, "Tom", "Berlin"];

  //   Generic & Interface
  interface Fruit<T = number> {
    title: string;
    address: T;
  }

  const fruit1: Fruit = {
    title: "Apple",
    address: 45,
  };

  const fruit2: Fruit<string> = {
    title: "Grape",
    address: "4399",
  };

  //   enum
  // Числовое перечисление
  //   enum Colors {
  //     Red, //0
  //     Black, //1
  //     Green, //2
  //   }

  enum Colors {
    Red = 5,
    Black, //6
    Green, //7
  }

  let currentColor: Colors = Colors.Green;
  console.log(currentColor);

  // Строковое перечисление
  //   enum для цветов сетофора
  enum TRAFFIC_LIGHT {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
  }

  const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return "Стоп!";
      case TRAFFIC_LIGHT.YELLOW:
        return "Приготовьтесь идти";
      case TRAFFIC_LIGHT.GREEN:
        return "Можно идти";
    }
  };

  // -------------Задача
  interface UserInterface {
    id: number;
    name: string;
  }

  const arrayUsers: UserInterface[] = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Mary" },
  ];

  return (
    <div className="lesson07-wrapper">{getAction(TRAFFIC_LIGHT.GREEN)}</div>
  );
}

export default Lesson07;
