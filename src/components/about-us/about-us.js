import './about-us.css'
import Nasta from "../../visual-components/image/people/nasta.png";
import Igor from "../../visual-components/image/people/igor.png";
import Danila from "../../visual-components/image/people/danila.png";
import Goga from "../../visual-components/image/people/goga.png";
import Kirill from "../../visual-components/image/people/kirill.png";
import Liza from "../../visual-components/image/people/liza.png";
import Element from "./element/element"
import { createRef, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function About_US() {
    // const elementRef = createRef();

    // useEffect(() => {
    //     const element = elementRef.current.getBoundingClientRect();

    //     const x = element.left - window.parent.left;
    //     const y = element.top - window.parent.top;

    //     console.log(window.parent);
    //     console.log(element);
    //     console.log(x, y);
    // });

    return(
        <div className="About_US-background">
            <Link to="usr-4" spy={true} smooth={true} offset={-70} duration={500}>sdfg</Link>
            <div className="About_US-object">
                <div className="About_US-object-first">
                    <div className="Dots"><a id="dot-1" className="Dot"></a></div>
                    <div className="Dots"><a href='#usr-2' id="dot-2" className="Dot"></a></div>
                    <div className="Dots"><a href='#usr-3' id="dot-3" className="Dot"></a></div>
                    <div className="Dots"><a href='#usr-4' id="dot-4" className="Dot"></a></div>
                    <div className="Dots"><a href='#usr-5' id="dot-5" className="Dot"></a></div>
                    <div className="Dots"><a href='#usr-6' id="dot-6" className="Dot"></a></div>
                </div>
                <div className="About_US-object-second">
                    {Element('usr-1', '#2F7B7F', 0, "Анастасия", "Юсова", Nasta, "Проджект-менеджер", "Санкт-Петербург, 17 лет", "Координирует весь процесс создания, представляет проект на конкурсах, отвечает на все вопросы и почти всегда на связи.", "Опыт в проектах: несколько индивидуальных исследовательских на различные темы и несколько групповых проектов, направленных на создание музейных экспозиций.", "Финалист Национальной Технологической Олимпиады 2022 по профилю Нейротехнологии и когнитивные науки. В 2022 году была участницей Всероссийской проектной школы NeuroCamp в ЗОЦ “Таватуй”.")}
                    {Element('usr-2', '#A73D3D', 1, "Игорь", "Васильев", Igor, "Контент-менеджер, aналитик ", "Новосибирск, 14 лет", "Занимается поиском информации, наполнением приложения и вопросами рынка, конкуренции и бюджета.", "Есть опыт создания проекта по альтернативной энергетике и защиты его на площадке “Точка кипения – Новосибирск”.", "В 2022 году был участником Всероссийской проектной школы NeuroCamp в ЗОЦ “Таватуй”.")}
                    {Element('usr-3', '#A49E7D', 0, "Данила", "Ильин", Danila, "Backend-developer", "Великий Новгород, 17 лет", "Разрабатыет алгоритм для API и работет с сервером", "В бэкенд-разработке уже около трёх лет, из которых усиленно изучаетполгода назад. Помимо олимпиад и хакатонов обучался  программированию 2 года в Яндекс.Лицее, который в настоящий момент уже закончил.", 'Финалист Национальной Технологической Олимпиады 2022 по профилю Нейротехнологии и когнитивные науки. Победитель конкурса “Юные техники и изобретатели – 2019”. Также 3 раза участвовал в конкурсе Большие вызовы, где однажды был победителем и участвовал во Всероссийской программе Больших Вызовов; занимал 2 место среди Новгородской области, был участником регионального трека. В 2022 году был участником Всероссийской проектной школы NeuroCamp в ЗОЦ “Таватуй”, а также занял первое место в Всероссийском конкурс научно-исследовательских работ.')}
                    {Element('usr-4', '#327444', 1, "Георгий", "Вальгер", Goga, "Cпециалист по маркетингу", "Новосибирск, 14 лет", "Занимается поиском информации, наполнением приложения и вопросами рынка, конкуренции и бюджета.", "Есть опыт создания проекта по альтернативной энергетике и защиты его на площадке “Точка кипения – Новосибирск”.", "В 2022 году был участником Всероссийской проектной школы NeuroCamp в ЗОЦ “Таватуй”.")}
                    {Element('usr-5', '#394396', 0, "Кирилл", "Васильев", Kirill, "Android-developer", "Великий Новгород, 17 лет", 'Разрабатыет алгоритм для приложения под Android', 'Опыт в мобильной разработке составляет около полугода, также имеет опыт в разработке веб-интерфейсов.', "Финалист Национальной Технологической Олимпиады 2022 по профилю Нейротехнологии и когнитивные науки. В 2022 году была участницей Всероссийской проектной школы NeuroCamp в ЗОЦ “Таватуй”.")}
                    {Element("usr-6", '#983C68', 1, "Елизавета", 'Мусина', Liza, "Cпециалист по маркетингу", "Екатеринбург, 17 лет", "Занимаеться продвижением приложения в различных соц. сетяx.", "Есть опыт в SMM, продвижении каналов в соцсетях; интересуется сферой маркетинга и активно в ней развивается.", "В 2022 году был участником Всероссийской проектной школы NeuroCamp в ЗОЦ “Таватуй”.")}
                </div>
            </div>
        </div>
    );
}

export default About_US;