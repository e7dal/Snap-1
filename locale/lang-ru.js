/*

    lang-ru.js

    Russian translation for SNAP!

    written by Svetlana Ptashnaya, Проскурнёв Артём and Pavel Belousov



    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.ru = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    ,    \u00c4, \u00e4
,    \u00d6, \u00f6
    ,    \u00dc, \u00fc
    §      \u00df
*/

    // translations meta information
    'language_name':
        'Русский', // the name as it should appear in the language menu
    'language_translator':
        'Svetlana Ptashnaya, Проскурнёв Артём, Pavel Belousov', // your name for the Translators tab
    'translator_e-mail':
        'svetlanap@berkeley.edu, tema@school830.ru, pbsite@mail.ru', // optional
    'last_changed':
        '2020-10-08', // this, too, will appear in the Translators tab

    // GUI
    // control bar:
    'untitled':
        'Безымянный',
    'development mode':
        'Разрабатываемая версия',

    // categories:
    'Motion':
        'Движение',
    'Looks':
        'Внешность',
    'Sound':
        'Звук',
    'Pen':
        'Перо',
    'Control':
        'Управление',
    'Sensing':
        'Сенсоры',
    'Operators':
        'Операторы',
    'Variables':
        'Переменные',
    'Lists':
        'Списки',
    'Other':
        'Прочее',

    // editor:
    'draggable':
        'движимый',

    // tabs:
    'Scripts':
        'Скрипты',
    'Costumes':
        'Костюмы',
    'Backgrounds':
        'Фоны',
    'Sounds':
        'Звуки',

    // names:
    'Sprite':
        'Спрайт',
    'Stage':
        'Сцена',

    // rotation styles:
    'don\'t rotate':
        'не вращаемый',
    'can rotate':
        'вращаемый',
    'only face left/right':
        'зеркальное отображение лево-право при вращении',

    // new sprite button:
    'add a new sprite':
        'Добавить новый спрайт',
    'add a new Turtle sprite':
        'создать новый стандартный спрайт',
    'paint a new sprite':
        'нарисовать новый спрайт',
    'take a camera snapshot and\nimport it as a new sprite':
        'сделать фотографию камерой и\nиспользовать изображение как новый спрайт',


    // tab help
    'costumes tab help':
        'Вы можете перенести и бросить сюда изображение со своего компьютера',

    'import a sound from your computer\nby dragging it into here':
        'Вы можете перенести и бросить сюда звуковой файл со своего компьютера',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // motion:
    'Stage selected:\nno motion primitives':
        'Выбрана сцена:\nнет блоков движения',


    'move %n steps':
        'передвинуть на %n шагов',
    'turn %clockwise %n degrees':
        'повернуть %clockwise на %n градусов',
    'turn %counterclockwise %n degrees':
        'повернуть %counterclockwise на %n градусов',
    'point in direction %dir':
        'указывать в направлении %dir',
    'point towards %dst':
        'указывать на %dst',
    'go to x: %n y: %n':
        'перейти в точку x %n y %n',
    'go to %dst':
        'перейти в точку %dst',
    'glide %n secs to x: %n y: %n':
        'скользить %n сек к x %n y %n',
    'change x by %n':
        'изменить х на %n',
    'set x to %n':
        'установить х %n',
    'change y by %n':
        'изменить y на %n',
    'set y to %n':
        'установить y %n',
    'if on edge, bounce':
        'на границе развернуться',
    'x position':
        'x позиция',
    'y position':
        'y позиция',
    'direction':
        'направление',

    // looks:
    'switch to costume %cst':
        'изменить костюм на %cst',
    'next costume':
        'следующий костюм',
    'costume #':
        'костюм №',
    'say %s for %n secs':
        'говорить %s в течение %n сек',
    'say %s':
        'говорить %s',
    'think %s for %n secs':
        'думать %s в течение %n сек',
    'think %s':
        'думать %s',
    'Hello!':
        'Привет!',
    'Hmm...':
        'Хмм...',
    '%img of costume %cst':
        '%img костюма %cst',
    'new costume %l width %dim height %dim':
        'новый костюм из %l шириной %dim высотой %dim',
    'stretch %cst x: %n y: %n %':
        'растянуть %cst по x: %n по y: %n %',
    'change %eff effect by %n':
        'изменить эффект %eff на %n',
    'set %eff effect to %n':
        'установить эффект %eff в %n',
    'clear graphic effects':
        'убрать эффекты',
    '%eff effect':
        'значение эффекта %eff',
    'change size by %n':
        'изменить размер на %n',
    'set size to %n %':
        'установить размер в %n',
    'size':
        'размер',
    'show':
        'показаться',
    'hide':
        'спрятаться',
    'shown?':
        'видим?',
    'go to %layer layer':
        'перейти на %layer слой',
    'front':
        'передний',
    'back':
        'задний',
    'go back %n layers':
        'переместиться на %n слоёв назад',

    'development mode \ndebugging primitives:':
        'Разрабатываемая версия \nотладка примитивов:',
    'console log %mult%s':
        'консоль-регистрация %mult%',
    'alert %mult%s':
        'предупреждение %mult%',

    'pixels':
        'пикселы',
    'current':
        'текущий',

    // sound:
    'play sound %snd':
        'воспроизводить звук %snd',
    'play sound %snd until done':
        'воспроизв. звук %snd до конца',
    'stop all sounds':
        'остановить все звуки',
    'rest for %n beats':
        'пауза в тактах %n',
//    'play sound %snd at %rate Hz':
//        'play sound %snd at %rate Hz', //Перевести
//    '%aa of sound %snd':
//        '%aa of sound %snd', //Перевести
//    'duration':
//        'duration', //Перевести
//    'length':
//        'length', //Перевести
//    'number of channels':
//        'number of channels', //Перевести
//    'new sound %l rate %rate Hz':
//        'new sound %l rate %rate Hz', //Перевести
    'play note %note for %n beats':
        'играть ноту %note длит. %n',
    'set instrument to %inst':
        'инструмент %inst',
    'change tempo by %n':
        'изменить темп на %n',
    'set tempo to %n bpm':
        'уст. темп %n такт/мин',
    'tempo':
        'темп',
