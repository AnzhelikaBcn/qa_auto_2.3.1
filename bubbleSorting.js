// Создаем массив из 24 студентов с именами и баллами за 1 и 2 модуль
const students = [
    { name: "Student1", module1: 80, module2: 75 },
    { name: "Student2", module1: 85, module2: 90 },
    { name: "Student3", module1: 70, module2: 68 },
    { name: "Student4", module1: -92, module2: 88 },
    { name: "Student5", module1: 78, module2: 82 },
    { name: "Student6", module1: 60, module2: 70 },
    { name: "Student7", module1: 87, module2: 95 },
    { name: "Student8", module1: 75, module2: 79 },
    { name: "Student9", module1: 80, module2: 75 },
    { name: "Student10", module1: 81, module2: 87 },
    { name: "Student11", module1: 94, module2: 91 },
    { name: "Student12", module1: 68, module2: 74 },
    { name: "Student13", module1: 76, module2: 0 },
    { name: "Student14", module1: 0, module2: 0 },
    { name: "Student15", module1: -84, module2: -88 },
    { name: "Student16", module1: 73, module2: 71 },
    { name: "Student17", module1: 86, module2: 90 },
    { name: "Student18", module1: 80, module2: 75 },
    { name: "Student19", module1: 92, module2: 94 },
    { name: "Student20", module1: 82, module2: 80 },
    { name: "Student21", module1: 90, module2: 85 },
    { name: "Student22", module1: 77, module2: 81 },
    { name: "Student23", module1: 91, module2: 88 },
    { name: "Student24", module1: 69, module2: 70 }
  ];
  
  // Реализуем пузырьковую сортировку для суммы баллов за оба модуля
  function bubbleSortDescending(arr) {
    const n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        // Логирование для данной итерации
        console.log("_________новая итерация");
        console.log(`сравниваем пару ${arr[i].name} (${arr[i].module1 + arr[i].module2}) и ${arr[i + 1].name} (${arr[i + 1].module1 + arr[i + 1].module2})`);
        console.log(`сравниваем индексы ${i} и ${i + 1}`);
        console.log(`работаем с массивом ${arr.map(student => `${student.name} (${student.module1 + student.module2})`)}`);
        
        if (arr[i].module1 + arr[i].module2 < arr[i + 1].module1 + arr[i + 1].module2) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
        
        // Логирование для текущей итерации
        console.log(`получился промежуточный массив ${arr.map(student => `${student.name} (${student.module1 + student.module2})`)}`);
      }
    } while (swapped);
  
    return arr;
  }
  
  // Вызываем сортировку и выводим отсортированный массив
  const sortedStudents = bubbleSortDescending(students);
  console.log("Отсортированный массив студентов (по убыванию суммы баллов за оба модуля):", sortedStudents.map(student => `${student.name} (${student.module1 + student.module2})`));