// basic, places, work, family, active, colours, food, body, weather, clothes, time, directions
/*
{"chinese": "",
 "pinyin": "",
 "english": ""},
*/
var term_list = Array();
term_list['basic'] = Array(
{"chinese": "哪儿",
 "pinyin": "nǎ'er",
 "english": "where"},
{"chinese": "我",
 "pinyin": "wǒ",
 "english": "I"},
{"chinese": "你",
 "pinyin": "nǐ",
 "english": "you"},
{"chinese": "你好",
 "pinyin": "nǐhǎo",
 "english": "Hello"},
{"chinese": "再见",
 "pinyin": "zàijiàn",
 "english": "Goodbye"},
{"chinese": "的",
 "pinyin": "de",
 "english": "of"},
{"chinese": "家",
 "pinyin": "jiā",
 "english": "Home"},
{"chinese": "今天",
 "pinyin": "jīntiān",
 "english": "Today"},
{"chinese": "怎么样",
 "pinyin": "zěnme yàng",
 "english": "How"},
{"chinese": "早上",
 "pinyin": "zǎoshang",
 "english": "morning"},
{"chinese": "忙",
 "pinyin": "máng",
 "english": "busy"},
{"chinese": "都",
 "pinyin": "dōu",
 "english": "All"},
{"chinese": "对",
 "pinyin": "duì",
 "english": "Yes"},
{"chinese": "他们",
 "pinyin": "tāmen",
 "english": "they (m)"},
{"chinese": "你们",
 "pinyin": "nǐmen",
 "english": "you all"},
{"chinese": "是",
 "pinyin": "shì",
 "english": "Is"},
{"chinese": "哪",
 "pinyin": "nǎ",
 "english": "where"},
{"chinese": "不",
 "pinyin": "bù",
 "english": "not"},
{"chinese": "她们",
 "pinyin": "tāmen",
 "english": "they (f)"},
{"chinese": "好",
 "pinyin": "hǎo",
 "english": "good"},
{"chinese": "叫",
 "pinyin": "jiào",
 "english": "call"},
{"chinese": "什么",
 "pinyin": "shénme",
 "english": "what"},
{"chinese": "也",
 "pinyin": "yě",
 "english": "and also"},
{"chinese": "认识",
 "pinyin": "rènshí",
 "english": "know (meet)"},
{"chinese": "很",
 "pinyin": "hěn",
 "english": "very"},
{"chinese": "名字",
 "pinyin": "míngzì",
 "english": "first name"},
{"chinese": "姓",
 "pinyin": "xìng",
 "english": "surname"},
{"chinese": "高兴",
 "pinyin": "gāoxìng",
 "english": "Happy"},
{"chinese": "电话",
 "pinyin": "diànhuà",
 "english": "phone"},
{"chinese": "号码",
 "pinyin": "hàomǎ",
 "english": "number"},
{"chinese": "多少",
 "pinyin": "duōshǎo",
 "english": "How many"},
{"chinese": "她",
 "pinyin": "tā",
 "english": "she"},
{"chinese": "他",
 "pinyin": "tā",
 "english": "he"});

//----------------------------------

