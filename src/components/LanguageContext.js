import React, { createContext, useContext, useState } from "react";

import freshImage from "../Assets/home-fresh.png";
import healthyImage from "../Assets/home-healthy.png";
import handcraftedImage from "../Assets/home-handcrafted.png";
import authenticImage from "../Assets/home-authentic.png";
import teaImage from "../Assets/home-tea.png";
import snackImage from "../Assets/home-snack.png";
import toppingImage from "../Assets/home-topping.png";
import menu1 from "../Assets/menu/menu1.png";
import menu2 from "../Assets/menu/menu2.png";
import menu3 from "../Assets/menu/menu3.png";
import menu4 from "../Assets/menu/menu4.png";
import menu5 from "../Assets/menu/menu5.png";
import menu6 from "../Assets/menu/menu6.png";
import menu7 from "../Assets/menu/menu7.png";
import menu8 from "../Assets/menu/menu8.png";
import menu9 from "../Assets/menu/menu9.png";
import menu10 from "../Assets/menu/menu10.png";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translations = {
    // English ver
    en: {
      // Home section text
      home: {
        title: "home",
        btn_about: "About Us",
        btn_browse: "Browse Menu",
        btn_find: "Find Store",
        welcome: {
          title: "TEA ALLEY",
          content: "Bubble Tea",
        },
        info_phil: {
          title: "Our Philosophy",
          philosophys: {
            item1: {
              title: "Fresh Ingredients",
              content:
                "We pride ourselves on using fresh, high-quality ingredients",
              img: freshImage,
            },
            item2: {
              title: "Healthy & Worry-free",
              content: "Our drinks and dishes are made healthy and worry-free",
              img: healthyImage,
            },
            item3: {
              title: "Handcrafted Brewed Tea",
              content:
                "Experience the freshness of our handcrafted, freshly-brewed tea",
              img: handcraftedImage,
            },
            item4: {
              title: "Authentic Flavor of Taiwan",
              content:
                "Our dishes offer the authentic, time-honored taste of Taiwan",
              img: authenticImage,
            },
          },
        },
        info_tea: {
          title: "Enjoy Taiwanese Tea-based Drink",
          teas: {
            item1: {
              title: "Various Tea Base",
              content: "Choose a various type of fresh tea for your drink",
              img: teaImage,
            },
            item2: {
              title: "Chewy Toppings",
              content:
                "Signature tapioca pearls or jellies makes your drink enjoyable",
              img: toppingImage,
            },
            item3: {
              title: "Snacks",
              content: "Find Taiwanese traditional snacks that fits your drink",
              img: snackImage,
            },
          },
        },
        info_menu: {
          title: "Our Featured Menu",
        },
        info_loca: {
          title: "Find a Store Near You",
        },
      },

      // Menu section text
      menu: {
        title: "menu",
        featured_menu: {
          item1: {
            id: 1,
            category: "featured menu",
            name: "Oat Milk Matcha Latte",
            image: menu1,
            description:
              "Matcha has a grassy taste, perhaps a nicer way to say that is earthy. It tastes much stronger than regular green tea and has a really unique flavor, so it’s a little hard to describe. If you haven’t tried it, I recommend you just give it a go and see if you like it!",
          },
          item2: {
            id: 2,
            category: "featured menu",
            name: "House Black Tea",
            image: menu2,
            description:
              "House Black is a Chinese black tea blend that can be enjoyed hot or iced. It's described as brisk and flavorful with a smooth finish",
          },
          item3: {
            id: 1,
            category: "featured menu",
            name: "Green Grape Green Tea",
            image: menu3,
            description:
              'This elegantly flavored green tea fills the mouth with the sweet and savory aroma of the famous Japanese "Kyoho" grape. Its refreshing taste makes it ideal for iced teasn 3',
          },
          item4: {
            id: 2,
            category: "featured menu",
            name: "Okinawa Brown Sugar Black Tea",
            image: menu4,
            description:
              "Okinawa milk tea is a type of milk tea that draws influence from the Okinawa region of Japan. Often compared to Hokkaido milk tea, Okinawa milk tea is a tasty blend of black tea, milk, and sweetener",
          },
          item5: {
            id: 1,
            category: "featured menu",
            name: "Puff Cream Boba Choco Milk Tea",
            image: menu5,
            description:
              "Puff Cream Boba Choco Milk Tea is a decadent beverage combining creamy milk tea with chewy tapioca pearls, topped with a fluffy layer of whipped cream and drizzled with rich chocolate syrup, offering a delightful blend of textures and flavors in every sip.",
          },
          item6: {
            id: 1,
            category: "featured menu",
            name: "Oat Milk Matcha Latte",
            image: menu6,
            description:
              "Matcha has a grassy taste, perhaps a nicer way to say that is earthy. It tastes much stronger than regular green tea and has a really unique flavor, so it’s a little hard to describe. If you haven’t tried it, I recommend you just give it a go and see if you like it!",
          },
          item7: {
            id: 2,
            category: "featured menu",
            name: "House Black Tea",
            image: menu7,
            description:
              "House Black is a Chinese black tea blend that can be enjoyed hot or iced. It's described as brisk and flavorful with a smooth finish",
          },
          item8: {
            id: 1,
            category: "featured menu",
            name: "Green Grape Green Tea",
            image: menu8,
            description:
              'This elegantly flavored green tea fills the mouth with the sweet and savory aroma of the famous Japanese "Kyoho" grape. Its refreshing taste makes it ideal for iced teasn 3',
          },
          item9: {
            id: 2,
            category: "featured menu",
            name: "Okinawa Brown Sugar Black Tea",
            image: menu9,
            description:
              "Okinawa milk tea is a type of milk tea that draws influence from the Okinawa region of Japan. Often compared to Hokkaido milk tea, Okinawa milk tea is a tasty blend of black tea, milk, and sweetener",
          },
          item10: {
            id: 1,
            category: "featured menu",
            name: "Puff Cream Boba Choco Milk Tea",
            image: menu10,
            description:
              "Puff Cream Boba Choco Milk Tea is a decadent beverage combining creamy milk tea with chewy tapioca pearls, topped with a fluffy layer of whipped cream and drizzled with rich chocolate syrup, offering a delightful blend of textures and flavors in every sip.",
          },
        },
      },

      // Location section text
      location: {
        title: "Location",
        address: {
          title: "Address",
        },
        open_hours: {
          title: "Open Hours",
        },
        contact: {
          title: "Contact",
        },
        btn_direction: "Get Direction",
      },

      // Contact section text
      contact: {
        title: "Contact",
      },
    },

    // English ver
    zh: {
      // Home section text
      home: {
        title: "首页",
        btn_about: "关于我们",
        btn_browse: "浏览菜单",
        btn_find: "找到商店",
        welcome: {
          title: "茶巷",
          content: "珍珠奶茶",
        },
        info_phil: {
          title: "我们的理念",
          philosophys: {
            item1: {
              title: "新鲜食材",
              content: "我们自豪地使用新鲜、高品质的食材",
              img: freshImage,
            },
            item2: {
              title: "健康无忧",
              content: "我们的饮品和菜肴均健康无忧",
              img: healthyImage,
            },
            item3: {
              title: "手工冲泡茶",
              content: "品尝我们手工冲泡、新鲜的茶的新鲜感",
              img: handcraftedImage,
            },
            item4: {
              title: "台湾正宗风味",
              content: "我们的菜肴提供台湾正宗、历史悠久的味道",
              img: authenticImage,
            },
          },
        },
        info_tea: {
          title: "享受台湾茶饮",
          teas: {
            item1: {
              title: "多种茶底",
              content: "为您的饮品选择各种类型的新鲜茶",
              img: teaImage,
            },
            item2: {
              title: "Q弹配料",
              content: "招牌珍珠或果冻让您的饮品更加美味",
              img: toppingImage,
            },
            item3: {
              title: "小吃",
              content: "找到适合您饮品的台湾传统小吃",
              img: snackImage,
            },
          },
        },
        info_menu: {
          title: "我们的特色菜单",
        },
        info_loca: {
          title: "找到您附近的商店",
        },
      },

      // Menu section text
      menu: {
        title: "菜单",
        featured_menu: {
          item1: {
            id: 1,
            category: "特色菜单",
            name: "燕麦奶抹茶拿铁",
            image: menu1,
            description:
              "抹茶具有草木的味道，或许更好的说法是泥土的味道。它的味道比普通绿茶浓郁得多，有着非常独特的风味，所以很难描述。如果您还没有尝试过，我建议您试一试，看看您是否喜欢！",
          },
          item2: {
            id: 2,
            category: "特色菜单",
            name: "自制红茶",
            image: menu2,
            description:
              "自制红茶是一种可以冷热饮用的中国红茶混合物。它被描述为爽口而味道浓郁，口感顺滑",
          },
          item3: {
            id: 1,
            category: "特色菜单",
            name: "绿葡萄绿茶",
            image: menu3,
            description:
              "这种优雅的风味绿茶让口中充满了日本著名“巨峰”葡萄的甜美和香气。它的清爽口感使其成为冰茶的理想选择",
          },
          item4: {
            id: 2,
            category: "特色菜单",
            name: "冲绳黑糖红茶",
            image: menu4,
            description:
              "冲绳奶茶是一种受日本冲绳地区影响的奶茶。常与北海道奶茶相比较，冲绳奶茶是红茶、牛奶和甜味剂的美味混合物",
          },
          item5: {
            id: 1,
            category: "特色菜单",
            name: "泡泡奶茶巧克力牛奶茶",
            image: menu5,
            description:
              "泡泡奶茶巧克力牛奶茶是一种奢华的饮品，将奶茶与Q弹的珍珠，盖上蓬松的奶油，淋上浓浓的巧克力糖浆，每一口都带来了丰富的口感和味道。",
          },
          item6: {
            id: 1,
            category: "特色菜单",
            name: "燕麦奶抹茶拿铁",
            image: menu6,
            description:
              "抹茶具有草木的味道，或许更好的说法是泥土的味道。它的味道比普通绿茶浓郁得多，有着非常独特的风味，所以很难描述。如果您还没有尝试过，我建议您试一试，看看您是否喜欢！",
          },
          item7: {
            id: 2,
            category: "特色菜单",
            name: "自制红茶",
            image: menu7,
            description:
              "自制红茶是一种可以冷热饮用的中国红茶混合物。它被描述为爽口而味道浓郁，口感顺滑",
          },
          item8: {
            id: 1,
            category: "特色菜单",
            name: "绿葡萄绿茶",
            image: menu8,
            description:
              "这种优雅的风味绿茶让口中充满了日本著名“巨峰”葡萄的甜美和香气。它的清爽口感使其成为冰茶的理想选择",
          },
          item9: {
            id: 2,
            category: "特色菜单",
            name: "冲绳黑糖红茶",
            image: menu9,
            description:
              "冲绳奶茶是一种受日本冲绳地区影响的奶茶。常与北海道奶茶相比较，冲绳奶茶是红茶、牛奶和甜味剂的美味混合物",
          },
          item10: {
            id: 1,
            category: "特色菜单",
            name: "泡泡奶茶巧克力牛奶茶",
            image: menu10,
            description:
              "泡泡奶茶巧克力牛奶茶是一种奢华的饮品，将奶茶与Q弹的珍珠，盖上蓬松的奶油，淋上浓浓的巧克力糖浆，每一口都带来了丰富的口感和味道。",
          },
        },
      },

      // Location section text
      location: {
        title: "位置",
        address: {
          title: "地址",
        },
        open_hours: {
          title: "营业时间",
        },
        contact: {
          title: "联系方式",
        },
        btn_direction: "获取路线",
      },

      // Contact section text
      contact: {
        title: "接触",
      },
    },
  };

  const translate = (key) => {
    const keys = key.split(".");
    let result = translations[language];
    for (let k of keys) {
      result = result[k] || {};
    }
    return typeof result === "string" ? result : Object.values(result);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