//    'change volume by %n':
//        'change volume by %n', //Перевести
//    'set volume to %n %':
//        'set volume to %n %', //Перевести
//    'change balance by %n':
//        'change balance by %n', //Перевести
//    'set balance to %n':
//        'set balance to %n', //Перевести
//    'balance':
//        'balance', //Перевести
//    'play frequency %n Hz':
//        'play frequency %n Hz', //Перевести
//    'stop frequency':
//        'stop frequency', //Перевести
//    'play %n Hz for %n secs':
//        'play %n Hz for %n secs', //Перевести

    // "instruments", i.e. wave forms
    '(1) sine':
        '(1) синус (sine)',
    '(2) square':
        '(2) квадрат (square)',
    '(3) sawtooth':
        '(3) пила (sawtooth)',
    '(4) triangle':
        '(4) треугольник (triangle)',

    // pen:
    'clear':
        'очистить всё',
    'pen down':
        'опустить перо',
    'pen up':
        'поднять перо',
    'pen down?':
        'перо опущено?',
    'set pen color to %clr':
        'установить цвет пера %clr',
    'set background color to %clr':
        'установить фоновый цвет %clr',
//     'change pen %hsva by %n':
//        'change pen %hsva by %n', //Перевести
//    'change background %hsva by %n':
//        'change background %hsva by %n', //Перевести
//    'set pen %hsva to %n':
//        'set pen %hsva to %n', //Перевести
//    'set background %hsva to %n':
//        'set background %hsva to %n', //Перевести
//    'pen %pen':
//        'pen %pen', //Перевести
    'change pen size by %n':
        'изменить размер пера на %n',
    'set pen size to %n':
        'установить размер пера %n',
    'stamp':
        'оттиск',
    'fill':
        'заливка',
//    'write %s size %n':
//        'write %s size %n', //Перевести
//    'paste on %spr':
//        'paste on %spr', //Перевести
//    'pen vectors':
//        'pen vectors', //Перевести

    // control:
    'when %greenflag clicked':
        'при нажатии на %greenflag',
    'when %keyHat key pressed':
        'при нажатии клавиши %keyHat',
    'when I am %interaction':
        'когда меня %interaction',
    'clicked':
        'кликнут',
    'pressed':
        'нажмут',
    'dropped':
        'бросят',
    'mouse-entered':
        'заденет курсор',
    'mouse-departed':
        'покинет курсор',
//    'scrolled-down':
//    	'scrolled-down', //Перевести
//    'scrolled-up':
//        'scrolled-up', //Перевести
//    'stopped':
//        'stopped', //Перевести
    'when %b':
        'когда %b',
    'when I receive %msgHat':
        'когда я получу %msgHat',
    'broadcast %msg':
        'переслать %msg всем',
    'broadcast %msg and wait':
        'переслать %msg всем и ждать',
//    'send %msg to %spr':
//        'send %msg to %spr', //Перевести
    'Message name':
        'Название сообщения',
    'message':
        'сообщение',
    'any message':
        'любое сообщение',
    'wait %n secs':
        'ждать %n сек.',
    'wait until %b':
        'ждать до %b',
    'forever %loop':
        'непрерывно %loop',
    'repeat %n %loop':
        'повторять %n %loop',
    'repeat until %b %loop':
        'повторять пока не %b %loop',
//    'for %upvar = %n to %n %cla':
//        'for %upvar = %n to %n %cla', //Перевести
    'if %b %c':
        'если %b %c',
    'if %b %c else %c':
        'если %b %c иначе %c',
//    'if %b then %s else %s':
//        'if %b then %s else %s', //Перевести
    'report %s':
        'результат %s',
    'stop %stopChoices':
        'остановить %stopChoices',
    'all':
        'всё',
    'this script':
        'этот скрипт',
    'this block':
        'этот блок',
    'stop %stopOthersChoices':
        'стоп %stopOthersChoices',
    'all but this script':
        'всех, кроме меня',
    'other scripts in sprite':
        'все другие мои скрипты',
    'pause all %pause':
        'пауза для всех %pause',
    'run %cmdRing %inputs':
        'выполнить %cmdRing %inputs',
    'launch %cmdRing %inputs':
        'запустить %cmdRing %inputs',
    'call %repRing %inputs':
        'вызвать %repRing %inputs',
    'run %cmdRing w/continuation':
        'выполнить %cmdRing с продолжением',
    'call %cmdRing w/continuation':
        'вызвать %cmdRing с продолжением',
    'warp %c':
        'сразу %c',
    'when I start as a clone':
        'когда я создан как клон',
    'create a clone of %cln':
        'клонировать %cln',
    'a new clone of %cln':
        'новый клон %cln',
    'myself':
        'я',
    'delete this clone':
        'удалить этого клона',
    'tell %spr to %cmdRing %inputs':
        'передать %spr команды %cmdRing %inputs',
    'ask %spr for %repRing %inputs':
        'запросить у %spr информацию %cmdRing %inputs',

    // sensing:
    'touching %col ?':
        'касается %col ?',
    'touching %clr ?':
        'касается %clr ?',
    'color %clr is touching %clr ?':
        'цвет %clr касается %clr ?',
    'ask %s and wait':
        'спросить %s и ждать',
    'what\'s your name?':
        'Как Вас зовут?',
    'answer':
        'ответ',
    'mouse x':
        'мышка x-позиция',
    'mouse y':
        'мышка y-позиция',
    'mouse down?':
        'клавиша мышки нажата?',
    'key %key pressed?':
        'клавиша %key нажата?',
    '%rel to %dst':
        '%rel на/до %dst',
    'distance':
    	'расстояние',
//    '%asp at %loc':
//        '%asp at %loc', //Перевести
//    'r-g-b-a':
//        'r-g-b-a', //Перевести
//    'sprites':
//        'sprites', //Перевести
    'reset timer':
        'переустановить таймер',
    'timer':
        'таймер',
    '%att of %spr':
        '%att у %spr',
    'my %get':
        'атрибут %get',
//    'object %self':
//        'object %self', //Перевести
//    'http:// %s':
//        'http:// %s', //Перевести
//    'turbo mode':
//        'Turbomodus', //Перевести
//    'flat line ends':
//        'flache Pinselstriche', //Перевести
//    'is %setting on?':
//        'ist %setting an?', //Перевести
//    'set %setting to %b':
//        'setze %setting auf %b', //Перевести
    'current %dates':
        'сейчас %dates',
    'year':
        'год',
    'month':
        'месяц',
    'date':
        'день',
    'day of week':
        'день недели',
    'hour':
        'часов',
    'minute':
        'минут',
    'second':
        'секунд',
    'time in milliseconds':
        'время в миллисекундах',