term_list['weather'] = Array(
{"chinese": "暖和",
 "pinyin": "nuǎnhuo",
 "english": "warm"},
{"chinese": "干燥",
 "pinyin": "gānzào",
 "english": "dry"},
{"chinese": "潮湿",
 "pinyin": "cháoshī",
 "english": "humid"},
{"chinese": "春天",
 "pinyin": "chūntiān",
 "english": "spring"},
{"chinese": "夏天",
 "pinyin": "xiàtiān",
 "english": "summer"},
{"chinese": "秋天",
 "pinyin": "qiūtiān",
 "english": "autumn"},
{"chinese": "冬天",
 "pinyin": "dōngtiān",
 "english": "winter"},
{"chinese": "暴雨",
 "pinyin": "bào yǔ",
 "english": "rainstorm"},
{"chinese": "大雨",
 "pinyin": "dà yǔ",
 "english": "heavy rain"},
{"chinese": "中雨",
 "pinyin": "zhōng yǔ",
 "english": "moderate rain"},
{"chinese": "小雨",
 "pinyin": "xiǎo yǔ",
 "english": "light rain"},
{"chinese": "度",
 "pinyin": "dù",
 "english": "degrees"},
{"chinese": "荫",
 "pinyin": "yīn",
 "english": "shady"},
{"chinese": "多云",
 "pinyin": "duōyún",
 "english": "cloudy"},
{"chinese": "下雨",
 "pinyin": "xià yǔ",
 "english": "raining"},
{"chinese": "下雪",
 "pinyin": "xià xuě",
 "english": "snowing"},
{"chinese": "有雾",
 "pinyin": "yǒu wù",
 "english": "foggy"},
{"chinese": "刮风",
 "pinyin": "guā fēng",
 "english": "windy"},
{"chinese": "可是",
 "pinyin": "kěshì",
 "english": "but"},
{"chinese": "极了",
 "pinyin": "jíle",
 "english": "extremely"},
{"chinese": "天气",
 "pinyin": "tiānqì",
 "english": "weather"},
{"chinese": "气温",
 "pinyin": "qìwēn",
 "english": "air temperature"},
{"chinese": "比",
 "pinyin": "bǐ",
 "english": "than (compared to)"},
{"chinese": "零下",
 "pinyin": "língxià",
 "english": "below zero"},
{"english": "cold",
 "chinese": "冷",
 "pinyin": "lěng"},
{"english": "cloudy day",
 "chinese": "阴天",
 "pinyin": "yīn tiān"
},
{"english": "sunny day",
 "chinese": "晴天",
 "pinyin": "qīngtiān"
},
{"english": "raining",
 "chinese": "下雨",
 "pinyin": "xià yǔ"
});

//----------------------------------

term_list['food'] = Array(
{"chinese": "开水",
 "pinyin": "kāishuǐ",
 "english": "boiled water"},
{"chinese": "热水",
 "pinyin": "rè shuǐ",
 "english": "hot water"},
{"chinese": "温水",
 "pinyin": "wēnshuǐ",
 "english": "warm water"},
{"chinese": "冷水",
 "pinyin": "lěngshuǐ",
 "english": "cold water"},
{"chinese": "冰水",
 "pinyin": "bīng shuǐ",
 "english": "ice water"},
{"english": "plate",
 "chinese": "盘子",
 "pinyin": "pánzi"
},
{"english": "fork",
 "chinese": "叉子",
 "pinyin": "chāzi"
},
{"english": "knife",
 "chinese": "刀子",
 "pinyin": "dāozi"
},
{"english": "spoon",
 "chinese": "勺子",
 "pinyin": "sháozi"
},
{"english": "chopsticks",
 "chinese": "筷子",
 "pinyin": "kuàizi"
},
{"english": "pepper",
 "chinese": "辣椒",
 "pinyin": "làjiāo"
},
{"english": "ginger",
 "chinese": "姜",
 "pinyin": "jiāng"
},
{"english": "corriander",
 "chinese": "香菜",
 "pinyin": "xiāngcài"
},
{"english": "dumpling",
 "chinese": "饺子",
 "pinyin": "jiǎozi"
},
{"english": "tea",
 "chinese": "茶",
 "pinyin": "chá"
},
{"english": "fish",
 "chinese": "鱼",
 "pinyin": "yú"
},
{"english": "noodles",
 "chinese": "面条",
 "pinyin": "miàntiáo"
},
{"english": "cooked rice",
 "chinese": "米饭",
 "pinyin": "mǐfàn"
},
{"english": "where",
 "chinese": "哪里",
 "pinyin": "nǎlǐ"
},
{"english": "bread",
 "chinese": "面包",
 "pinyin": "miànbāo"
},
{"english": "coca cola",
 "chinese": "可口可乐",
 "pinyin": "kěkǒukělè"
},
{"english": "beer",
 "chinese": "啤酒",
 "pinyin": "píjiǔ"
},
{"english": "milk",
 "chinese": "牛奶",
 "pinyin": "niúnǎi"
},
{"chinese": "豆浆",
 "pinyin": "dòujiāng",
 "english": "soya milk"},
{"chinese": "稀饭",
 "pinyin": "xīfàn",
 "english": "porridge"},
{"english": "grape",
 "chinese": "葡萄",
 "pinyin": "pútáo"
},
{"english": "lychee",
 "chinese": "荔枝",
 "pinyin": "lìzhī"
},
{"english": "cucumber",
 "chinese": "黄瓜",
 "pinyin": "huángguā"
},
{"english": "tomato",
 "chinese": "西红柿",
 "pinyin": "xīhóngshì"
},
{"english": "carrot",
 "chinese": "胡萝卜",
 "pinyin": "húluóbo"
},
{"english": "mushroom",
 "chinese": "蘑菇",
 "pinyin": "mógū"
},
{"english": "broccoli",
 "chinese": "西兰花",
 "pinyin": "xīlánhuā"
},
{"english": "onion",
 "chinese": "洋葱",
 "pinyin": "yángcōng"
},
{"english": "still (continue to)",
 "chinese": "还",
 "pinyin": "hái"
},
{"english": "money",
 "chinese": "钱",
 "pinyin": "qián"
},
{"english": "bean sprouts",
 "chinese": "豆芽",
 "pinyin": "dòuyá"
},
{"english": "cheese",
 "chinese": "起司",
 "pinyin": "qǐ sī"
},
{"english": "orange juice",
 "chinese": "橙汁",
 "pinyin": "chéngzhī"
},
{"english": "vegetable",
 "chinese": "蔬菜",
 "pinyin": "shūcài"
},
{"english": "garlic",
 "chinese": "大蒜",
 "pinyin": "dàsuàn"
},
{"english": "mango",
 "chinese": "芒果",
 "pinyin": "mángguǒ"
},
{"english": "to buy",
 "chinese": "买",
 "pinyin": "mǎi"
},
{"english": "apple",
 "chinese": "苹果",
 "pinyin": "píngguǒ"
},
{"english": "half kilo",
 "chinese": "斤",
 "pinyin": "jīn"
},
{"english": "strawberry",
 "chinese": "草莓",
 "pinyin": "cǎoméi"
},
{"english": "expensive",
 "chinese": "贵",
 "pinyin": "guì"
},
{"english": "cheap",
 "chinese": "便宜",
 "pinyin": "piányí"
}
);

