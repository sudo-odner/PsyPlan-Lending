import './about-us.css'
import Nasta from "../../visual-components/image/people/nasta.png";
import Igor from "../../visual-components/image/people/igor.png";
import Danila from "../../visual-components/image/people/danila.png";
import Goga from "../../visual-components/image/people/goga.png";
import Kirill from "../../visual-components/image/people/kirill.png";
import Liza from "../../visual-components/image/people/liza.png";
import Element from "./element/element"
import { createRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from "react-scroll";

function About_US() {

    return(
        <div className="About_US-background">
            <div className="About_US-object">
                <div className="About_US-object-first">
                    <div className="Dots"><Link id="dot-1" className="Dot" to="usr-1" spy={true} smooth={true} offset={-70} duration={1000}></Link></div>
                    <div className="Dots"><Link id="dot-2" className="Dot" to="usr-2" spy={true} smooth={true} offset={-70} duration={1200}></Link></div>
                    <div className="Dots"><Link id="dot-3" className="Dot" to="usr-3" spy={true} smooth={true} offset={-70} duration={1400}></Link></div>
                    <div className="Dots"><Link id="dot-4" className="Dot" to="usr-4" spy={true} smooth={true} offset={-70} duration={1600}></Link></div>
                    <div className="Dots"><Link id="dot-5" className="Dot" to="usr-5" spy={true} smooth={true} offset={-70} duration={1800}></Link></div>
                    <div className="Dots"><Link id="dot-6" className="Dot" to="usr-6" spy={true} smooth={true} offset={-70} duration={2000}></Link></div>
                </div>
                <div className="About_US-object-second">
                    <div>{Element('usr-1', '#2F7B7F', 0, "Анастасия", "Юсова", Nasta, "Проджект-менеджер", "Санкт-Петербург, 17 лет", "Координирует весь процесс создания, представляет проект на конкурсах, отвечает на все вопросы и почти всегда на связи.", "Опыт в проектах: несколько индивидуальных исследовательских на различные темы и несколько групповых проектов, направленных на создание музейных экспозиций.", "Финалист Национальной Технологической Олимпиады 2022 по профилю Нейротехнологии и когнитивные науки. В 2022 году была участницей Всероссийской проектной школы NeuroCamp в ЗОЦ “Таватуй”.")}</div>
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