//    'microphone %audio':
//        'Mikrofon %audio', //Перевести
//    'volume':
//        'Lautstärke', //Перевести
//    'note':
//        'Note', //Перевести
//    'frequency':
//        'Frequenz', //Перевести
//    'samples':
//        'Signale', //Перевести
//    'sample rate':
//        'Abtastrate', //Перевести
//    'spectrum':
//        'Frequenzspektrum', //Перевести
//    'resolution':
//        'Auflösung', //Перевести
//    'Microphone resolution...':
//        'Mikrofonauflösung...', //Перевести
//    'Microphone':
//        'Mikrofon', //Перевести
//    'low':
//        'niedrig', //Перевести
//    'high':
//        'hoch', //Перевести
//    'max':
//        'max', //Перевести
//    'video %vid on %self':
//        'Video %vid auf %self', //Перевести
//    'motion':
//        'Bewegung', //Перевести
//    'snap':
//        'Snap', //Перевести
//    'set video transparency to %n':
//        'setze Videotransparenz auf %n', //Перевести
//    'video capture':
//        'Videoaufnahme', //Перевести
//    'mirror video':
//        'Video gespiegelt', //Перевести
    'filtered for %clr':
        'отфильтровано для %clr',
    'stack size':
        'размер стека',
    'frames':
        'рамки',
//    'log pen vectors':
//        'Vektoraufzeichnung', //Перевести

    // operators:
    '%n mod %n':
        '%n по модулю %n',
    'round %n':
        'округлить %n',
//    '%fun of %n':
//        '%fun %n', //Перевести
    'pick random %n to %n':
        'случайное число от %n до %n',
    '%b and %b':
        '%b и %b',
    '%b or %b':
        '%b или %b',
    'not %b':
        'не %b',
    'true':
        'истина',
    'false':
        'ложь',
    'join %words':
        'объединить %words',
    'split %s by %delim':
        'разделить %s по %delim',
    'hello':
        'Привет',
    'world':
        'мир',
    'letter %idx of %s':
        '%idx буква слова %s',
    'length of %s':
        'длина %s',
    'unicode of %s':
        'Unicode  буквы %s',
    'unicode %n as letter':
        'буква с Unicode %n',
    'is %s a %typ ?':
        '%s это %typ ?',
    'is %s identical to %s ?':
        '%s тождественно %s ?',
    'JavaScript function ( %mult%s ) { %code }':
        'функция на JavaScript ( %mult%s ) { %code }',
    'compile %repRing':
    	'компилировать %repRing',

    'type of %s':
        'тип %s',

    // variables:
    'Make a variable':
        'Объявить переменную',
    'Variable name':
        'Имя переменной',
    'Script variable name':
        'Имя переменной скрипта',
    'inherit %shd':
        'наследовать %shd',
    'Delete a variable':
        'Удалить переменную',

    'set %var to %s':
        'придать %var значение %s',
    'change %var by %n':
        'изменить %var на %n',
    'show variable %var':
        'показать переменную %var',
    'hide variable %var':
        'спрятать переменную %var',
    'script variables %scriptVars':
        'переменные скрипта %scriptVars',

    // lists:
    'list %exp':
        'список %exp',
    'numbers from %n to %n':
        'числа от %n до %n',
    '%s in front of %l':
        '%s впереди %l',
    'item %idx of %l':
        'элемент %idx из %l',
    'all but first of %l':
        'все кроме первого из %l',
    'length of %l':
        'длина %l',
    '%l contains %s':
        '%l содержит %s',
    'thing':
        'что-либо',
    'is %l empty?':
        'список %l пуст?',
//    'index of %s in %l':
//        'Index von %s in %l', //Перевести
//    'map %repRing over %l':
//        'wende %repRing an auf %l', //Перевести
//    'keep items %predRing from %l':
//        'behalte Elemente, die %predRing aus %l', //Перевести
//    'find first item %predRing in %l':
//        'finde das erste Element, das %predRing in %l', //Перевести
//    'combine %l using %repRing':
//        'kombiniere die Elemente von %l mit %repRing', //Перевести
//    '%blitz map %repRing over %l':
//        '%blitz wende %repRing an auf %l', //Перевести
//    '%blitz keep items %predRing from %l':
//        '%blitz behalte Elemente, die %predRing aus %l', //Перевести
//    '%blitz find first item %predRing in %l':
//        '%blitz finde das erste Element, das %predRing in %l', //Перевести
//    '%blitz combine %l using %repRing':
//        '%blitz kombiniere die Elemente von %l mit %repRing', //Перевести
//    'for each %upvar in %l %cla':
//        'für jedes %upvar von %l %cla', //Перевести
//    'item':
//        'Element', //Перевести
//    'value':
//        'Wert', //Перевести
//    'index':
//        'Index', //Перевести
//    'append %lists':
//        'verbinde %lists', //Перевести
    'add %s to %l':
        'добавить %s к %l',
    'delete %ida of %l':
        'удалить %ida из %l',
    'insert %s at %idx of %l':
        'встав. %s в полож. %idx в %l',
    'replace item %idx of %l with %s':
        'заменить элем. %idx в %l на %s',

    // other
    'Make a block':
        'Новый блок',

    // menus
    // snap menu
    'About...':
        'О программе...',
    'Reference manual':
        'Справочное руководство',
    'Snap! website':
        'Веб-сайт программы Snap!',
    'Download source':
        'Загрузить исходники программы',
    'Switch back to user mode':
        'Вернуться в режим пользователя',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'отключить deep-Morphic\nконтекст меню',
    'Switch to dev mode':
        'перейти в режим разрабатываемой версии',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'включить Morphic\nконтекст меню',

    // project menu
    'Project notes...':
        'Проектные Записки...',
    'New':
        'Новый проект',
    'Open...':
        'Открыть...',
    'Save':
        'Сохранить',
//    'Save to disk':
//        'Abpeichern', //Перевести
//    'store this project\nin the downloads folder\n(in supporting browsers)':
//        'dieses Projekt herunterladen\nund lokal speichern\n' //Перевести
//            + '(nicht von allen Browsern unters\u00fctzt)', //Перевести
    'Save As...':
        'Сохранить как...',
    'Import...':
        'Импорт...',
    'file menu import hint':
        'загрузить экспортированный проект\nили библиотеку блоков, костюм или звук',


    'Export project as plain text...':
        'Экспортировать проект как текстовый файл...',
    'Export project...':
        'Экспортировать проект...',
    'save project data as XML\nto your downloads folder':
        'сохранить проект в виде XML файла',