//----------------------------------

term_list['clothes'] = Array(
{"chinese": "戴",
 "pinyin": "dài",
 "english": "to wear (jewellery)"},
{"chinese": "手表",
 "pinyin": "shǒubiǎo",
 "english": "watch"},
{"chinese": "戒指",
 "pinyin": "jièzhǐ",
 "english": "ring"},
{"chinese": "耳机",
 "pinyin": "ěrjī",
 "english": "earphone"},
{"chinese": "项链",
 "pinyin": "xiàngliàn",
 "english": "necklace"},
{"english": "sock",
 "chinese": "袜子",
 "pinyin": "wàzi"
},
{"english": "sweater",
 "chinese": "毛衣",
 "pinyin": "máoyī"
},
{"english": "to wear",
 "chinese": "穿",
 "pinyin": "chuān"
},
{"english": "trousers",
 "chinese": "裤子",
 "pinyin": "kùzi"
},
{"english": "suit",
 "chinese": "西服",
 "pinyin": "xīfú"
},
{"english": "jacket",
 "chinese": "夹克",
 "pinyin": "jiákè"
},
{"english": "jeans",
 "chinese": "牛仔裤",
 "pinyin": "niúzǎikù"
},
{"english": "t-shirt",
 "chinese": "T恤",
 "pinyin": "T xù"
},
{"english": "leather shoes",
 "chinese": "皮鞋",
 "pinyin": "píxié"
},
{"english": "short (length)",
 "chinese": "短",
 "pinyin": "duǎn"
},
{"english": "long",
 "chinese": "长",
 "pinyin": "cháng"
},
{"english": "thin",
 "chinese": "薄",
 "pinyin": "báo"
},
{"english": "thick",
 "chinese": "厚",
 "pinyin": "hòu"
},
{"english": "loose",
 "chinese": "肥",
 "pinyin": "féi"
},
{"english": "tight/slim",
 "chinese": "瘦",
 "pinyin": "shòu"
}
);

