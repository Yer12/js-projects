import * as React from "react";
// import "./Footer.css";

const Footer = () => (
    <footer>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 justify-center align-center ">
            <div className="grid grid-rows-4 sm:grid-rows-6 grid-flow-col gap-2 justify-center text-center">
                <h6 className="text-2xl  text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">Наши услуги</h6>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']" >Анализы</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">ГОБМП</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">Выезд на дом</p>
            </div>
            <div className="grid grid-rows-4 sm:grid-rows-6 grid-flow-col gap-2 justify-center text-center">
                <h6 className="text-2xl  text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']"> Клиентам</h6>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular']" >Получить результат</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular']">Подготовка к анализам</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular']">Часто задаваемые вопросы</p>
            </div>
            <div className="grid grid-rows-6 grid-flow-col gap-2 justify-center text-center">
                <h6 className="text-2xl  text-[#ADAAAA] font-['gadugi-regular']">О нас</h6>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular']" >Миссия Tumar</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular']">Политика Tumar</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular']">Наше оборудование</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular']">Лицензии и сертификаты</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular']">Руководство</p>
            </div>
            <div className="grid grid-rows-2 sm:grid-rows-6 grid-flow-col gap-2 justify-center text-center">
                <h6 className="text-2xl  text-[#ADAAAA] font-['gadugi-regular']">Контакты</h6>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="grid grid-rows-4 grid-flow-col gap-2 justify-center text-center">
                <h6 className="text-2xl  text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">Сотрудничество</h6>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']" >Для врачей</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">Для медицинских центров</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">Юридическим лицам</p>
            </div>
            <div className="grid grid-rows-3 sm:grid-rows-4 grid-flow-col gap-2 justify-center text-center">
                <h6 className="text-2xl  text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">Информация</h6>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']" >Акции</p>
                <p className="text-xs text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">Новости</p>
            </div>
            <div className="grid grid-rows-2 sm:grid-rows-4 grid-flow-col gap-2 justify-center text-center">
                <h6 className="text-2xl  text-[#ADAAAA] font-['gadugi-regular'] font-['gadugi-regular']">Публичная оферта</h6>
            </div>
        </div>
        <div className="flex bg-[#EBEBEB] justify-center items-center h-8 text-center">
            <p className="text-sm">Все права защищены .................</p>
        </div>

        {/*<div className="footer_row">*/}
        {/*    <div className="footer_row_services">*/}
        {/*        <h6>Наши услуги</h6>*/}
        {/*        <p>Анализы</p>*/}
        {/*        <p>ГОБМП</p>*/}
        {/*        <p>Выезд на дом</p>*/}
        {/*    </div>*/}
        {/*    <div className="footer_row_services">*/}
        {/*        <h6>Клиентам</h6>*/}
        {/*        <p>Получить результат</p>*/}
        {/*        <p>Подготовка к анализам</p>*/}
        {/*        <p>Часто задаваемые вопросы</p>*/}
        {/*    </div>*/}
        {/*    <div className="footer_row_services">*/}
        {/*        <h6>О нас</h6>*/}
        {/*        <p>Миссия Tumar</p>*/}
        {/*        <p>Политика Tumar</p>*/}
        {/*        <p>Наше оборудование</p>*/}
        {/*        <p>Лицензии и сертификаты</p>*/}
        {/*        <p>Руководство</p>*/}
        {/*    </div>*/}
        {/*    <div className="footer_row_services">*/}
        {/*        <h6>Контакты</h6>*/}
        {/*    </div>*/}

        {/*</div>*/}
        {/*<div className="footer_row">*/}
        {/*    <div className="footer_row_services">*/}
        {/*        <h6>Сотрудничество</h6>*/}
        {/*        <p>Для врачей</p>*/}
        {/*        <p>Для медицинских центров</p>*/}
        {/*        <p>Юридическим лицам</p>*/}
        {/*    </div>*/}
        {/*    <div className="footer_row_services">*/}
        {/*        <h6>Информация</h6>*/}
        {/*        <p>Акции</p>*/}
        {/*        <p>Новости</p>*/}
        {/*    </div>*/}
        {/*    <div className="footer_row_services">*/}
        {/*        <h6 >Публичная оферта</h6>*/}
        {/*    </div>*/}
        {/*</div>*/}

    </footer>
);

export default Footer;