//    'show project data as XML\nin a new browser window':
//        'zeigt das Projekt als XML\nin einem neuen Browserfenster an', //Перевести
    'Export blocks...':
        'Экспортировать блоки...',
    'save global custom block\ndefinitions as XML':
        'сохранить определения глобальных пользовательских блоков в виде XML файла',
    'Unused blocks...':
        'Неиспользуемые блоки...',
    'find unused global custom blocks\nand remove their definitions':
        'поиск и удаление неиспользуемых блоков',
    'Remove unused blocks':
        'Удалить неиспользуемые блоки',
    'there are currently no unused\nglobal custom blocks in this project':
        'в этом проекте нет неиспользуемых глобальных блоков',
    'unused block(s) removed':
        'неиспользуемых блоков удалено',
    'Export summary...':
        'Сводка экспортируемых данных...',
    'save a summary\nof this project':
        'сохранить сводку по данному проекту',
//    'Contents':
//        'Inhalt', //Перевести
//    'Kind of':
//        'Eine Art', //Перевести
//    'Part of':
//        'Ein Teil von', //Перевести
//    'Parts':
//        'Teile', //Перевести
//    'Blocks':
//        'Bausteine', //Перевести
//    'For all Sprites':
//        'Allen gemeinsam', //Перевести
    'Libraries...':
        'Библиотеки...',
    'Select categories of additional blocks to add to this project.':
        'выбрать дополнительные библиотеки блоков\nдля добавления к проекту',
    'Select a costume from the media library':
        'Выбор костюма из библиотеки изображений',
    'Select a sound from the media library':
        'Выбор звука из медиа-библиотеки',

    //Libraries
    'Import library':
        'Загрузка библиотек',
//    'Loading':
//        'Lädt', //Перевести
//    'Imported':
//        'Importiert', //Перевести
//    'Iteration, composition':
//        'Iteration, Komposition', //Перевести
//    'List utilities':
//        'Listen bearbeiten', //Перевести
//    'Variadic reporters':
//        'Variadische Funktionen', //Перевести
//    'Web services access (https)':
//        'Zugriff auf Webservices', //Перевести
//    'Multi-branched conditional (switch)':
//        'Mehrfach verzweigte Conditionals (Switch)', //Перевести
//    'LEAP Motion controller':
//        'LEAP Motion Controller', //Перевести
//    'Words, sentences':
//        'Wörter, Sätze', //Перевести
//    'Catch errors in a script':
//        'Fehlerhandhabung im Skript', //Перевести
//    'Set RGB or HSV pen color':
//        'Stiftfarbe auf RGB oder HSV Werte setzen', //Перевести
//    'Text to speech':
//        'Sprachausgabe', //Перевести
//    'Provide 100 selected colors':
//        '100 ausgewählte Farben', //Перевести
//    'Infinite precision integers, exact rationals, complex':
//        'Beliebig präzise Ganzzahlen, exakte rationale Zahlen, komplexe Zahlen', //Перевести
//    'Provide getters and setters for all GUI-controlled global settings':
//        'GUI Elemente programmatisch bearbeiten', //Перевести
//    'Allow multi-line text input to a block':
//        'Mehrzeiliger Text als Eingabe für Blöcke', //Перевести
//    'Create variables in program':
//        'Variablen im Skript erstellen', //Перевести

    // cloud menu
//    'Login...':
//        'Anmelden...', //Перевести
//    'Signup...':
//        'Benutzerkonto einrichten...', //Перевести
//    'Logout':
//        'Abmelden', //Перевести
//    'Change Password...':
//        'Passwort ändern...', //Перевести
//    'Reset Password...':
//        'Passwort zurücksetzen...', //Перевести
//    'Resend Verification Email...':
//        'Bestätigungsmail nochmal senden...', //Перевести
//    'Open in Community Site':
//        'Projektseite anzeigen', //Перевести

    // settings menu
    'Language...':
        'Язык...',
    'Zoom blocks...':
        'Увеличение блоков кода...',