//----------------------------------

term_list['family'] = Array(
{"english": "mum",
 "chinese": "妈妈",
 "pinyin": "māmā"
},
{"english": "dad",
 "chinese": "爸爸",
 "pinyin": "bàba"
},
{"english": "who",
 "chinese": "谁",
 "pinyin": "shéi"
},
{"english": "beautiful",
 "chinese": "漂亮",
 "pinyin": "piàoliang"
},
{"english": "handsome",
 "chinese": "帅",
 "pinyin": "shuài"
},
{"english": "fat",
 "chinese": "胖",
 "pinyin": "pàng"
},
{"english": "tall",
 "chinese": "高",
 "pinyin": "gāo"
},
{"english": "short",
 "chinese": "矮",
 "pinyin": "ǎi"
},
{"english": "cute",
 "chinese": "可爱",
 "pinyin": "kě'ài"
},
{"english": "clever",
 "chinese": "聪明",
 "pinyin": "cōngmíng"
},
{"english": "step-father",
 "chinese": "继父",
 "pinyin": "jìfù"
},
{"english": "son",
 "chinese": "儿子",
 "pinyin": "érzi"
},
{"english": "daughter",
 "chinese": "女儿",
 "pinyin": "nǚ'ér"
},
{"english": "grandpa",
 "chinese": "爷爷",
 "pinyin": "yéyé"
},
{"english": "grandma",
 "chinese": "奶奶",
 "pinyin": "nǎinai"
},
{"english": "husband",
 "chinese": "丈夫",
 "pinyin": "zhàngfū"
},
{"english": "wife",
 "chinese": "妻子",
 "pinyin": "qīzi"
},
{"english": "friend",
 "chinese": "朋友",
 "pinyin": "péngyǒu"
}
);

//----------------------------------

term_list['work'] = Array(
{"english": "get off work",
 "chinese": "下班",
 "pinyin": "xiàbān"},
{"english": "together",
 "chinese": "一起",
 "pinyin": "yīqǐ"
},
{"english": "office",
 "chinese": "公司",
 "pinyin": "gōngsī"
},
{"english": "school",
 "chinese": "学校",
 "pinyin": "xuéxiào"
},
{"english": "to work",
 "chinese": "工作",
 "pinyin": "gōngzuò"
},
{"english": "to do",
 "chinese": "做",
 "pinyin": "zuò"
},
{"english": "teacher",
 "chinese": "老师",
 "pinyin": "lǎoshī"
},
{"english": "doctor",
 "chinese": "医生",
 "pinyin": "yīshēng"
},
{"english": "nurse",
 "chinese": "护士",
 "pinyin": "hùshì"
},
{"english": "accountant",
 "chinese": "会计",
 "pinyin": "kuàijì"
},
{"english": "staff member",
 "chinese": "职员",
 "pinyin": "zhíyuán"
},
{"english": "driver",
 "chinese": "司机",
 "pinyin": "sījī"
},
{"english": "secretary",
 "chinese": "秘书",
 "pinyin": "mìshū"
},
{"english": "chef",
 "chinese": "厨师",
 "pinyin": "chúshī"
},
{"english": "security guard",
 "chinese": "保安",
 "pinyin": "bǎo'ān "
},
{"english": "colleague",
 "chinese": "同事",
 "pinyin": "tóngshì"
},
{"english": "government",
 "chinese": "政府",
 "pinyin": "zhèngfǔ"
},
{"english": "pounds (£)",
 "chinese": "英镑",
 "pinyin": "yīngbàng"
},
{"english": "classmates",
 "chinese": "同学",
 "pinyin": "tóngxué"
},
{"english": "boss",
 "chinese": "老板",
 "pinyin": "lǎobǎn"
},
{"english": "online",
 "chinese": "网上",
 "pinyin": "wǎngshàng"
},
{"english": "simple",
 "chinese": "简单",
 "pinyin": "jiǎndān"
}
);

//----------------------------------

