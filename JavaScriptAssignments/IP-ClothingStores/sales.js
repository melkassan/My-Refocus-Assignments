/* Your ultimate goal for this project is to create the functionality of a clothing store’s
e commerce website. Its users should be able to perform the following actions:
-Create, remove, and add shop clients.
-Create, remove, and add clothing items and their descriptions.
-Change the availability of a certain item: how many items are in stock.
-Purchase clothing items ordered by clients.
-Deduct clothing item quantity from what’s in stock */
const shop = {
  shop_information: [
    {
      shop_name: 'Zara',
      shop_address: 'Manhattan Avenue, New York',
      shop_ucode: 'NY656',
    },
  ],

  user_information: [
    {
      user_firstName: 'Angelina',
      user_lastName: 'Jolie',
      user_age: 47,
      user_bdate: '4.06.1975',
    },
  ],
  items: [
    {
      item_name: 'Blue Jeans',
      item_category: 'Trousers',
      item_price: 50,
      item_stockqtty: 456,
    },
  ],
  add_user: (userObj, shopObj) => {
    if (!search_firstName(userObj.user_firstName, shopObj)) {
      add(userObj, shopObj);
      console.log(`You added ${userObj.user_firstName} to the Users List`);
      view_users(shopObj);
    } else {
      console.log(
        `User ${userObj.user_firstName} is already on the list, cannot add user.`
      );
      console.log(` `);
    }
  },
  remove_user: (userObj, shopObj) => {
    if (search_firstName(userObj, shopObj)) {
      delete_user(userObj, shopObj);
      console.log(`You remove ${userObj} on the Users List`);
      view_users(shopObj);
    } else {
      console.log(
        `Cannot remove ${userObj}, unable to find user on Users list`
      );
    }
  },
  add_item: (userObj, shopObj) => {
    if (!search_item(userObj.item_name, shopObj)) {
      add(userObj, shopObj);
      console.log(`You added ${userObj.item_name} to the Items List.`);
      view_items(shopObj);
    } else {
      console.log('Item is already on the list, cannot add item.');
    }
  },
  restock_item: (item, shopObj, qtty) => {
    if (search_item(item, shopObj)) {
      //do restock items here
      shopObj.forEach(i => {
        if (i.item_name == item) {
          i.item_stockqtty += qtty;
        }
      });
      console.log(`You added ${qtty} ${item} on its inventory`);
      view_items(shopObj);
    } else {
      console.log(`Sorry could not find ${item} on the item list`);
    }
  },
  remove_item: (userObj, shopObj) => {
    delete_item(userObj, shopObj);
    console.log(`You remove ${userObj} on the Item List`);
    view_items(shopObj);
    //console.log(`--------------------------------${userObj}`);
  },
};

//callback
add = (dataObj, shopObj) => shopObj.push(dataObj);