//    'Fade blocks...':
//        'Bl\u00f6cke ausblenden...', //Перевести
    'Stage size...':
        'Размер сцены...',
    'Stage size':
        'Размер сцены',
    'Stage width':
        'Ширина сцены',
    'Stage height':
        'Высота сцены',
    'Default':
        'По умолчанию',
    'Blurred shadows':
        'Контрастность тени',
    'uncheck to use solid drop\nshadows and highlights':
        'снимите флажок, чтобы использовать сплошные\nтени и подсветки',
    'check to use blurred drop\nshadows and highlights':
        'отметьте, чтобы использовать размытые\nтени и подсветки',
    'Zebra coloring':
        'Использование альтернативных цветов',
    'check to enable alternating\ncolors for nested blocks':
        'отметьте, чтобы разрешить использование\nперемежающихся цветов для вложенных блоков',
    'uncheck to disable alternating\ncolors for nested block':
        'снимите флажок, чтобы отключить использование\nперемежающихся цветов для вложенных блоков',
    'Dynamic input labels':
        'Использование динамических обозначений',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'снимите флажок, чтобы отключить использование динамических обозначений\nпри вводе с переменным числом аргументов',
    'check to enable dynamic\nlabels for variadic inputs':
        'отметьте, чтобы разрешить использование динамических обозначений\nпри вводе с переменным числом аргументов',
    'Prefer empty slot drops':
        'Использование незанятых ячеек ввода',
    'settings menu prefer empty slots hint':
        'отметьте, чтобы помещать генераторы значений\nтолько в незанятые ячейки ввода',

    'uncheck to allow dropped\nreporters to kick out others':
        'снимите флажок, чтобы разрешить помещать генераторы значений\nв занятые ячейки ввода',

    'check to turn on\n visible stepping (slow)':
        'отметьте, чтобы отображались\nшаги выполнения скрипта (медленно)',
    'uncheck to turn off\nvisible stepping':
        'снимите флажок, чтобы отключить отображение\nшагов выполнения скрипта',
    'Long form input dialog':
        'Расширенная форма диалога ввода',
    'Plain prototype labels':
        'Простые заголовки блоков',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'снимите флажок, чтобы показывать (+)\nпри редактировании заголовка в редакторе блоков',
    'check to hide (+) symbols\nin block prototype labels':
        'отметьте, чтобы отключить (+)\nпри редактировании заголовка в редакторе блоков',
    'check to always show slot\ntypes in the input dialog':
        'отметьте, чтобы указывать типы ячеек ввода\nв диалоге ввода',
    'uncheck to use the input\ndialog in short form':
        'снимите флажок, чтобы использовать краткую форму\nдиалога ввода',
    'Virtual keyboard':
        'Виртуальная клавиатура',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'снимите флажок, чтобы отключить использование виртуальной клавиатуры\nдля мобильных устройств',

    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'отметьте, чтобы разрешить использование виртуальной клавиатуры\nдля мобильных устройств',

    'Input sliders':
        'Использование бегунков ввода',
    'uncheck to disable\ninput sliders for\nentry fields':
        'снимите флажок, чтобы отключить использование бегунков\nпри заполнении полей ввода',
    'check to enable\ninput sliders for\nentry fields':
        'отметьте, чтобы разрешить использование бегунков\nпри заполнении полей ввода',
    'Retina display support':
        'Поддержка технологии Retina display',
    'uncheck for lower resolution,\nsaves computing resources':
        'снимите флажок для использования низкого разрешения\nэто уменьшит нагрузку на ресурсы компьютера',
    'check for higher resolution,\nuses more computing resources':
        'отметьте, чтобы использовать высокое разрешение\nэто увеличит нагрузку на ресурсы компьютера',
    'Codification support':
        'Поддержка кодификации блоков',
    'Clicking sound':
        'Звук щелчка',
    'uncheck to turn\nblock clicking\nsound off':
        'снимите флажок, чтобы выключить звук\nпри щелчке на блок',
    'check to turn\nblock clicking\nsound on':
        'отметьте, чтобы включить звук\nпри щелчке на блок',
    'Animations':
        'Aнимация',
    'uncheck to disable\nIDE animations':
        'снимите флажок, чтобы отключить\nIDE aнимацию',
    'Turbo mode':
        'Режим Турбо',
    'check to prioritize\nscript execution':
        'отметьте, чтобы ускорить выполнение скрипта',
    'uncheck to run scripts\nat normal speed':
        'снимите флажок для выполнения скрипта\nс нормальной скоростью',
    'check to enable\nIDE animations':
        'отметьте, чтобы разрешить\nIDE aнимацию',
    'Flat design':
        'Плоский дизайн',
    'check for alternative\nGUI design':
        'отметьте для включения\nальтернативного дизайна среды разработки',
    'uncheck for default\nGUI design':
        'снимите флажок для включения\nстандартного дизайна среды разработки',
    'Nested auto-wrapping':
        'Nested auto-wrapping',
    'Keyboard Editing':
        'Редактирование с клавиатуры',
    'Table support':
        'Поддержка таблиц',
    'Table lines':
        'Выделить линии у таблицы',
    'Visible stepping':
        'Отображение шагов выполнения',
    'Thread safe scripts':
        'Защищенность скрипта в многопоточном режиме',
    'uncheck to allow\nscript reentrance':
        'снимите флажок, чтобы разрешить\nповторный вход в скрипт',
    'check to disallow\nscript reentrance':
        'отметьте, чтобы отключить\nповторный вход в скрипт',
//    'Prefer smooth animations':
//        'Fixe Framerate', //Перевести
//    'uncheck for greater speed\nat variable frame rates':
//        'ausschalten, um Animationen \ndynamischer auszuf\u00fchren', //Перевести
//    'check for smooth, predictable\nanimations across computers':
//        'einschalten, damit Animationen\n\u00fcberall gleich laufen', //Перевести
    'Flat line ends':
        'Прямоугольные завершения линий',
    'check for flat ends of lines':
        'отметьте, чтобы отключить\nзакругления на концах нарисованных линий',
    'uncheck for round ends of lines':
        'снимите флажок, чтобы\nконцы нарисованных линий закруглялись',
//    'Ternary Boolean slots':
//        'Ternäre Bool\'sche Inputs', //Перевести
    'Inheritance support':
        'Поддержка наследования',
//    'Hyper blocks support':
//        'Hyper-Blöcke', //Перевести
//    'uncheck to disable\nusing operators on lists and tables':
//         'erweiterte Anwendung von Operatoren\nauf Listen und Tabellen', //Перевести
//    'check to enable\nusing operators on lists and tables':
//         'erweiterte Anwendung von Operatoren\nauf Listen und Tabellen', //Перевести
//    'Log pen vectors':
//        'Malstiftvektoren aufzeichnen', //Перевести
//    'uncheck to turn off\nlogging pen vectors':
//        'ausschalten, um Malstiftbewegungen\nnicht mehr aufzuzeichnen', //Перевести
//    'check to turn on\nlogging pen vectors':
//        'einschalten, um Malstiftbewegungen\nals Vektor aufzuzeichnen', //Перевести


    // inputs
    'with inputs':
        'с вводимыми данными',
    'input names:':
        'имена вводимых данных:',
    'Input Names:':
        'Имена Вводимых Данных:',
    'input list:':
        'вводимый список:',

    // context menus:
    'help':
        'Справка',

    // palette:
    'find blocks':
        'найти блоки...',
    'hide primitives':
        'скрыть стандартные блоки',
    'show primitives':
        'отобразить стандартные блоки',

    // blocks:
    'help...':
        'справка...',
    'relabel...':
        'переобозначить...',
    'compile':
        'Компилировать',
//    'uncompile':
//        'Entkompilieren', // Перевести
    'duplicate':
        'продублировать',
    'make a copy\nand pick it up':
        'скопировать\nи запомнить',
    'only duplicate this block':
        'продублировать только данный блок',
    'delete':
        'удалить',
//    'senders...':
//        'Sender...', // Перевести
//    'receivers...':
//        'Empfänger...', // Перевести
    'script pic...':
        'изображение скрипта...',
    'save a picture\nof this script':
        'сохранить изображение этого скрипта',
//    'result pic...':
//        'Ergebnisbild...', // Перевести
//    'save a picture of both\nthis script and its result':
//        'ein Bild dieses Skripts mit\nseinem Ergebnis speichern', // Перевести
    'ringify':
        'обвести',
    'unringify':
        'убрать обводку',