term_list['time'] = Array(
{"chinese": "豁然",
 "pinyin": "huòrán",
 "english": "suddenly"},
{"chinese": "打算",
 "pinyin": "dǎsuàn",
 "english": "to plan"},
{"chinese": "年轻的时候",
 "pinyin": "niánqīng de shíhòu",
 "english": "when I was young"},
{"english": "week",
 "chinese": "星期",
 "pinyin": "xīngqí"},
{"english": "free time",
 "chinese": "空",
 "pinyin": "kòng"
},
{"english": "weekend",
 "chinese": "周末",
 "pinyin": "zhōumò"
},
{"english": "before",
 "chinese": "以前",
 "pinyin": "yǐqián"
},
{"english": "after",
 "chinese": "以后",
 "pinyin": "yǐhòu"
},
{"chinese": "一般",
 "pinyin": "yībān",
 "english": "normally"},
{"chinese": "tōngcháng",
 "pinyin": "通常",
 "english": "usually"},
{"chinese": "一次又一次",
 "pinyin": "yīcì yòu yīcì",
 "english": "again and again"},
{"chinese": "不常",
 "pinyin": "bù cháng",
 "english": "infrequently"},
{"english": "sometimes",
 "chinese": "有时候",
 "pinyin": "yǒushíhòu"
},
{"english": "when",
 "chinese": "什么时候",
 "pinyin": "shénme shíhòu"
},
{"english": "often",
 "chinese": "经常",
 "pinyin": "jīngcháng"
},
{"english": "first time",
 "chinese": "第一次",
 "pinyin": "dì yī cì"
}
);

//----------------------------------

term_list['active'] = Array(
{"chinese": "散步",
 "pinyin": "sànbù",
 "english": "to take a walk"},
{"chinese": "爬山",
 "pinyin": "páshān",
 "english": "to climb a mountain"},
{"chinese": "练习",
 "pinyin": "liànxí",
 "english": "practise"},
{"english": "cycling",
 "chinese": "骑自行车",
 "pinyin": "qí zìxíngchē"},
{"english": "bike",
 "chinese": "自行车",
 "pinyin": "zìxíngchē"},
{"english": "to beat/strike/play",
 "chinese": "打",
 "pinyin": "dǎ"},
{"english": "badminton",
 "chinese": "羽毛球",
 "pinyin": "yǔmáoqiú"},
{"english": "tennis",
 "chinese": "网球",
 "pinyin": "wǎngqiú"},
{"chinese": "健身房",
 "pinyin": "jiànshēnfáng",
 "english": "gym"},
{"chinese": "拉",
 "pinyin": "lā",
 "english": "pull"},
{"chinese": "推",
 "pinyin": "tuī",
 "english": "push"},
{"chinese": "开",
 "pinyin": "kāi",
 "english": "to open"},
{"chinese": "关",
 "pinyin": "guān",
 "english": "to close"},
{"english": "sports",
 "chinese": "运动",
 "pinyin": "yùndòng"
},
{"english": "yoga",
 "chinese": "瑜伽",
 "pinyin": "yújiā"
},
{"english": "martial arts",
 "chinese": "武术",
 "pinyin": "wǔshù"
},
{"chinese": "乐队",
 "pinyin": "yuèduì",
 "english": "band"},
{"english": "music",
 "chinese": "音乐",
 "pinyin": "yīnyuè"
},
{"english": "jazz",
 "chinese": "士乐",
 "pinyin": "juéshì"
},
{"english": "laptop",
 "chinese": "笔记本电脑",
 "pinyin": "bǐjìběn diànnǎo"
},
{"english": "ipad (tablet)",
 "chinese": "平板电脑",
 "pinyin": "píngbǎn diànnǎo"
},
{"english": "beach", 
 "chinese": "沙滩",
 "pinyin": "shātān"
},
{"english": "sofa",
 "chinese": "沙发",
 "pinyin": "shāfā"
},
{"english": "nervous",
 "chinese": "紧张",
 "pinyin": "jǐnzhāng"
},
{"english": "trumpet",
 "chinese": "小号",
 "pinyin": "xiǎohào"
},
{"english": "because",
 "chinese": "因为",
 "pinyin": "yīnwèi"
},
{"english": "always",
 "chinese": "总是",
 "pinyin": "zǒng shì"
},
{"chinese": "从",
 "pinyin": "cóng",
 "english": "from"},
{"chinese": "一边",
 "pinyin": "yībiān",
 "english": "at once (at the same time)"},
{"chinese": "从不",
 "pinyin": "cóngbu",
 "english": "never"},
{"english": "sometimes",
 "chinese": "有时后",
 "pinyin": "yǒushíhòu"
},
{"english": "perhaps",
 "chinese": "可能",
 "pinyin": "kěnéng"
},
{"english": "how many",
 "chinese": "多少",
 "pinyin": "duōshǎo"
},
{"english": "what",
 "chinese": "什么",
 "pinyin": "shénme"
},
{"english": "two of",
 "chinese": "两个",
 "pinyin": "liǎng gè"
},
{"english": "too (too much)",
 "chinese": "太",
 "pinyin": "tài  "
},
{"english": "a little",
 "chinese": "一点儿",
 "pinyin": "yīdiǎnr"
},
{"english": "ok",
 "chinese": "行",
 "pinyin": "xíng"
},
{"english": "to want",
 "chinese": "要",
 "pinyin": "yào"
},
{"english": "altogether",
 "chinese": "一共",
 "pinyin": "yīgòng"
},
{"english": "that",
 "chinese": "那",
 "pinyin": "nà"
},
{"english": "how",
 "chinese": "怎么",
 "pinyin": "zěnme"
},
{"english": "sell",
 "chinese": "卖",
 "pinyin": "mài"
},
{"english": "to have",
 "chinese": "有",
 "pinyin": "yǒu"
}
);

