import React, { createContext, useContext, useState, useEffect } from "react";

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
import menu11 from "../Assets/menu/menu11.png";
import menu12 from "../Assets/menu/menu12.png";
import menu13 from "../Assets/menu/menu13.png";
import menu14 from "../Assets/menu/menu14.png";
import menu15 from "../Assets/menu/menu15.png";
import menu16 from "../Assets/menu/menu16.png";
import menu17 from "../Assets/menu/menu17.png";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // 언어가 바뀔 때마다 HTML의 lang 속성 업데이트
    document.documentElement.lang = language;
  }, [language]);

  const translations = {
    // English ver
    en: {
      // Home section text
      home: {
        title: "Home",
        btn_about: "About Us",
        btn_browse: "Browse Menu",
        btn_find: "Find Store",
        btn_more: "More About Us",
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
        title: "Menu",
        featured_menu: {
          item1: {
            name: "Oat Milk Matcha Latte",
            image: menu1,
            description:
              "Matcha has a grassy taste, perhaps a nicer way to say that is earthy. It tastes much stronger than regular green tea and has a really unique flavor, so it’s a little hard to describe. If you haven’t tried it, I recommend you just give it a go and see if you like it!",
          },
          item2: {
            name: "House Black Tea",
            image: menu2,
            description:
              "House Black is a Chinese black tea blend that can be enjoyed hot or iced. It's described as brisk and flavorful with a smooth finish",
          },
          item3: {
            name: "Green Grape Green Tea",
            image: menu3,
            description:
              'This elegantly flavored green tea fills the mouth with the sweet and savory aroma of the famous Japanese "Kyoho" grape. Its refreshing taste makes it ideal for iced teas',
            nutrition: "Lactose-free",
          },
          item4: {
            name: "Okinawa Brown Sugar Black Tea",
            image: menu4,
            description:
              "Okinawa milk tea is a type of milk tea that draws influence from the Okinawa region of Japan. Often compared to Hokkaido milk tea, Okinawa milk tea is a tasty blend of black tea, milk, and sweetener",
          },
          item5: {
            name: "Puff Cream Boba Choco Milk Tea",
            image: menu5,
            description:
              "Puff Cream Boba Choco Milk Tea is a decadent beverage combining creamy milk tea with chewy tapioca pearls, topped with a fluffy layer of whipped cream and drizzled with rich chocolate syrup, offering a delightful blend of textures and flavors in every sip.",
            nutrition: "Caffeine-free",
          },
          item6: {
            name: "Lychee Lemon Tea",
            image: menu6,
            description:
              "Lychee lemon tea is a refreshing beverage that combines the sweet, floral notes of lychee with the tart, citrusy zest of lemon. This delightful tea can be served either hot or iced, making it a versatile choice for all seasons. ",
            nutrition: "Caffeine-free, Lactose-free",
          },
        },
        milk_tea: {
          item1: {
            name: "Oat Milk Matcha Latte",
            image: menu1,
            description:
              "Matcha has a grassy taste, perhaps a nicer way to say that is earthy. It tastes much stronger than regular green tea and has a really unique flavor, so it’s a little hard to describe. If you haven’t tried it, I recommend you just give it a go and see if you like it!",
          },
          item2: {
            name: "House Black Tea",
            image: menu2,
            description:
              "House Black is a Chinese black tea blend that can be enjoyed hot or iced. It's described as brisk and flavorful with a smooth finish",
          },
          item3: {
            name: "Okinawa Brown Sugar Black Tea",
            image: menu4,
            description:
              "Okinawa milk tea is a type of milk tea that draws influence from the Okinawa region of Japan. Often compared to Hokkaido milk tea, Okinawa milk tea is a tasty blend of black tea, milk, and sweetener",
          },
          item4: {
            name: "Puff Cream Boba Choco Milk Tea",
            image: menu5,
            description:
              "Puff Cream Boba Choco Milk Tea is a decadent beverage combining creamy milk tea with chewy tapioca pearls, topped with a fluffy layer of whipped cream and drizzled with rich chocolate syrup, offering a delightful blend of textures and flavors in every sip.",
            nutrition: "Caffeine-free",
          },
          item5: {
            name: "Marshmallow Milk Tea",
            image: menu8,
            description:
              "Milk tea that is sweetened or topped with marshmallows, adding a creamy and fluffy texture to the beverage.",
            nutrition: "Caffeine-free",
          },
          item6: {
            name: "Oreo Milk Tea",
            image: menu14,
            description:
              "A milk tea beverage that includes Oreo cookies, either blended into the tea or added as a topping, creating a unique and popular flavor combination.",
            nutrition: "Caffeine-free",
          },
          item7: {
            name: "Tieguanyin Latte",
            image: menu10,
            description:
              "Latte made with Tieguanyin tea, a premium variety of Chinese oolong tea. The drink combines the floral and slightly sweet notes of Tieguanyin tea with the creamy texture of a latte.",
          },
          item8: {
            name: "Chocolate Latte",
            image: menu13,
            description:
              " A latte that incorporates chocolate, combining the creamy texture of a latte with the rich, sweet flavor of chocolate.",
            nutrition: "Caffeine-free",
          },
        },
        fruit_tea: {
          item1: {
            name: "Green Grape Green Tea",
            image: menu3,
            description:
              'This elegantly flavored green tea fills the mouth with the sweet and savory aroma of the famous Japanese "Kyoho" grape. Its refreshing taste makes it ideal for iced teas',
            nutrition: "Caffeine-free, Lactose-free",
          },
          item2: {
            name: "Lychee Lemon Tea",
            image: menu6,
            description:
              "Lychee lemon tea is a refreshing beverage that combines the sweet, floral notes of lychee with the tart, citrusy zest of lemon. This delightful tea can be served either hot or iced, making it a versatile choice for all seasons. ",
            nutrition: "Caffeine-free, Lactose-free",
          },
          item3: {
            name: "Peach Green Tea",
            image: menu7,
            description:
              " Type of green tea that is flavored with peach, combining the grassy freshness of green tea with the sweet and aromatic notes of peach.",
            nutrition: "Lactose-free",
          },
          item4: {
            name: "Orange Green Tea",
            image: menu9,
            description:
              " Type of green tea that is flavored with orange, offering a citrusy twist to the traditional green tea flavor.",
            nutrition: "Caffeine-free, Lactose-free",
          },
          item5: {
            name: "Lemon Black Tea",
            image: menu11,
            description:
              "Type of black tea that is flavored with lemon, offering a refreshing citrus twist to the robust and rich flavor of black tea.",
            nutrition: "Lactose-free",
          },
          item6: {
            name: "Hibiscus Tea",
            image: menu12,
            description:
              "A tea made from the dried petals of the hibiscus flower, known for its vibrant red color and tart, cranberry-like flavor.",
            nutrition: "Caffeine-free, Lactose-free",
          },
        },
        snack: {
          item1: {
            name: "Boba Pocket",
            image: menu15,
            description:
              "This hand-held treat encases chewy tapioca pearls and your choice of premium tea blend in a soft, sweet dough. Perfect for on-the-go refreshment, each Boba Pocket offers a burst of flavor with every bite.",
          },
          item2: {
            name: "Popcorn Chicken",
            image: menu16,
            description:
              "Marinated in a blend of spices and fried to golden perfection, these tender morsels are served hot and ready to dip into your choice of classic or spicy sauces. ",
          },
          item3: {
            name: "Garlic Waffle Fries",
            image: menu17,
            description:
              "Thick-cut and seasoned with a robust garlic rub, these fries are crisped to perfection and served with a side of creamy aioli dip.",
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

      // Leaves section text
      leaves: {
        title: "Leaves",
        our_leaves: {
          subtitle: "Our Leaves",
          intro1:
            "At Tea Alley, we pride ourselves on the superior quality of our tea leaves, " +
            "which sets us apart in the bustling world of milk tea. Our leaves are sourced directly from the esteemed " +
            "high-altitude estates of Taiwan, where the unique climate and rich soil impart a distinctive flavor and " +
            "aroma unmatched by ordinary leaves. ",
          intro2:
            "Welcome to our cozy retreat where tradition meets taste—Tea Alley, At our heart lies a dedication to quality," +
            "beginning with our choice of tea leaves that set our milk teas apart. We proudly feature Tieguanyin and Alishan" +
            "tea leaves, renowned for their exceptional flavors and quality.",
        },
        tea1: {
          subtitle: "Tieguanyin Tea",
          intro1:
            "Tieguanyin is a premium variety of Chinese oolong tea originating from the Fujian province. It is named after" +
            "the Buddhist deity Guanyin, the Goddess of Mercy. This tea is known for its unique and intricate production " +
            "process, which involves a precise series of steps including withering, rolling, oxidation, and firing. The result" +
            "is a distinctive tea with a floral aroma and a complex flavor profile that can range from fresh and green to sweet" +
            "and roasted, depending on the degree of fermentation. Tieguanyin is also highly appreciated for its reputed health" +
            "benefits, including aiding digestion and providing antioxidants.",
        },
        tea2: {
          subtitle: "Alishan Tea",
          intro1:
            "Alishan tea refers to a high-quality oolong tea grown in the Alishan mountain range of Taiwan. " +
            "This tea is renowned for its smooth, floral flavor and creamy texture, which are the result of the unique" +
            "climatic conditions and high altitudes at which it is cultivated. Alishan tea leaves are typically handpicked" +
            "and carefully processed to enhance their delicate aroma and flavor profiles. This tea is highly valued by" +
            "connoisseurs and is often enjoyed for its soothing effects and subtle sweetness.",
        },
      },
    },

    // Chinese ver
    zh: {
      // Home section text
      home: {
        title: "首页",
        btn_about: "关于我们",
        btn_browse: "浏览菜单",
        btn_find: "找到商店",
        btn_more: "更多关于我们",
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
            name: "燕麦奶抹茶拿铁",
            image: menu1,
            description:
              "抹茶的味道带有草味，或许更好的说法是土味。它比普通绿茶味道浓郁得多，有一种非常独特的风味，所以有点难以描述。如果你还没有尝试过，我建议你尝一尝，看看你是否喜欢！",
          },
          item2: {
            name: "招牌红茶",
            image: menu2,
            description:
              "招牌红茶是一种可冷可热享用的中国红茶混合饮品。其味道被描述为鲜明且富有风味，口感顺滑",
          },
          item3: {
            name: "绿葡萄绿茶",
            image: menu3,
            description:
              "这款优雅的绿茶充满了日本著名“巨峰”葡萄的甜美和咸香。其清新的口感非常适合制作冰茶",
            nutrition: "不含乳糖",
          },
          item4: {
            name: "冲绳黑糖黑茶",
            image: menu4,
            description:
              "冲绳奶茶是一种受冲绳地区影响的奶茶。经常与北海道奶茶相比，冲绳奶茶是黑茶、牛奶和甜味剂的美味混合",
          },
          item5: {
            name: "泡沫奶油波霸巧克力奶茶",
            image: menu5,
            description:
              "泡沫奶油波霸巧克力奶茶是一种结合了奶油奶茶和Q弹珍珠，顶部覆盖一层蓬松的奶油并淋上丰富巧克力糖浆的奢华饮品，每一口都能享受到多重质地和风味的交融",
            nutrition: "无咖啡因",
          },
          item6: {
            name: "荔枝柠檬茶",
            image: menu6,
            description:
              "荔枝柠檬茶是一种清爽的饮品，结合了荔枝的甜美花香和柠檬的酸甜柑橘香气。这款美妙的茶可以热饮或冷饮，适合四季享用",
            nutrition: "无咖啡因，不含乳糖",
          },
        },
        milk_tea: {
          item1: {
            name: "燕麦奶抹茶拿铁",
            image: menu1,
            description:
              "抹茶的味道带有草味，或许更好的说法是土味。它比普通绿茶味道浓郁得多，有一种非常独特的风味，所以有点难以描述。如果你还没有尝试过，我建议你尝一尝，看看你是否喜欢！",
          },
          item2: {
            name: "招牌红茶",
            image: menu2,
            description:
              "招牌红茶是一种可冷可热享用的中国红茶混合饮品。其味道被描述为鲜明且富有风味，口感顺滑",
          },
          item3: {
            name: "冲绳黑糖黑茶",
            image: menu4,
            description:
              "冲绳奶茶是一种受冲绳地区影响的奶茶。经常与北海道奶茶相比，冲绳奶茶是黑茶、牛奶和甜味剂的美味混合",
          },
          item4: {
            name: "泡沫奶油波霸巧克力奶茶",
            image: menu5,
            description:
              "泡沫奶油波霸巧克力奶茶是一种结合了奶油奶茶和Q弹珍珠，顶部覆盖一层蓬松的奶油并淋上丰富巧克力糖浆的奢华饮品，每一口都能享受到多重质地和风味的交融",
            nutrition: "无咖啡因",
          },
          item5: {
            name: "棉花糖奶茶",
            image: menu8,
            description: "奶茶中加入了棉花糖，增添了奶茶的奶香和泡沫的质感",
            nutrition: "无咖啡因",
          },
          item6: {
            name: "奥利奥奶茶",
            image: menu14,
            description:
              "一种奶茶饮料，其中包含奥利奥饼干，不论是混合在茶中还是作为顶料添加，都创造了独特而受欢迎的口味组合",
            nutrition: "无咖啡因",
          },
          item7: {
            name: "铁观音拿铁",
            image: menu10,
            description:
              "以中国优质乌龙茶铁观音为基底的拿铁，饮品结合了铁观音的花香和微甜味道与拿铁的奶香质感",
          },
          item8: {
            name: "巧克力拿铁",
            image: menu13,
            description:
              "一种拿铁饮品，加入了巧克力，结合了拿铁的奶香质感与巧克力的丰富甜味",
            nutrition: "无咖啡因",
          },
        },
        fruit_tea: {
          item1: {
            name: "绿葡萄绿茶",
            image: menu3,
            description:
              "这款优雅的绿茶充满了日本著名“巨峰”葡萄的甜美和咸香。其清新的口感非常适合制作冰茶",
            nutrition: "无咖啡因，不含乳糖",
          },
          item2: {
            name: "荔枝柠檬茶",
            image: menu6,
            description:
              "荔枝柠檬茶是一种清爽的饮品，结合了荔枝的甜美花香和柠檬的酸甜柑橘香气。这款美妙的茶可以热饮或冷饮，适合四季享用",
            nutrition: "无咖啡因，不含乳糖",
          },
          item3: {
            name: "桃子绿茶",
            image: menu7,
            description:
              "一种加入了桃子香味的绿茶，结合了绿茶的清新草味和桃子的甜美香气",
            nutrition: "不含乳糖",
          },
          item4: {
            name: "橙子绿茶",
            image: menu9,
            description: "一种加入了橙子香味的绿茶，提供了一种柑橘香的新颖变化",
            nutrition: "无咖啡因，不含乳糖",
          },
          item5: {
            name: "柠檬黑茶",
            image: menu11,
            description:
              "一种加入了柠檬香味的黑茶，提供了一种清新的柑橘香新颖变化",
            nutrition: "不含乳糖",
          },
          item6: {
            name: "洛神花茶",
            image: menu12,
            description:
              "一种由洛神花干瓣制作的茶，以其鲜艳的红色和类似蔓越莓的酸味而闻名",
            nutrition: "无咖啡因，不含乳糖",
          },
        },
        snack: {
          item1: {
            name: "波霸口袋",
            image: menu15,
            description:
              "这款手持小吃将Q弹珍珠和您选择的优质茶混合包裹在柔软的甜面团中。每个波霸口袋都为您在路上提供一阵阵的味觉享受",
          },
          item2: {
            name: "盐酥鸡",
            image: menu16,
            description:
              "用一系列香料腌制后炸至金黄酥脆，这些嫩肉块现炸现卖，可搭配经典或辣味酱料",
          },
          item3: {
            name: "蒜香华夫薯条",
            image: menu17,
            description:
              "这些厚切薯条用浓郁的蒜香调味，炸至酥脆，配上一份奶油蒜酱蘸料",
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
      leaves: {
        title: "茶叶",
        subtitle: "我们的茶叶",
        intro1:
          "在茶巷，我们以高品质的茶叶而自豪，这使我们在繁忙的奶茶世界中脱颖而出。我们的茶叶直接来源于台湾高海拔茶园，独特的气候和肥沃的土壤赋予了茶叶无与伦比的独特风味和香气。",
        intro2:
          "每一批茶叶都经过精心挑选并严格品质测试，确保味道始终浓郁而有层次。通过使用只有最优质、可持续采收的茶叶，我们不仅丰富了您的奶茶体验，还坚持我们对环境保护的承诺。来茶巷尝一尝区别吧—每一口都诉说着品质和关怀。",
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