//    'transient':
//        'nicht persistent', // Перевести
//    'uncheck to save contents\nin the project':
//        'ausschalten, um den Inhalt\nim Projekt zu speichern', // Перевести
//    'check to prevent contents\nfrom being saved':
//        'einschalten, um das Speichern des Inhalts\nim Projekt zu verhindern', // Перевести
//    'new line':
//        'neue Zeile', // Перевести

    // custom blocks:
    'delete block definition...':
        'удалить определение блока',
//    'duplicate block definition...':
//        'Blockdefinition duplizieren...', // Перевести
//    'export block definition...':
//        'Blockdefinition exportieren...', // Перевести
//    'including dependencies':
//        'mit allen verwendeten Blöcken', // Перевести
    'edit...':
        'редактировать...',

    // sprites:
    'edit':
        'редактировать',
    'clone':
        'клонировать',
    'move':
        'переместить',
    'pivot':
        'центр вращения',
    'edit the costume\'s\nrotation center':
        'указать центр вращения для костюма',
//    'rotate':
//    	'Drehen', // Перевести
//    'stick to':
//        'Befestigen an', // Перевести
//    'detach from':
//        'Abtrennen von', // Перевести
//    'detach all parts':
//        'Alle Teile abtrennen', // Перевести
    'export...':
        'экспорт...',
    'parent...':
        'родитель...',
//    'current parent':
//        'родитель спрайта', // Перевести
    'release':
        'освободить',
    'make temporary and\nhide in the sprite corral':
        'сделать временным и\nубрать отдельный спрайт',

    // stage:
    'show all':
        'показать все',
    'pic...':
        'изображение...',
    'save a picture\nof the stage':
        'сохранить изображение текущей сцены',
//    'svg...':
//        'SVG exportieren...', // Перевести
//    'export pen trails\nline segments as SVG':
//        'Striche in Malspuren als\nVektorgraphik exportieren', // Перевести
//    'there are currently no\nvectorizable pen trail segments':
//        'momentan gibt es keine\nvektorisierbaren Malspuren', // Перевести
//    'turn all pen trails and stamps\ninto a new background for the stage':
//        'Hintergrund aus allen Malspuren und\nStempelabdrücken auf der Bühne erstellen', // Перевести
//    'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite':
//        'aus allen Malspuren und Stempelabdrücken ein\nKostüm für die momentan ausgewählte Figur erstellen', // Перевести

    // scripting area
    'clean up':
        'упорядочить',
    'arrange scripts\nvertically':
        'размещать скрипты\nвертикально',
    'add comment':
        'добавить комментарий',
    'undrop':
        'отменить',
    'undo the last\nblock drop\nin this pane':
        'отменить последнее\nдействие с блоком',
    'redrop':
        'вернуть',
    'use the keyboard\nto enter blocks':
        'использовать клавиатуру\nдля работы с блоками',
    'scripts pic...':
        'скрипты в изображение...',
    'save a picture\nof all scripts':
        'сохранить изображение\nвсех скриптов',
    'make a block...':
        'новый блок...',

    // costumes
    'rename':
        'переименовать',
    'export':
        'экспорт',
    'rename costume':
        'переименовать костюм',

    // sounds
    'Play sound':
        'Воспроизводить звук',
    'Stop sound':
        'Остановить звук',
    'Stop':
        'Стоп',
    'Play':
        'Воспроизводить',
    'rename sound':
        'переименовать звук',

    // lists and tables
    'list view...':
        'в виде списка...',
    'table view...':
        'в виде таблицы...',
    'Table view':
        'Табличный вид',
    'open in dialog...':
        'открыть в отдельном окне...',
    'blockify':
        'представить как блок',
//    'reset columns':
//        'Spaltenbreiten zur\u00fccksetzen', // Перевести
//    'items':
//        'Elemente', // Перевести

    // dialogs    
    // buttons
    'OK':
        'OK',
    'Ok':
        'Ok',
    'Cancel':
        'Отменить',
    'Yes':
        'Да',
    'No':
        'Нет',

    // help
    'Help':
        'Справка',

    // zoom blocks
//    'Zoom blocks':
//        'Bl\u00f6cke vergr\u00f6\u00dfern', // Перевести
//    'build':
//        'baue', // Перевести
//    'your own':
//        'eigene', // Перевести
//    'blocks':
//        'Bl\u00f6cke', // Перевести
//    'normal (1x)':
//        'normal (1x)', // Перевести
//    'demo (1.2x)':
//        'Demo (1.2x)', // Перевести
//    'presentation (1.4x)':
//        'Pr\u00e4sentation (1.4x)', // Перевести
//    'big (2x)':
//        'gro\u00df (2x)', // Перевести
//    'huge (4x)':
//        'riesig (4x)', // Перевести
//    'giant (8x)':
//        'gigantisch (8x)', // Перевести
//    'monstrous (10x)':
//        'ungeheuerlich (10x)', // Перевести

    // fade blocks
//    'Fade blocks':
//        'Bl\u00f6cke ausblenden', // Перевести
//    'block-solid (0)':
//        'normal (0)', // Перевести
//    'medium (50)':
//        'mittel (50)', // Перевести
//    'light (70)':
//        'leicht (70)', // Перевести
//    'shimmering (80)':
//        'schimmernd (80)', // Перевести
//    'elegant (90)':
//        'elegant (90)', // Перевести
//    'subtle (95)':
//        'angedeutet (95)', // Перевести
//    'text-only (100)':
//        'nur Text (100)', // Перевести

    // Project Manager
    'Untitled':
        'Неозаглавленный',
    'Open Project':
        'Открыть Проект',
    'Open':
        'Открыть',
    '(empty)':
        '(пусто)',
    'Saved!':
        'Сохранен!',
    'Delete Project':
        'Удалить Проект',
    'Are you sure you want to delete':
        'Вы уверены вы хотите удалить?',
    'rename...':
        'переименовать...',
    'Examples':
        'Примеры',
//    'Share':
//        'Teilen', // Перевести
//    'Unshare':
//        'Nicht mehr teilen', // Перевести
//    'Publish':
//        'Veröffentlichen', // Перевести
//    'Unpublish':
//        'Nicht mehr veröffentlichen', // Перевести
//    'Updating\nproject list...':
//        'Projektliste laden', // Перевести
//    'Recover':
//        'Wiederherstellen', // Перевести
//    'Today':
//        'Heute', // Перевести
//    'Yesterday':
//        'Gestern', // Перевести

    // costume editor
    'Costume Editor':
        'Редактор костюмов',