term_list['colours'] = Array(
{"english": "red",
 "chinese": "红色",
 "pinyin": "hóngsè"
},
{"english": "green",
 "chinese": "绿色",
 "pinyin": "lǜsè"
},
{"english": "yellow",
 "chinese": "黄色",
 "pinyin": "huángsè"
},
{"english": "orange colour",
 "chinese": "橙色",
 "pinyin": "chéngsè"
},
{"english": "blue",
 "chinese": "蓝色",
 "pinyin": "lánsè"
},
{"english": "black",
 "chinese": "黑色",
 "pinyin": "hēisè"
},
{"english": "white",
 "chinese": "白色",
 "pinyin": "báisè"
},
{"english": "colour",
 "chinese": "颜色",
 "pinyin": "yánsè"
},
{"english": "grey",
 "chinese": "灰色",
 "pinyin": "huīsè"
}
);

term_list['other'] = Array(
{"chinese": "或者",
 "pinyin": "huòzhě",
 "english": "or (non-question)"},
{"english": "to try",
 "chinese": "试",
 "pinyin": "shì"
},
{"english": "this",
 "chinese": "这",
 "pinyin": "zhè"
},
{"english": "small",
 "chinese": "小",
 "pinyin": "xiǎo"
},
{"english": "big",
 "chinese": "大",
 "pinyin": "dà"
},
{"english": "others (additional)",
 "chinese": "别的",
 "pinyin": "biéde"
},
{"english": "again (future)",
 "chinese": "再",
 "pinyin": "zài"
},
{"english": "bowl",
 "chinese": "碗",
 "pinyin": "wǎn"
},
{"english": "to drink",
 "chinese": "喝",
 "pinyin": "hē"
},
{"english": "to eat",
 "chinese": "吃",
 "pinyin": "chī"
},
{"english": "please",
 "chinese": "请",
 "pinyin": "qǐng"
},
{"english": "menu",
 "chinese": "菜单",
 "pinyin": "càidān"
},
{"english": "to order",
 "chinese": "点",
 "pinyin": "diǎn"
},
{"english": "reservation",
 "chinese": "预订",
 "pinyin": "yùdìng"
},
{"english": "drinks",
 "chinese": "饮料",
 "pinyin": "yǐnliào"
},
{"english": "to put (add in)",
 "chinese": "放",
 "pinyin": "fàng"
},
{"english": "to look",
 "chinese": "看",
 "pinyin": "kàn"
},
{"english": "can (to be capable)",
 "chinese": "能",
 "pinyin": "néng"
},
{"english": "no/not",
 "chinese": "没",
 "pinyin": "méi"
},
{"english": "don't",
 "chinese": "别",
 "pinyin": "bié"
},
{"english": "to give",
 "chinese": "给",
 "pinyin": "gěi"
},
{"english": "fast",
 "chinese": "快",
 "pinyin": "kuài"
},
{"english": "slow",
 "chinese": "慢",
 "pinyin": "màn"
},
{"english": "to exist (to be at)",
 "chinese": "在",
 "pinyin": "zài"
},
{"english": "and",
 "chinese": "和",
 "pinyin": "hé"
},
{"english": "send a text message",
 "chinese": "发短信",
 "pinyin": "fā duǎnxìn"
},
{"english": "send an email",
 "chinese": "发电子邮件",
 "pinyin": "fā diànzǐ yóujiàn"
},
{"english": "make a phone call",
 "chinese": "打电话",
 "pinyin": "dǎ diànhuà"
},
{"english": "wrong",
 "chinese": "错",
 "pinyin": "cuò"
},
{"english": "to look for",
 "chinese": "找",
 "pinyin": "zhǎo"
},
{"english": "excuse me",
 "chinese": "请问",
 "pinyin": "qǐngwèn"
},
{"english": "to send",
 "chinese": "发",
 "pinyin": "fā"
}
);

