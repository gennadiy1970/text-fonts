const goodsAmount = {
    count: 100,
    log: ''
  }

  function processOrder(amount) {
    return new Promise ((res, rej) => {
      setTimeout(() => {
           if(isNaN(amount)) throw new Error("Некорректный ввод!")
          if(goodsAmount.count >= amount) {
            goodsAmount.count -= amount;
            return res("Ваш заказ готов!")
          } rej("К сожалению на складе не достаточно товаров!")
      }, 500);

    });
  }

  processOrder(50)
    .then(x => console.log(x))
    .catch(err =>  console.log(err));