//    'Paint Editor':
//        'Kostümeditor', // Перевести
    'click or drag crosshairs to move the rotation center':
        'щелкните на перекрестье переместить центр поворота',
    'undo':
        'отменить',
    'Vector':
        'векторный формат',
    'Paintbrush tool\n(free draw)':
	'Кисть (свободное рисование)',
    'Stroked Rectangle\n(shift: square)':
	'Прямоугольник\n(shift: квадрат)',
    'Stroked Ellipse\n(shift: circle)':
	'Эллипс\n(shift: окружность)',
    'Eraser tool':
	'Ластик',
    'Set the rotation center':
	'Установка центра вращения',
    'Line tool\n(shift: vertical/horizontal)':
	'Линия\n(shift: вертикальная/горизонтальная)',
    'Filled Rectangle\n(shift: square)':
	'Закрашенный прямоугольник\n(shift: квадрат)',
    'Filled Ellipse\n(shift: circle)':
	'Закрашенный эллипс\n(shift: окружность)',
    'Fill a region':
	'Заливка',
    'Pipette tool\n(pick a color anywhere)':
	'Пипетка\n(взять цвет кликом на любую точку)',
    'Brush size':
        'Размер кисти',
    'Constrain proportions of shapes?\n(you can also hold shift)':
        'Сохранять пропорции фигур (круг, квадрат)?\nТак же можно использовать Shift',
    //'grow':
    //    'größer',
    //'shrink':
    //    'kleiner',
    //'flip ↔':
    //    'drehen ↔',
    //'flip ↕':
    //    'drehen ↕',
    
//    'Vector Paint Editor':
//        'Vektor-Editor', // Перевести
//    'Rectangle\n(shift: square)':
//        'Rechteck\n(Shift: Quadrat)', // Перевести
//    'Ellipse\n(shift: circle)':
//        'Ellipse\n(Shift: Kreis)', // Перевести
//    'Selection tool':
//        'Auswählen', // Перевести
//    'Line tool\n(shift: constrain to 45º)':
//        'Linie\n(Shift: Vielfache von 45°)', // Перевести
//    'Closed brush\n(free draw)':
//        'geschlossene, gefüllte Form\n(freies Zeichnen)', // Перевести
//    'Paint a shape\n(shift: secondary color)':
//        'fülle einen Bereich mit der gewählten Farbe\n(Shift: Sekundärfarbe)', // Перевести
//    'Pipette tool\n(pick a color from anywhere\nshift: secondary color)':
//        'Pipette\nklicke irgendwo auf die gewünschte Farbe\n um sie aufzunehmen (Shift: Sekundärfarbe)', // Перевести
//    'Edge color\n(left click)':
//        'Randfarbe\n(Linksklick)', // Перевести
//    'Fill color\n(right click)':
//        'Füllfarbe\n(Rechtsklick)', // Перевести
   // 'Top':
   //     'oben',
   // 'Bottom':
   //     'unten',
   // 'Up':
   //     'nach oben',
   // 'Down':
   //     'nach unten',


    // project notes
    'Project Notes':
        'Проектные Записки',

    // new project
    'New Project':
        'Новый Проект',
    'Replace the current project with a new one?':
        'Заменить данный проект на новый?',

    // save project
    'Save Project As...':
        'Сохранить Проект как...',
    'Save Project':
        'Сохранить проект',

    // export blocks
    'Export blocks':
        'Экспорт блоки',
    'Import blocks':
        'Импорт блоки',
    'this project doesn\'t have any\ncustom global blocks yet':
        'У этого проекта пока нет глобальных\nпользовательских блоков',
    'select':
        'выделить',
    'none':
        'ничего',

    // variable dialog
    'for all sprites':
        'для всех спрайтов',
    'for this sprite only':
        'только для текущего спрайта',

    // variables refactoring
//    'rename only\nthis reporter':
//        'nur diesen Block\numbenennen', // Перевести
    'rename all...':
        'переименовать все...',
//    'rename all blocks that\naccess this variable':
//        'alle Blöcke umbenennen,\ndie diese Variable referenzieren', // Перевести


    // block dialog
    'Change block':
        'Заменить блок',
    'Command':
        'Команда',
    'Reporter':
        'Генератор значений',
    'Predicate':
        'Предикат',

    // block editor
    'Block Editor':
        'Редактор Блоков',
//    'Method Editor':
//        'Methodeneditor', // Перевести
    'Apply':
        'Применить',

    // block deletion dialog
    'Delete Custom Block':
        'Удалить Пользовательский Блок',
    'block deletion dialog text':
        'Вы уверены вы хотите удалить этот блок?',


    // input dialog
    'Create input name':
        'Определить имя вводимых данных',
    'Edit input name':
        'Редактировать имя вводимых данных',
    'Edit label fragment':
        'Редактировать фрагмент обозначения',
    'Title text':
        'Заголовок текста',
    'Input name':
        'Имя вводимых данных',
    'Delete':
        'Удалить',
    'Object':
        'Объект',
    'Number':
        'Число',
    'Text':
        'Текст',
    'List':
        'Список',
    'Any type':
        'Любой тип',
    'Boolean (T/F)':
        'Булев (И/Л)',
    'Command\n(inline)':
        'Команда\n(встроенная)',
    'Command\n(C-shape)':
        'Команда\n(С-форма)',
    'Any\n(unevaluated)':
        'Любой\n(неопределенный)',
    'Boolean\n(unevaluated)':
        'Булев\n(неопределенный)',
    'Single input.':
        'Единичный ввод.',
    'Default Value:':
        'Значение по умолчанию:',
    'Multiple inputs (value is list of inputs)':
        'Многократный ввод (список)',
    'Upvar - make internal variable visible to caller':
        'Сделать внутреннюю переменную видимой извне',

    // About Snap
    'About Snap':
        'О программе',
    'Back...':
        'Bозврат...',
    'License...':
        'Лицензия...',
    'Modules...':
        'Модули...',
    'Credits...':
        'Сотрудники...',
    'Translators...':
        'Переводчики',
    'License':
        'Лицензия',