term_list['directions'] = Array(
{"chinese": "附近",
 "pinyin": "fùjìn",
 "english": "vicinity"},
{"english": "to know",
 "chinese": "知道",
 "pinyin": "zhīdào"
},
{"english": "to walk",
 "chinese": "走",
 "pinyin": "zǒu"
},
{"english": "to arrive",
 "chinese": "到",
 "pinyin": "dào"
},
{"english": "straight ahead",
 "chinese": "一直",
 "pinyin": "yīzhí"
},
{"english": "traffic lights",
 "chinese": "红路灯",
 "pinyin": "hónglùdēng"
},
{"english": "towards",
 "chinese": "往",
 "pinyin": "wǎng"
},
{"english": "left",
 "chinese": "左",
 "pinyin": "zuǒ"
},
{"english": "right",
 "chinese": "右",
 "pinyin": "yòu"
},
{"english": "to stop",
 "chinese": "停",
 "pinyin": "tíng"
},
{"english": "to turn",
 "chinese": "柺",
 "pinyin": "guǎi"
},
{"english": "receipt/invoice",
 "chinese": "发票",
 "pinyin": "fāpiào"
}
);

// -------------------------------------

term_list['body'] = Array(
{"chinese": "皮肤",
 "pinyin": "pífū",
 "english": "skin"},
{"english": "hair",
 "chinese": "头发",
 "pinyin": "tóufǎ" 
},
{"english": "knee",
 "chinese": "膝盖",
 "pinyin": "xīgài"
},
{"english": "wrist",
 "chinese": "手腕",
 "pinyin": "shǒuwàn"
},
{"english": "ear",
 "chinese": "耳朵",
 "pinyin": "ěr duo"
},
{"english": "head",
 "chinese": "头",
 "pinyin": "tóu"
},
{"english": "face",
 "chinese": "脸",
 "pinyin": "liǎn"
},
{"english": "mouth",
 "chinese": "嘴",
 "pinyin": "zuǐ"
},
{"english": "eye",
 "chinese": "眼睛",
 "pinyin": "yǎnjīng"
},
{"english": "tooth",
 "chinese": "牙",
 "pinyin": "yá"
},
{"english": "arm",
 "chinese": "胳膊",
 "pinyin": "gēbó"
},
{"english": "elbow",
 "chinese": "手肘",
 "pinyin": "shǒu zhǒu"
},
{"english": "belly",
 "chinese": "肚子",
 "pinyin": "dùzi"
},
{"english": "hand",
 "chinese": "手",
 "pinyin": "shǒu"
},
{"english": "leg",
 "chinese": "腿",
 "pinyin": "tuǐ"
},
{"english": "foot",
 "chinese": "脚",
 "pinyin": "jiǎo"
},
{"english": "tired",
 "chinese": "累",
 "pinyin": "lèi"
},
{"english": "comfortable",
 "chinese": "舒服",
 "pinyin": "shūfú"
},
{"english": "pharmacy",
 "chinese": "药店",
 "pinyin": "yàodiàn"
},
{"english": "rest",
 "chinese": "休息",
 "pinyin": "xiūxí"
},
{"english": "boss",
 "chinese": "老板",
 "pinyin": "lǎobǎn"
},
{"english": "to have to (must)",
 "chinese": "得",
 "pinyin": "děi"
},
{"english": "to speak",
 "chinese": "说",
 "pinyin": "shuō"
},
{"english": "more/many",
 "chinese": "多",
 "pinyin": "duō"
},
{"english": "water",
 "chinese": "水",
 "pinyin": "shuǐ"
},
{"english": "to tell",
 "chinese": "告诉",
 "pinyin": "gàosù"
},
{"english": "ill/sick",
 "chinese": "病",
 "pinyin": "bìng"
},
{"english": "catch a cold",
 "chinese": "感冒",
 "pinyin": "gǎnmào"
},
{"english": "fever",
 "chinese": "发烧",
 "pinyin": "fāshāo"
},
{"english": "to cough",
 "chinese": "咳嗽",
 "pinyin": "késòu"
},
{"english": "medicine",
 "chinese": "药",
 "pinyin": "yào"
},
{"english": "headache",
 "chinese": "头痛",
 "pinyin": "tóutòng"},
{"english": "joint",
 "chinese": "关节",
 "pinyin": "guānjié"
}
);


