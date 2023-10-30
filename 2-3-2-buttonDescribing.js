/*
Опиcываем кнопку отправки сообщений в чат с помощью конструктора класса, 
кнопка должна иметь определенный размер - ширина и высота числовое значение, 
тип кнопки (type = button), цвет кнопки (green), 
создаем метод кнопки (onClick, выводящий в консоль информацию о нашей кнопке в формате 

console.log(this.props) - выводим все свойства

Создаем экземпляр класса button и передаем аргументы в наш конструктор класса. 
А также, проверяем в отдельной функции testButton(), что свойства этого экземпляра 
класса соответствуют заданным.
*/

class Button {
    constructor(width, height) {
      this.props = {
        type: "button",
        color: "green",
        width,
        height
      };
    }
  
    onClick() {
      console.log(this.props);
    }
  }
  
  // Создание экземпляра класса Button
  const messageButton = new Button(100, 40);

  
  function testButton() {
    // Проверяем, что свойства экземпляра класса соответствуют заданным
    if (
      messageButton.props.type === "button" &&
      messageButton.props.color === "green" &&
      messageButton.props.width === 100 &&
      messageButton.props.height === 40
    ) {
      console.log("Свойства кнопки соответствуют ожиданиям.");
    } else {
      console.error("Свойства кнопки не соответствуют ожиданиям.");
    }
  }
  
  // Вызов тестовой функции
  testButton();
  
  // Вызов метода onClick для кнопки
  messageButton.onClick();