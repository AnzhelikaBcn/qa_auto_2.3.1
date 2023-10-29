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