term_list['skills'] = Array(
{"english": "computer",
 "chinese": "电脑",
 "pinyin": "diànnǎo"
},
{"english": "to turn bad",
 "chinese": "坏",
 "pinyin": "huài"
},
{"english": "to repair",
 "chinese": "修",
 "pinyin": "xiū"
},
{"english": "can (able to)",
 "chinese": "会",
 "pinyin": "huì"
},
{"english": "maybe",
 "chinese": "可能",
 "pinyin": "kěnéng"
},
{"english": "to surf online",
 "chinese": "上网",
 "pinyin": "shàngwǎng"
},
{"english": "swimming",
 "chinese": "游泳",
 "pinyin": "yóuyǒng"
},
{"english": "ice skating",
 "chinese": "滑冰",
 "pinyin": "huábīng"
},
{"english": "drawing",
 "chinese": "画画",
 "pinyin": "huà huà"
},
{"english": "driving",
 "chinese": "开车",
 "pinyin": "kāichē"
},
{"english": "cooking",
 "chinese": "做饭",
 "pinyin": "zuò fàn"
},
{"english": "offline",
 "chinese": "下线",
 "pinyin": "xià xiàn"
}
);
term_list['places'] = Array(
{"english": "park",
 "chinese": "公园",
 "pinyin": "gōngyuán"
},
{"chinese": "房子",
 "pinyin": "fángzi",
 "english": "house"},
{"chinese": "葡萄牙",
 "pinyin": "pútáoyá",
 "english": "Portugal"},
{"english": "hotel",
 "chinese": "饭店",
 "pinyin": "fàndiàn"
},
{"english": "embassy",
 "chinese": "大使馆",
 "pinyin": "dàshǐguǎn"
},
{"english": "swimming pool",
 "chinese": "游泳馆",
 "pinyin": "yóuyǒngguǎn"
},
{"english": "hospital",
 "chinese": "医院",
 "pinyin": "yīyuàn"
},
{"english": "bank",
 "chinese": "银行",
 "pinyin": "yínháng"
},
{"english": "airport",
 "chinese": "飞机场",
 "pinyin": "fēijī chǎng"
},
{"english": "cinema",
 "chinese": "电影院",
 "pinyin": "diànyǐngyuàn"
},
{"chinese": "剑桥",
 "pinyin": "jiànqiáo",
 "english": "Cambridge"},
{"english": "shop",
 "chinese": "商店",
 "pinyin": "shāngdiàn"
}
);


 