//    'current module versions:':
//        'Komponenten-Versionen', // Перевести
    'Contributors':
        'Участники',
    'Translations':
        'Переводы',

    // variable watchers
    'normal':
        'стандартный',
    'large':
        'масштабированный',
    'slider':
        'бегунок',
    'slider min...':
        'бегунок min...',
    'slider max...':
        'бегунок max...',
    'import...':
        'импорт...',
//    'raw data...':
//        'Rohdaten...', // Перевести
//    'import without attempting to\nparse or format data':
//        'Daten unformatiert\nimportieren', // Перевести
    'Slider minimum value':
        'Бегунок - min значение',
    'Slider maximum value':
        'Бегунок - max значение',

    // list watchers
    'length: ':
        'длина: ',

    // comments
    'add comment here...':
        'добавьте комментарий сюда...',
//    'comment pic...':
//        'Kommentarbild', // Перевести
//    'save a picture\nof this comment':
//        'ein Bild dieser\nAnmerkung speichern', // Перевести

    // drow downs
    // directions
    '(90) right':
        '(90) направо',
    '(-90) left':
        '(-90) налево',
    '(0) up':
        '(0) вверх',
    '(180) down':
        '(180) вниз',
//    'random':
//    	'zufällig', // Перевести
//     'random position':
//     	'zufällige Position', // Перевести

    // collision detection
    'mouse-pointer':
        'курсор мышки',
    'edge':
        'край',
    'pen trails':
        'линии пера',
//    'center':
//        'Mitte', // Перевести

    // costumes
    'Turtle':
        'Стрела',
    'Empty':
        'Пусто',
    'Paint a new costume':
        'Нарисовать новый костюм',
    'Import a new costume from your webcam':
        'Сделать костюм из фотографии вебкамерой',
//    'Please make sure your web browser is up to date\nand your camera is properly configured. \n\nSome browsers also require you to access Snap!\nthrough HTTPS to use the camera.\n\nPlase replace the "http://" part of the address\nin your browser by "https://" and try again.':
//        'Überprüfe, ob der Browser auf dem aktuellsten Stand \nund die Webcam korrekt konfiguriert ist.\n\nFür einige Browser muss Snap! mit HTTPS geöffnet\nwerden, um auf die Kamera zuzugreifen.\n\nErsetze dafür den "http://"-Teil in der Adresszeile mit"https://"', // Перевести
//    'Camera':
//        'Kamera', // Перевести
    
    // sounds
    'Record a new sound':
        'Записать новый звук',


    // graphical effects
    'color':
        'цвет',
//    'hue':
//        'Farbton', // Перевести
    'fisheye':
        'рыбий глаз',
    'whirl':
        'вихрь',
    'pixelate':
        'пикселизация',
    'mosaic':
        'мозаика',
    'saturation':
        'насыщенность',
    'brightness':
        'яркость',
//    'transparency':
//        'Transparenz', // Перевести
    'ghost':
        'прозрачность',
    'negative':
        'негатив',
    'comic':
        'комикс',
    'confetti':
        'конфетти',

    // keys
    'space':
        'пробел',
    'up arrow':
        'стрелка вверх',
    'down arrow':
        'стрелка вниз',
    'right arrow':
        'стрелка вправо',
    'left arrow':
        'стрелка влево',
    'any key':
        'любая клавиша',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // messages
    'new...':
        'новый...',
//    '__shout__go__':
//        'grüne Flagge angeklickt', // Перевести

    // math functions
    'abs':
        'абсолютное значение',
    'ceiling':
        'округление до большего',
    'floor':
        'округление до меньшего',
    'sqrt':
        'квадратный корень',
    'sin':
        'sin',
    'cos':
        'cos',
    'tan':
        'tan',
    'asin':
        'asin',
    'acos':
        'acos',
    'atan':
        'atan',
    'ln':
        'ln',
    'e^':
        'e^',

    // Boolean expressions keyboard entry
    'not':
        'не',

    // delimiters
    'letter':
        'буквам',
    'word':
        'словам',
    'whitespace':
        'пробелам',
    'line':
        'строкам',
    'tab':
        'табуляторам',
    'cr':
        'концам строк',
        
    // data types
    'number':
        'число',
    'text':
        'текст',
    'Boolean':
        'булев',
    'list':
        'список',
    'command':
        'команда',
    'reporter':
        'генератор значений',
    'predicate':
        'предикат',
    'sprite':
        'спрайт',

    // list indices
    'last':
        'последний',
    'any':
        'любой',
        
    // attributes
//    'my':
//        'Attribut', // Перевести
    'neighbors':
        'соседи',
    'self':
        'я',
    'other sprites':
        'другие спрайты',
    'parts':
        'части',
    'anchor':
        'якорь',
    'parent':
        'родитель',
    'temporary?':
        'временный?',
    'children':
        'потомок',
    'clones':
        'клоны',
    'other clones':
        'другие клоны',
    'dangling?':
        'висячий?',
    'draggable?':
        'движимый?',
    'rotation style':
        'тип вращения',
    'rotation x':
        'центр вращения по x',
    'rotation y':
        'центр вращения по y',
    'center x':
        'x центра спрайта',
    'center y':
        'y центра спрайта',
    'name':
        'имя',
    'costume':
        'костюм',
    'stage':
        'сцена',
    'costumes':
        'костюмы',
    'sounds':
        'звуки',
    'scripts':
        'скрипты',
    'width':
        'ширина',
    'height':
        'высота',
    'left':
        'левая граница',
    'right':
        'правая граница',
    'top':
        'верхняя граница',
    'bottom':
        'нижняя граница',

    // attributes in the SET block's dropdown
//    'my anchor':
//        'Attribut Verankerung', // Перевести
//    'my parent':
//        'Attribut Vorfahr', // Перевести
//    'my name':
//        'Attribut Name', // Перевести
//    'my temporary?':
//        'Attribut temporär?', // Перевести
//    'my dangling?':
//        'Attribut baumelnd?', // Перевести
//    'my draggable?':
//        'Attribut greifbar?', // Перевести
//    'my rotation style':
//        'Attribut Drehtyp', // Перевести
//    'my rotation x':
//        'Attribut Drehpunkt x', // Перевести
//    'my rotation y':
//        'Attribut Drehpunkt y', // Перевести

    // inheritance
//    'inherited':
//        'geerbt', // Перевести
//    'check to inherit\nfrom':
//        'einschalten, um zu erben\nvon', // Перевести
//    'uncheck to\ndisinherit':
//        'ausschalten, um \nnicht mehr zu erben' // Перевести
};
