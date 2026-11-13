/* Профориентация беті: 7 бағыт бойынша қабілет профилі мен колледждің 13 бағдарламасын салыстыру.
   Алгоритм ережеге негізделген (нейрожелі емес). Мамандықтар тізімі мамандықтар бетіндегі кестемен сәйкес. */
(function(){
"use strict";
var root=document.getElementById("p-profor");
if(!root)return;

var AX=["log","lang","care","tech","acc","act","sci"];
var AXN={
  kk:{log:"Логика және сандар",lang:"Тіл және сөз",care:"Адамдармен жұмыс",tech:"Цифрлық технологиялар",acc:"Дәлдік және тәртіп",act:"Қозғалыс және энергия",sci:"Зерттеу және тәжірибе"},
  ru:{log:"Логика и числа",lang:"Язык и слово",care:"Работа с людьми",tech:"Цифровые технологии",acc:"Точность и порядок",act:"Движение и энергия",sci:"Исследование и опыт"}
};
var AXS={
  kk:{log:"Логика",lang:"Тіл",care:"Адамдар",tech:"Цифр",acc:"Дәлдік",act:"Қозғалыс",sci:"Зерттеу"},
  ru:{log:"Логика",lang:"Язык",care:"Люди",tech:"Цифра",acc:"Точность",act:"Движение",sci:"Опыт"}
};

var UI={
kk:{
 eyebrow:"Профориентация",
 h1:"Қабілетіңе сай мамандықты тап",
 sub:"14 қысқа тұжырымға баға бер, ұнайтын пәндеріңді белгіле. Алгоритм қабілет профилін құрып, оны колледждің 13 білім беру бағдарламасымен салыстырады.",
 tracksLabel:"Қай сыныптан кейін түсесің?",
 t9:"9-сыныптан кейін",t9s:"Мектеп өмірі мен қызығушылықтар туралы сұрақтар.",
 t11:"11-сыныптан кейін",t11s:"Нақты жағдаяттар мен ҰБТ пәндері туралы сұрақтар.",
 start:"Бастау",
 heroCap:"Әр бағдарламаның өз «саусақ ізі» бар",
 heroAria:"Бағдарламалардың қабілет талабын көрсететін радар диаграмма",
 resAria:"Сенің профилің мен таңдалған бағдарлама талабының радар диаграммасы",
 howTitle:"Қалай жұмыс істейді",
 s1t:"Жауап бересің",s1d:"Әр тұжырымға 1-ден 5-ке дейін баға қойып, ұнайтын пәндеріңді белгілейсің.",
 s2t:"Профиль құрылады",s2d:"Жеті бағыт бойынша қабілет профилі радар диаграммасында көрінеді.",
 s3t:"Салыстырамыз",s3d:"Әр бағдарламаның өз талап профилі бар. Саған ең жақынын көресің.",
 methodS:"Алгоритм қалай есептейді",
 methodB:"Әр бағыт екі тұжырыммен өлшенеді (1–5 балл), таңдаған пәндер аздап қосымша салмақ береді. Профиль өзіңнің орташа деңгейіңе қатысты нормаланады, сондықтан ең күшті жақтарың көрінеді. Әр бағдарламаның өз «саусақ ізі» бар, яғни жеті бағыт бойынша талап профилі. Сәйкестік деген сенің профилің мен сол саусақ ізінің салмақталған ұқсастығы. Бұл ережеге негізделген есептеу, нейрожелі емес.",
 lblSpec:"Мамандық",lblQual:"Біліктілік",lblJobs:"Қайда жұмыс істейсің",lblDur:"Оқу мерзімі",
 exit:"← Профориентация",back:"← Артқа",kbd:"1–5 пернелері де жұмыс істейді",
 sc:["Мүлде келіспеймін","Келіспеймін","Бейтарап","Келісемін","Толық келісемін"],
 chips9:"Қай сабақтар саған ұнайды?",chips11:"ҰБТ-ға қай пәндерді таңдайсың немесе таңдағың келеді?",
 chipsHint:"Бірнешеуін белгілеуге болады. Ештеңе таңдамасаң да болады.",showRes:"Нәтижені көру",
 resTitle:"Сенің қабілет профилің",
 resSub:"Профиль өзіңнің орташа деңгейіңе қатысты көрсетілген: ең алыс шыққан бағыттар сенің ең күшті жақтарың.",
 legYou:"Сен",rankTitle:"Бағдарламалар рейтингі",rankHint:"Бағдарламаны басып, оның «саусақ ізін» диаграммада көр.",
 no9:"Қолданбалы бакалавр бағдарламалары тек 11-сыныптан кейін, сондықтан бұл рейтингте жоқ.",
 match:"сәйкестік",retake:"Қайта өту",other9:"11-сыныптан кейін өту",other11:"9-сыныптан кейін өту",
 toAdm:"Қабылдау тәртібі",toProg:"Мамандықтар тізімі",
 flat:"Жауаптарың бір деңгейде болды, сондықтан профиль тегіс шықты. Тұжырымдарға айырмашылығы бар баға беріп, қайта көр.",
 disc:"Бұл тест кеңес қана, диагноз емес. Шешімді отбасыңмен, мұғалімдеріңмен және колледждің қабылдау комиссиясымен талқыла.",
 termNote:"Оқу мерзімі сайттағы «Мамандықтар» бетіне сәйкес берілген. Нақтысын қабылдау комиссиясынан сұра.",
 appNote:"Қолданбалы бакалавр бағдарламасы тек 11-сыныптан кейін ашық. Түлектер университеттің экономика жоғары мектебінде қысқартылған мерзімде (2 жыл) оқуын жалғастыра алады.",
 clarify:"нақтылаңыз"
},
ru:{
 eyebrow:"Профориентация",
 h1:"Найди специальность по своим способностям",
 sub:"Оцени 14 коротких утверждений и отметь любимые предметы. Алгоритм построит профиль способностей и сравнит его с 13 образовательными программами колледжа.",
 tracksLabel:"После какого класса поступаешь?",
 t9:"После 9 класса",t9s:"Вопросы о школьной жизни и увлечениях.",
 t11:"После 11 класса",t11s:"Практичные ситуации и вопросы о предметах ЕНТ.",
 start:"Начать",
 heroCap:"У каждой программы свой «отпечаток»",
 heroAria:"Радарная диаграмма требований программ к способностям",
 resAria:"Радарная диаграмма твоего профиля и требований выбранной программы",
 howTitle:"Как это работает",
 s1t:"Отвечаешь",s1d:"Оцениваешь каждое утверждение от 1 до 5 и отмечаешь любимые предметы.",
 s2t:"Строится профиль",s2d:"Профиль способностей по семи направлениям виден на радарной диаграмме.",
 s3t:"Сравниваем",s3d:"У каждой программы свой профиль требований. Ты увидишь ближайшие к тебе.",
 methodS:"Как считает алгоритм",
 methodB:"Каждое направление измеряется двумя утверждениями (1–5 баллов), выбранные предметы добавляют небольшой вес. Профиль нормируется относительно твоего среднего уровня, поэтому видны сильные стороны. У каждой программы есть свой «отпечаток», то есть профиль требований по семи направлениям. Совпадение — это взвешенное сходство твоего профиля с этим отпечатком. Это расчёт по правилам, а не нейросеть.",
 lblSpec:"Специальность",lblQual:"Квалификация",lblJobs:"Где работать",lblDur:"Срок обучения",
 exit:"← Профориентация",back:"← Назад",kbd:"Работают и клавиши 1–5",
 sc:["Совсем не согласен","Не согласен","Нейтрально","Согласен","Полностью согласен"],
 chips9:"Какие предметы тебе нравятся?",chips11:"Какие предметы ЕНТ ты выбираешь или хотел бы выбрать?",
 chipsHint:"Можно выбрать несколько. Можно ничего не выбирать.",showRes:"Показать результат",
 resTitle:"Твой профиль способностей",
 resSub:"Профиль показан относительно твоего среднего уровня: направления, которые выступают дальше всего, — твои сильные стороны.",
 legYou:"Ты",rankTitle:"Рейтинг программ",rankHint:"Нажми на программу, чтобы увидеть её «отпечаток» на диаграмме.",
 no9:"Программы прикладного бакалавра доступны только после 11 класса, поэтому в этом рейтинге их нет.",
 match:"совпадение",retake:"Пройти заново",other9:"Пройти для 11 класса",other11:"Пройти для 9 класса",
 toAdm:"Порядок приёма",toProg:"Список специальностей",
 flat:"Ответы оказались на одном уровне, поэтому профиль получился ровным. Попробуй оценивать увереннее и с большей разницей.",
 disc:"Тест — это подсказка, а не диагноз. Обсуди решение с семьёй, учителями и приёмной комиссией колледжа.",
 termNote:"Срок обучения указан по странице «Мамандықтар» этого сайта. Точные сроки уточняй в приёмной комиссии.",
 appNote:"Программа прикладного бакалавра доступна только после 11 класса. Выпускники могут продолжить обучение в экономической высшей школе университета по сокращённой программе (2 года).",
 clarify:"уточните"
}};

/* 13 бағдарлама: сайттағы кестемен бірдей (код, біліктілік, мерзім). w = талап профилі [log,lang,care,tech,acc,act,sci] */
var PROGS=[
{id:"pre",spec:"01120100",code:"4S01120102",w:[.2,.5,1,.15,.3,.6,.2],app:false,hero:true,
 name:{kk:"Мектепке дейінгі оқыту және тәрбиелеу",ru:"Дошкольное обучение и воспитание"},
 qual:{kk:"Мектепке дейінгі тәрбие және оқыту ұйымының тәрбиешісі",ru:"Воспитатель организации дошкольного воспитания и обучения"},
 desc:{kk:"Балабақша мен мектепалды сыныпта ең кішкентайлардың дамуына жетекшілік етесің.",ru:"Ведёшь развитие самых маленьких в детском саду и предшколе."},
 jobs:{kk:"Балабақша тәрбиешісі, мектепалды даярлық тобының педагогы",ru:"Воспитатель детского сада, педагог группы предшкольной подготовки"}},
{id:"pri",spec:"01140100",code:"4S01140101",w:[.45,.65,.9,.25,.5,.35,.3],app:false,hero:true,
 name:{kk:"Бастауышта оқыту педагогикасы мен әдістемесі",ru:"Педагогика и методика начального обучения"},
 qual:{kk:"Бастауыш сынып мұғалімі",ru:"Учитель начальных классов"},
 desc:{kk:"Бастауыш сынып оқушыларына оқу, санау және ойлауды үйретесің.",ru:"Учишь младших школьников читать, считать и думать."},
 jobs:{kk:"Мектептің бастауыш сынып мұғалімі, ұзартылған күн тобының тәрбиешісі",ru:"Учитель начальных классов, воспитатель группы продлённого дня"}},
{id:"priab",spec:"01140100",code:"5AB01140101",w:[.55,.65,.85,.3,.55,.3,.3],app:true,hero:false,
 name:{kk:"Бастауышта оқыту педагогикасы мен әдістемесі",ru:"Педагогика и методика начального обучения"},
 qual:{kk:"Қолданбалы бакалавр",ru:"Прикладной бакалавр"},
 desc:{kk:"Бастауыш сыныпта оқытудың әдістемесін тереңірек меңгеріп, күрделірек педагогикалық міндеттерді атқарасың.",ru:"Глубже осваиваешь методику начального обучения и решаешь более сложные педагогические задачи."},
 jobs:{kk:"Бастауыш сынып мұғалімі, әдіскер көмекшісі",ru:"Учитель начальных классов, помощник методиста"}},
{id:"pe",spec:"01140500",code:"4S01140501",w:[.2,.3,.7,.1,.2,1,.3],app:false,hero:true,subj:"pe",
 name:{kk:"Дене шынықтыру және спорт",ru:"Физическая культура и спорт"},
 qual:{kk:"Дене шынықтыру мұғалімі",ru:"Учитель физической культуры"},
 desc:{kk:"Оқушыларға қозғалысты, спорт ережелерін және салауатты өмір салтын үйретесің.",ru:"Учишь школьников движению, правилам спорта и здоровому образу жизни."},
 jobs:{kk:"Мектеп мұғалімі, спорт секциясының жаттықтырушысы",ru:"Учитель в школе, тренер спортивной секции"}},
{id:"peab",spec:"01140200",code:"5AB01140201",w:[.25,.35,.7,.1,.3,1,.35],app:true,hero:false,
 name:{kk:"Дене шынықтыру және спорт",ru:"Физическая культура и спорт"},
 qual:{kk:"Дене шынықтыру қолданбалы бакалавры",ru:"Прикладной бакалавр физической культуры"},
 desc:{kk:"Дене шынықтыруды тереңірек меңгеріп, жаттықтыру мен секцияны жүргізуге дайындалады.",ru:"Глубже осваиваешь физическую культуру и готовишься вести тренировки и секции."},
 jobs:{kk:"Дене шынықтыру мұғалімі, секция жаттықтырушысы, спорт ұйымдастырушысы",ru:"Учитель физкультуры, тренер секции, организатор спортивных мероприятий"}},
{id:"kaz",spec:"01140600",code:"4S01140601",w:[.3,1,.8,.2,.4,.2,.2],app:false,hero:true,subj:"kaz",
 name:{kk:"Базалық орта білімде тіл мен әдебиетті оқыту",ru:"Преподавание языка и литературы в базовом среднем образовании"},
 qual:{kk:"Қазақ тілі мен әдебиеті мұғалімі",ru:"Учитель казахского языка и литературы"},
 desc:{kk:"Қазақ тілі мен әдебиетін оқытып, оқушылардың сөз мәдениетін қалыптастырасың.",ru:"Преподаёшь казахский язык и литературу и развиваешь речевую культуру школьников."},
 jobs:{kk:"Негізгі мектептің тіл мұғалімі, үйірме жетекшісі",ru:"Учитель языка в основной школе, руководитель кружка"}},
{id:"rus",spec:"01140600",code:"4S01140602",w:[.3,1,.8,.2,.4,.2,.2],app:false,hero:false,subj:"rus",
 name:{kk:"Базалық орта білімде тіл мен әдебиетті оқыту",ru:"Преподавание языка и литературы в базовом среднем образовании"},
 qual:{kk:"Орыс тілі мен әдебиеті мұғалімі",ru:"Учитель русского языка и литературы"},
 desc:{kk:"Орыс тілі мен әдебиетін оқытып, оқушылардың жазбаша және ауызша сөйлеуін дамытасың.",ru:"Преподаёшь русский язык и литературу и развиваешь письменную и устную речь школьников."},
 jobs:{kk:"Негізгі мектептің тіл мұғалімі, үйірме жетекшісі",ru:"Учитель языка в основной школе, руководитель кружка"}},
{id:"eng",spec:"01140600",code:"4S01140605",w:[.3,1,.75,.3,.4,.2,.2],app:false,hero:false,subj:"eng",
 name:{kk:"Базалық орта білімде тіл мен әдебиетті оқыту",ru:"Преподавание языка и литературы в базовом среднем образовании"},
 qual:{kk:"Шетел тілі мұғалімі",ru:"Учитель иностранного языка"},
 desc:{kk:"Шетел тілін оқытып, оқушыларды басқа мәдениетпен таныстырасың.",ru:"Преподаёшь иностранный язык и знакомишь школьников с другой культурой."},
 jobs:{kk:"Негізгі мектептің шетел тілі мұғалімі, тіл курсының оқытушысы",ru:"Учитель иностранного языка в основной школе, преподаватель языковых курсов"}},
{id:"trn",spec:"02310100",code:"4S02310101",w:[.3,1,.2,.45,.7,.1,.2],app:false,hero:true,
 name:{kk:"Аударма ісі (түрлері бойынша)",ru:"Переводческое дело (по видам)"},
 qual:{kk:"Аудармашы",ru:"Переводчик"},
 desc:{kk:"Мәтін мен сөйлеуді бір тілден екінші тілге дәл жеткіземін.",ru:"Точно передаёшь тексты и речь с одного языка на другой."},
 jobs:{kk:"Аударма бюросы, компания мен мемлекеттік орган аудармашысы",ru:"Бюро переводов, переводчик в компании или госоргане"}},
{id:"acc",spec:"04110100",code:"4S04110102",w:[.8,.2,.1,.5,1,.1,.2],app:false,hero:true,
 name:{kk:"Есеп және аудит",ru:"Учёт и аудит"},
 qual:{kk:"Бухгалтер",ru:"Бухгалтер"},
 desc:{kk:"Ұйымның қаржысын есепке алып, құжаттар мен есептерді жүргізесің.",ru:"Ведёшь учёт финансов организации, документы и отчёты."},
 jobs:{kk:"Кәсіпорын бухгалтері, аудитордың көмекшісі",ru:"Бухгалтер предприятия, помощник аудитора"}},
{id:"law",spec:"04210100",code:"4S04210101",w:[.5,.85,.4,.2,.8,.2,.15],app:false,hero:true,subj:"hist",
 name:{kk:"Құқықтану",ru:"Правоведение"},
 qual:{kk:"Заңгер",ru:"Юрист"},
 desc:{kk:"Құқық нормаларын қолданып, адамдарға заң мәселесінде көмектесесің.",ru:"Применяешь нормы права и помогаешь людям в юридических вопросах."},
 jobs:{kk:"Заңгер, кеңесші, құқықтық бөлім маманы",ru:"Юрист, консультант, специалист юридического отдела"}},
{id:"sof",spec:"06130100",code:"4S06130105",w:[.9,.2,.1,1,.6,.1,.45],app:false,hero:true,subj:"inf",
 name:{kk:"Бағдарламалық қамтамасыз ету (түрлері бойынша)",ru:"Программное обеспечение (по видам)"},
 qual:{kk:"Ақпараттық жүйелер техникі",ru:"Техник по информационным системам"},
 desc:{kk:"Бағдарламалар мен ақпараттық жүйелерді құрастырып, қолдайсың.",ru:"Создаёшь и поддерживаешь программы и информационные системы."},
 jobs:{kk:"Бағдарламашының көмекшісі, жүйе әкімшісі, техникалық қолдау",ru:"Помощник программиста, системный администратор, техподдержка"}},
{id:"lab",spec:"07110400",code:"3W07110402",w:[.65,.15,.1,.35,.8,.2,1],app:false,hero:true,unclear:true,subj:"chem",
 name:{kk:"Зертханалық технология",ru:"Лабораторная технология"},
 qual:{kk:"Химиялық талдау зертханашысы",ru:"Лаборант химического анализа"},
 desc:{kk:"Зертханада заттардың құрамын талдап, өлшеу жүргізесің.",ru:"Анализируешь состав веществ и проводишь измерения в лаборатории."},
 jobs:{kk:"Өндірістік зертхана, экология мен сапаны бақылау",ru:"Заводская лаборатория, экология, контроль качества"}}
];

/* Тұжырымдар: әр бағыт екі рет өлшенеді */
var ITEMS={
9:[
["log","Есептерді шығарып, жауабын өзім тапқанда қуанамын.","Мне радостно самому находить ответ в задаче."],
["lang","Мәтін жазу немесе сөз сөйлеу маған қиын емес.","Мне легко писать тексты и выступать перед классом."],
["care","Кішкентай балаларға көмектесіп, олармен ойнағанды ұнатамын.","Мне нравится помогать малышам и играть с ними."],
["tech","Бағдарламалар мен қосымшалардың қалай жұмыс істейтіні қызықтырады.","Мне интересно, как устроены программы и приложения."],
["acc","Дәптерім мен құжаттарым әрдайым реттелген болғаны маған маңызды.","Мне важно, чтобы тетради и документы были в порядке."],
["act","Спорт пен қозғалыс ойындары маған қуат береді.","Спорт и подвижные игры дают мне энергию."],
["sci","Химия не биология тәжірибесін өз қолыммен жасағым келеді.","Хочу сам проводить опыты по химии или биологии."],
["log","Жұмбақ, ребус, логикалық ойындарды шешкенді ұнатамын.","Люблю загадки, ребусы и логические игры."],
["lang","Жаңа тілді үйреніп, сөздерін есте сақтау маған қызық.","Мне интересно учить новый язык и запоминать слова."],
["care","Сыныптастарыма тақырыпты түсіндірсем, өзімді жақсы сезінемін.","Мне приятно объяснять одноклассникам тему."],
["tech","Сайт, ойын немесе бот жасап көргім келеді.","Хочу попробовать сделать сайт, игру или бота."],
["acc","Сандармен және кестемен жұмыс істегенде қателеспеуге тырысамын.","Работая с цифрами и таблицами, я стараюсь не ошибаться."],
["act","Бір орында ұзақ отырудан гөрі қозғалыс көп жұмыс маған ұнайды.","Подвижная работа мне ближе, чем долго сидеть на месте."],
["sci","Заттардың құрамы мен қасиеттері қалай өзгеретінін бақылау қызық.","Интересно наблюдать, как меняются вещества и их свойства."]
],
11:[
["log","Күрделі есепті бөліктерге бөліп, қадамдап шешкенді ұнатамын.","Люблю разбивать сложную задачу на шаги и решать по порядку."],
["lang","Өз ойымды жазбаша да, ауызша да нақты жеткізе аламын.","Я чётко излагаю мысли письменно и устно."],
["care","Адамдарға сабақ үйретіп, олардың қалай өсіп жатқанын көргім келеді.","Хочу учить людей и видеть, как они растут."],
["tech","Бағдарламалау немесе ақпараттық жүйелермен жұмыс маған қызық.","Мне интересны программирование и работа с информационными системами."],
["acc","Есеп, құжат, шот-фактурамен жұмыс істегенде жауапкершілікті сезінемін.","Работая с отчётами, документами и счетами, я чувствую ответственность."],
["act","Спортпен тұрақты айналысамын немесе жаттықтырушы болуды армандаймын.","Я регулярно занимаюсь спортом или мечтаю стать тренером."],
["sci","Зертханада өлшеу мен талдау жүргізу — менің жұмыс тәсілім.","Измерения и анализы в лаборатории — мой стиль работы."],
["log","Деректерден заңдылық тауып, қорытынды жасау маған қызық.","Мне интересно находить закономерности в данных и делать выводы."],
["lang","Мәтінді бір тілден екінші тілге дәл аударып көру қызық.","Мне интересно точно переводить текст с одного языка на другой."],
["care","Басқа адамның жағдайын түсініп, қолдау білдіруді жақсы білемін.","Я умею понимать состояние другого человека и поддерживать его."],
["tech","Жаңа цифрлық құралды тез меңгеріп кетемін.","Я быстро осваиваю новые цифровые инструменты."],
["acc","Ереже мен заңға сүйеніп шешім қабылдау маған жақын.","Мне близко принимать решения, опираясь на правила и законы."],
["act","Командалық ойын мен жарыс өткізгенді ұнатамын.","Мне нравится организовывать командные игры и соревнования."],
["sci","Заттың құрамын химиялық әдіспен анықтау маған қызық.","Мне интересно определять состав вещества химическими методами."]
]};

var CHIPS=[
{id:"math",ax:{log:.12,acc:.08},kk:"Математика",ru:"Математика"},
{id:"inf",ax:{tech:.14,log:.06},kk:"Информатика",ru:"Информатика"},
{id:"phys",ax:{log:.08,sci:.08},kk:"Физика",ru:"Физика"},
{id:"chem",ax:{sci:.14},kk:"Химия",ru:"Химия"},
{id:"bio",ax:{sci:.1,care:.06},kk:"Биология",ru:"Биология"},
{id:"kaz",ax:{lang:.12},kk:"Қазақ тілі мен әдебиеті",ru:"Казахский язык и литература"},
{id:"rus",ax:{lang:.12},kk:"Орыс тілі мен әдебиеті",ru:"Русский язык и литература"},
{id:"eng",ax:{lang:.1,tech:.04},kk:"Ағылшын тілі",ru:"Английский язык"},
{id:"hist",ax:{lang:.06,acc:.08},kk:"Тарих және құқық негіздері",ru:"История и основы права"},
{id:"pe",ax:{act:.14,care:.04},kk:"Дене шынықтыру",ru:"Физкультура"},
{id:"art",ax:{care:.08,lang:.04},kk:"Музыка және көркем еңбек",ru:"Музыка и искусство"}
];

/* ---------- state ---------- */
var lang="kk",track=null,view="home",step=0,answers=[],chips={},prof=null,scored=[],sel=null,locked=false;
var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function $(s){return root.querySelector(s)}
function $$(s){return Array.prototype.slice.call(root.querySelectorAll(s))}
function t(k){return UI[lang][k]}
function store(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function load(k){try{return localStorage.getItem(k)}catch(e){return null}}
function clamp(x,a,b){return Math.max(a,Math.min(b,x))}
function ax(i){return AXN[lang][AX[i]]}
function pool(){return PROGS.filter(function(p){return track===11||!p.app})}

/* ---------- radar ---------- */
var NS="http://www.w3.org/2000/svg",CX=200,CY=170,R=105,LR=124;
function mk(n,a,p){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
function ang(i){return -Math.PI/2+i*2*Math.PI/AX.length}
function pt(i,v){return [CX+Math.cos(ang(i))*R*v,CY+Math.sin(ang(i))*R*v]}
function pts(vec){return vec.map(function(v,i){var p=pt(i,v);return p[0].toFixed(1)+","+p[1].toFixed(1)}).join(" ")}
function buildRadar(svg,withYou){
  svg.innerHTML="";
  [.25,.5,.75,1].forEach(function(r){mk("polygon",{points:pts(AX.map(function(){return r})),"class":"pf-ring"},svg)});
  AX.forEach(function(a,i){var p=pt(i,1);mk("line",{x1:CX,y1:CY,x2:p[0].toFixed(1),y2:p[1].toFixed(1),"class":"pf-spoke"},svg)});
  [.5,1].forEach(function(r){var x=mk("text",{x:CX+5,y:(CY-R*r-3).toFixed(1),"class":"pf-tick"},svg);x.textContent=String(Math.round(r*100))});
  var labels=AX.map(function(a,i){
    var c=Math.cos(ang(i)),x=CX+c*LR,y=CY+Math.sin(ang(i))*LR;
    var anc=Math.abs(c)<.2?"middle":(c>0?"start":"end");
    var tx=mk("text",{x:x.toFixed(1),y:(y+4).toFixed(1),"text-anchor":anc,"class":"pf-ax"},svg);
    tx.setAttribute("data-ax",a);return tx;
  });
  var zero=pts(AX.map(function(){return 0}));
  var spec=mk("polygon",{"class":"pf-spec",points:zero},svg),you=null,dots=[];
  if(withYou){
    you=mk("polygon",{"class":"pf-you",points:zero},svg);
    dots=AX.map(function(){return mk("circle",{r:3.6,"class":"pf-dot",cx:CX,cy:CY},svg)});
  }
  return {labels:labels,spec:spec,you:you,dots:dots};
}
function radarLabels(r){r.labels.forEach(function(x){x.textContent=AXS[lang][x.getAttribute("data-ax")]})}
function setYou(r,vec){
  r.you.setAttribute("points",pts(vec));
  r.dots.forEach(function(d,i){var p=pt(i,vec[i]);d.setAttribute("cx",p[0].toFixed(1));d.setAttribute("cy",p[1].toFixed(1))});
}

/* ---------- hero radar ---------- */
var HERO=PROGS.filter(function(p){return p.hero}),heroR,heroIdx=0,heroCur=HERO[0].w.slice(),heroAnim=0,heroTimer=0;
function heroShow(i,animate){
  heroIdx=i;
  $("#pf-heroName").textContent=HERO[i].qual[lang];
  $$("#pf-heroDots button").forEach(function(b,k){b.setAttribute("aria-pressed",k===i?"true":"false")});
  var from=heroCur.slice(),to=HERO[i].w;
  cancelAnimationFrame(heroAnim);
  if(!animate||reduce){heroCur=to.slice();heroR.spec.setAttribute("points",pts(heroCur));return}
  var t0=performance.now();
  function frame(now){
    var p=Math.min(1,(now-t0)/800),e=1-Math.pow(1-p,3);
    heroCur=from.map(function(f,k){return f+(to[k]-f)*e});
    heroR.spec.setAttribute("points",pts(heroCur));
    if(p<1)heroAnim=requestAnimationFrame(frame);
  }
  heroAnim=requestAnimationFrame(frame);
}
function initHero(){
  heroR=buildRadar($("#pf-heroRadar"),false);
  var box=$("#pf-heroDots");
  HERO.forEach(function(p,i){
    var b=document.createElement("button");b.type="button";
    b.addEventListener("click",function(){clearInterval(heroTimer);heroTimer=0;heroShow(i,true)});
    box.appendChild(b);
  });
  radarLabels(heroR);heroShow(0,false);
  if(!reduce)heroTimer=setInterval(function(){
    if(view==="home"&&location.hash==="#profor")heroShow((heroIdx+1)%HERO.length,true);
  },3600);
}

/* ---------- i18n ---------- */
function applyI18n(){
  $$("[data-pf]").forEach(function(n){n.textContent=t(n.getAttribute("data-pf"))});
  $$("[data-pf-aria]").forEach(function(n){n.setAttribute("aria-label",t(n.getAttribute("data-pf-aria")))});
  $("#pf-other").textContent=track===9?t("other9"):t("other11");
}
function setLang(l){
  lang=l;store("pf-lang",l);
  root.setAttribute("lang",l);
  $$("[data-pf-lang]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-pf-lang")===l?"true":"false")});
  applyI18n();radarLabels(heroR);heroShow(heroIdx,false);
  $$("#pf-heroDots button").forEach(function(b,i){b.setAttribute("aria-label",HERO[i].qual[l])});
  if(view==="quiz")renderQuiz();
  if(view==="result")renderResult(true);
}

/* ---------- views ---------- */
function show(v){
  view=v;
  $("#pf-hero").hidden=v!=="home";
  $("#pf-home").hidden=v!=="home";
  $("#pf-quiz").hidden=v!=="quiz";
  $("#pf-result").hidden=v!=="result";
  window.scrollTo(0,0);
}
function startQuiz(tr){
  track=tr;step=0;answers=[];chips={};prof=null;sel=null;locked=false;
  for(var i=0;i<14;i++)answers.push(null);
  $("#pf-other").textContent=tr===9?t("other9"):t("other11");
  show("quiz");renderQuiz();
}
function renderQuiz(){
  $("#pf-qtrack").textContent=track===9?t("t9"):t("t11");
  var card=$("#pf-qcard"),pct=Math.round(step/15*100);
  $("#pf-qbar").style.width=pct+"%";
  $("#pf-qprog").setAttribute("aria-valuenow",String(pct));
  $("#pf-qback").style.visibility=step===0?"hidden":"visible";
  if(step<14){
    var it=ITEMS[track][step],txt=it[lang==="kk"?1:2];
    var n=(lang==="kk"?"Тұжырым ":"Утверждение ")+(step+1)+" / 14",labs=t("sc");
    var btns=[1,2,3,4,5].map(function(v){
      return '<button type="button" class="pf-sc" data-v="'+v+'" aria-pressed="'+(answers[step]===v)+'"><b>'+v+'</b><span>'+labs[v-1]+'</span></button>';
    }).join("");
    card.innerHTML='<div class="pf-qn">'+n+'</div><h2 class="pf-qtext">'+txt+'</h2><div class="pf-scale" role="group" aria-label="'+n+'">'+btns+'</div><div class="pf-ends"><span>'+labs[0]+'</span><span>'+labs[4]+'</span></div>';
    $$("#pf-qcard .pf-sc").forEach(function(b){b.addEventListener("click",function(){answer(parseInt(b.getAttribute("data-v"),10))})});
  }else{
    var cs=CHIPS.map(function(c){return '<button type="button" class="pf-chip" data-c="'+c.id+'" aria-pressed="'+(!!chips[c.id])+'">'+c[lang]+'</button>'}).join("");
    card.innerHTML='<div class="pf-qn">'+(lang==="kk"?"Соңғы қадам":"Последний шаг")+' · 15 / 15</div><h2 class="pf-qtext">'+t(track===9?"chips9":"chips11")+'</h2><div class="pf-chips">'+cs+'</div><p class="pf-hint">'+t("chipsHint")+'</p><div><button type="button" class="btn" id="pf-go">'+t("showRes")+'</button></div>';
    $$("#pf-qcard .pf-chip").forEach(function(b){b.addEventListener("click",function(){
      var id=b.getAttribute("data-c");chips[id]=!chips[id];b.setAttribute("aria-pressed",String(!!chips[id]));
    })});
    $("#pf-go").addEventListener("click",finish);
  }
}
function answer(v){
  if(locked||step>=14)return;
  locked=true;answers[step]=v;
  $$("#pf-qcard .pf-sc").forEach(function(b){b.setAttribute("aria-pressed",String(parseInt(b.getAttribute("data-v"),10)===v))});
  setTimeout(function(){locked=false;step++;renderQuiz()},reduce?0:170);
}
function finish(){prof=profile();sel=null;show("result");renderResult(false)}

/* ---------- scoring ---------- */
function profile(){
  var sum={},cnt={},raw={};
  AX.forEach(function(a){sum[a]=0;cnt[a]=0});
  ITEMS[track].forEach(function(it,i){var v=answers[i]==null?3:answers[i];sum[it[0]]+=(v-1)/4;cnt[it[0]]++});
  AX.forEach(function(a){raw[a]=sum[a]/cnt[a]});
  CHIPS.forEach(function(c){if(chips[c.id]){for(var k in c.ax)raw[k]=Math.min(1,raw[k]+c.ax[k])}});
  var mean=AX.reduce(function(s,a){return s+raw[a]},0)/AX.length;
  var u=AX.map(function(a){return clamp(.5+(raw[a]-mean)*1.6,.05,1)});
  var spread=Math.max.apply(null,u)-Math.min.apply(null,u);
  return {u:u,flat:spread<.14};
}
function score(u,p){
  var w=p.w,n=0,d=0;
  for(var i=0;i<w.length;i++){var k=w[i]+.3;n+=k*Math.abs(w[i]-u[i]);d+=k}
  var s=Math.round(100*(1-n/d));
  if(p.subj&&chips[p.subj])s+=4;   /* сәйкес пәнді таңдаса, бағдарлама сәл жоғарылайды */
  return Math.min(99,s);
}
function dur(){
  if(lang==="kk")return track===9?"3 жыл 10 ай":"2 жыл 10 ай";
  return track===9?"3 года 10 мес.":"2 года 10 мес.";
}

/* ---------- result ---------- */
var resR=null;
function renderResult(keepSel){
  if(!resR)resR=buildRadar($("#pf-resRadar"),true);
  radarLabels(resR);
  var u=prof.u;
  scored=pool().map(function(p){return {p:p,pct:score(u,p)}}).sort(function(a,b){return b.pct-a.pct});
  if(!sel||!keepSel||!scored.some(function(x){return x.p.id===sel}))sel=scored[0].p.id;
  var fm=$("#pf-flat");fm.hidden=!prof.flat;fm.textContent=t("flat");
  var n9=$("#pf-no9");n9.hidden=track!==9;n9.textContent=t("no9");
  setYou(resR,u);
  $("#pf-rank").innerHTML=scored.map(function(x,i){
    return '<li class="'+(i<3?"pf-top":"")+'"><button type="button" class="pf-rk" data-id="'+x.p.id+'" aria-pressed="'+(x.p.id===sel)+'"><span class="pf-rn">'+(i+1)+'</span><span><span class="pf-rname">'+x.p.qual[lang]+'</span><span class="pf-rsub">'+x.p.name[lang]+'</span><span class="pf-rbar"><i style="width:'+x.pct+'%"></i></span></span><span class="pf-rp">'+x.pct+'%</span></button></li>';
  }).join("");
  $$("#pf-rank .pf-rk").forEach(function(b){b.addEventListener("click",function(){sel=b.getAttribute("data-id");renderResult(true)})});
  renderDetail();
}
function renderDetail(){
  var row=0;scored.forEach(function(x,i){if(x.p.id===sel)row=i});
  var p=scored[row].p,pct=scored[row].pct,u=prof.u;
  resR.spec.setAttribute("points",pts(p.w));
  $("#pf-legSpec").textContent=p.qual[lang];
  var order=AX.map(function(a,i){return {i:i,v:Math.min(p.w[i],u[i])}}).sort(function(a,b){return b.v-a.v});
  var a1=ax(order[0].i),a2=ax(order[1].i);
  var why=lang==="kk"
    ?"Профильде «"+a1+"» және «"+a2+"» бағыттары күшті, ал бұл бағдарлама дәл соларға сүйенеді."
    :"В твоём профиле выделяются «"+a1+"» и «"+a2+"», а именно на них опирается эта программа.";
  var gi=-1,gv=.2;
  AX.forEach(function(a,i){var d=p.w[i]-u[i];if(d>gv){gv=d;gi=i}});
  var grow=gi<0?"":(lang==="kk"
    ?"Дамыту аймағы: «"+ax(gi)+"». Бұл бағдарлама үшін маңызды, бірақ оқу барысында жаттықтыруға болады."
    :"Зона роста: «"+ax(gi)+"». Для этой программы это важно, но навык можно развить в процессе обучения.");
  var kick=lang==="kk"?"№"+(row+1)+" сәйкестік бойынша":"№"+(row+1)+" по совпадению";
  var term=p.unclear?t("clarify"):dur();
  $("#pf-detail").innerHTML=
   '<div class="pf-kick">'+kick+'</div><h3>'+p.qual[lang]+'</h3><p class="pf-sub">'+p.name[lang]+'</p>'+
   '<div class="pf-pctrow"><span class="pf-pct">'+pct+'%</span><span class="pf-pctl">'+t("match")+'</span></div>'+
   '<div class="pf-bar2"><i style="width:'+pct+'%"></i></div>'+
   '<p class="pf-desc">'+p.desc[lang]+'</p>'+
   '<dl class="pf-dl">'+
   '<div><dt>'+t("lblSpec")+'</dt><dd>'+p.name[lang]+'<br><small>'+p.spec+'</small></dd></div>'+
   '<div><dt>'+t("lblQual")+'</dt><dd>'+p.qual[lang]+'<br><small>'+p.code+'</small></dd></div>'+
   '<div><dt>'+t("lblJobs")+'</dt><dd>'+p.jobs[lang]+'</dd></div>'+
   '<div><dt>'+t("lblDur")+'</dt><dd><b>'+term+'</b> · '+(track===9?t("t9"):t("t11"))+'</dd></div>'+
   '</dl>'+
   '<div class="note">'+why+'</div>'+(grow?'<div class="note">'+grow+'</div>':'')+
   (p.app?'<div class="note">'+t("appNote")+'</div>':'')+
   '<p class="pf-hint" style="margin-top:10px">'+t("termNote")+'</p>';
  $$("#pf-rank .pf-rk").forEach(function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-id")===sel))});
}

/* ---------- wiring ---------- */
function init(){
  var saved=load("pf-lang");if(saved==="ru"||saved==="kk")lang=saved;
  initHero();
  $$("[data-pf-lang]").forEach(function(b){b.addEventListener("click",function(){setLang(b.getAttribute("data-pf-lang"))})});
  $$(".pf-track").forEach(function(b){b.addEventListener("click",function(){startQuiz(parseInt(b.getAttribute("data-track"),10))})});
  $("#pf-exit").addEventListener("click",function(){show("home")});
  $("#pf-qback").addEventListener("click",function(){if(step>0&&!locked){step--;renderQuiz()}});
  $("#pf-retake").addEventListener("click",function(){startQuiz(track)});
  $("#pf-other").addEventListener("click",function(){startQuiz(track===9?11:9)});
  document.addEventListener("keydown",function(e){
    if(location.hash!=="#profor"||view!=="quiz"||step>=14)return;
    var tag=e.target&&e.target.tagName;if(tag==="INPUT"||tag==="TEXTAREA"||tag==="SELECT")return;
    if(e.key>="1"&&e.key<="5"&&!e.ctrlKey&&!e.metaKey&&!e.altKey)answer(parseInt(e.key,10));
  });
  setLang(lang);
  show("home");
  window.scrollTo(0,0);
}
init();
})();