search_item = (dataObj, shopObj) => {
  let status = false;
  for (let i in shopObj) {
    if (shopObj[i].item_name == dataObj) {
      status = true;
    }
  }
  return status;
};
search_firstName = (dataObj, shopObj) => {
  let status = false;
  for (let i in shopObj) {
    if (shopObj[i].user_firstName == dataObj) {
      status = true;
    }
  }
  return status;
};
check_item = (dataObj, shopObj) => {
  let status = false;
  for (let i in dataObj) {
    for (let j in shopObj) {
      if (dataObj[i].item_name == shopObj[j].item_name  && dataObj[i].item_stockqtty < shopObj[j].item_stockqtty) {
        status = true;
      }
    }
  }
  return status;
};
delete_item = (dataObj, shopObj) => {
  for (let i in shopObj) {
    if (shopObj[i].item_name == dataObj) {
      delete shopObj[i];
    }
  }
};
delete_user = (dataObj, shopObj) => {
  for (let i in shopObj) {
    if (shopObj[i].user_firstName == dataObj) {
      delete shopObj[i];
    }
  }
};
view_users = list => {
  console.log('Users List');
  console.log('First Name      Last Name         Age     Birthday');
  console.log('----------------------------------------------------------');
  list.forEach(i => {
    console.log(
      `${i.user_firstName}    -    ${i.user_lastName}     -    ${i.user_age}     -     ${i.user_bdate}`
    );
  });
  console.log('----------------------------------------------------------');
  console.log(' ');
};
view_items = list => {
  console.log('Items List');
  console.log('Name         Category         Price       Quantity');
  console.log('----------------------------------------------------------');

  list.forEach(i => {
    console.log(
      `${i.item_name}    -    ${i.item_category}     -    ${i.item_price}     -     ${i.item_stockqtty}`
    );
  });
  console.log('----------------------------------------------------------');
  console.log(' ');
};
//closure
user = (user = '') => {
  let isUser = search_firstName(user, shop.user_information);
  let user_log = '';
  const cart = [];
  const order = [];

  if (isUser) {
    user_log = user;
    console.log(`You have selected ${user_log}`);
    console.log(' ');
  }
  view_cart = ()=>{
    console.log(`${user_log}'s Cart`);
    console.log('Item            Category      Cost    Quantity');
    cart.forEach(i=>{
      console.log(`${i.item_name}  -   ${i.item_category}   -   ${i.item_price}   -   ${i.item_stockqtty}`);
    });
    console.log('--------------------------------------------');
    console.log(' ');
  };
  show_reciept = (money = 0) => {
    let g_total = 0;
    console.log('            RECIEPT OF SALE');
    console.log(`Shop Name: ${shop.shop_information[0].shop_name}`);
    console.log(`Address: ${shop.shop_information[0].shop_address}`);
    console.log(`Reciept #: ${shop.shop_information[0].shop_ucode}`);
    console.log('--------------------------------------------');
    console.log('QTY   ITEM                 AMOUNT');
    console.log('--------------------------------------------');
    for (let i of order) {
      let total = 0;
      console.log(
        `${i.item_stockqtty}    ${
          i.item_name
        }            ₱${i.item_price.toFixed(1)}`
      );
      total = i.item_price * i.item_stockqtty;
      g_total += total;
    }
    console.log('--------------------------------------------');
    console.log(`TOTAL                      ${g_total.toFixed(1)}`);
    console.log(`Cash                       ${money.toFixed(1)}`);
    console.log(`Change                     ${(money - g_total).toFixed(1)}`);
    if((money - g_total)<0){
      console.log(`Insufficient funds. Please ask more money to ${user_log}`);
    }
    console.log(' ');
    console.log('   THANK YOU AND COME AGAIN');
    console.log(' ');
  };
  add_toCart = (item, qtty) => {
    if (isUser && user_log != '') {
      if (search_item(item, shop.items)) {
        //add cart here
        shop.items.forEach(i => {
          if (i.item_name == item) {
            let nval = {
              item_name: i.item_name,
              item_category: i.item_category,
              item_price: i.item_price,
              item_stockqtty: qtty,
            };
            cart.push(nval);
          }
        });
        console.log(`You have successfully added ${qtty} ${item} to ${user_log}'s cart.`);
        view_cart();
      } else {
        console.log(`Sorry could not find ${item} on the item list. Add to cart failed. `);
        console.log(' ');
      }
    } else {
      console.log(`User ${user} is not logged in. Please select user to Logged in and add to cart.`);
      console.log(' ');
    }
  };
  confirm_order = (money = 0) => {
    if (isUser && user_log != '') {
      if (money != 0) {
        if (cart.length != 0) {
          const the_items = [
            ...cart
              .reduce((map, obj) => map.set(obj.item_name, obj), new Map())
              .values(),
          ];

          for (let i in the_items) {
            let inner = [];
            let qtty = 0;
            for (let j in cart) {
              if (cart[j].item_name == the_items[i].item_name) {
                qtty += cart[j].item_stockqtty;
              }
            }
            inner = {
              item_name: the_items[i].item_name,
              item_category: the_items[i].item_category,
              item_price: the_items[i].item_price,
              item_stockqtty: qtty,
            };
            order.push(inner);
          }
          if (check_item(order, shop.items)) {
            //do the transaction
            for (let i in order) {
              shop.items.forEach(j => {
                if (j.item_name == order[i].item_name) {
                  j.item_stockqtty -= order[i].item_stockqtty;
                }
              });
            }
            console.log(`You have successfully confirmed an order for ${user_log}.`);
            console.log(' ');
            show_reciept(money);
            isUser = false;
            user_log = '';
          } else {
            console.log(
              'Cannot transact Order. Please check and  restock these items on the inventory.'
            );
            console.log('Item           Order         Shop Inventory');
            for (let i in order) {
              var qtty;
              for (let j in shop.items) {
                if (shop.items[j].item_name == order[i].item_name) {
                  qtty = shop.items[j].item_stockqtty;
                }
              }
              console.log(`${order[i].item_name}    ${order[i].item_stockqtty}            ${qtty}`);
            }
          }
        } else {
          console.log(`${user_log}'s cart is empty. Please purchase an order.`);
          console.log(' ');
        }
      } else {
        console.log(`You don't have any money to purchase an item.`);
        console.log(' ');
      }
    } else {
      console.log(
        `User ${user} is not logged. Please select user to Logged in and confirm order.`
      );
      console.log(' ');
    }
  };
  return {
    add_toCart,
    confirm_order,
  };
};

shop.add_user(
  {
    user_firstName: 'Jonel',
    user_lastName: 'Abocado',
    user_age: 25,
    user_bdate: '4.06.1991',
  },
  shop.user_information
);
shop.add_user(
  {
    user_firstName: 'Jenylyn',
    user_lastName: 'Abocado',
    user_age: 25,
    user_bdate: '4.06.1997',
  },
  shop.user_information
);
shop.add_user(
  {
    user_firstName: 'Jonel',
    user_lastName: 'Abocado',
    user_age: 25,
    user_bdate: '4.06.1991',
  },
  shop.user_information
);
shop.remove_user('Jonel', shop.user_information); //Remove user Jonel
shop.add_user(
  {
    user_firstName: 'Jonel',
    user_lastName: 'Abocado',
    user_age: 25,
    user_bdate: '4.06.1991',
  },
  shop.user_information
);
//You added a user
shop.add_item(
  {
    item_name: 'Jogging Pants',
    item_category: 'Trousers',
    item_price: 30,
    item_stockqtty: 400,
  },
  shop.items
);
shop.add_item(
  {
    item_name: 'Shorts',
    item_category: 'Trousers',
    item_price: 35,
    item_stockqtty: 50,
  },
  shop.items
);
//You added an item
shop.remove_item('Shorts', shop.items);
shop.restock_item('Blue Jeans', shop.items, 5);
shop.restock_item('Blue Jeans', shop.items, 5);

user('Angelina');
add_toCart('Blue Jeans', 50);
add_toCart('Blue Jeans', 3);
add_toCart('Jogging Pants', 20);
add_toCart('Shorts', 20);
add_toCart('Jogging Pants', 5);
confirm_order(5000);
add_toCart('Jogging Pants', 5);

user('Jenylyn');
confirm_order(5000);
add_toCart('Blue Jeans', 200);
add_toCart('Blue Jeans', 50);
confirm_order(200);

confirm_order(200);
add_toCart('Jogging Pants', 5);

user('Angelina');
add_toCart('Blue Jeans', 200);
confirm_order(200);

