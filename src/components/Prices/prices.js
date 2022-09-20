import * as React from "react";
import './prices.css';
import SelectIcon from "../../images/select.svg";



const Prices = () => {
    return (
        <div className="border mb-10 mt-10 flex flex-col items-center xs:px-2">
            <p className="lg:text-4xl md:text-2xl sm:text-[1.4rem] font-['gabdugi'] text-[#DA6A00] font-semibold  md:mb-4 md:font-bold ">Анализы и цены</p>
            <div className="flex border justify-between sm:w-[40rem] md:w-[45rem] lg:w-[55rem] xs:flex-col sm:flex-row md:flex-row lg:flex-row  ">
                <div className="xs:hidden sm:flex sm:w-2/4 lg:w-1/3 flex-col">
                    <div className="text-center flex items-center justify-center text-[#fff] font-bold text-[1.5rem] h-[4rem] bg-[#DA6A00]">
                        Все анализы
                    </div>
                    <div className="flex flex-col bg-[#DA6A00] bg-opacity-20 text-center">
                        <p className="my-2 font-bold cursor-pointer">Биохимические исследования</p>
                        <p className="my-2 font-bold cursor-pointer">Вирусные гепатиты</p>
                        <p className="my-2 font-bold cursor-pointer">Витамины</p>
                        <p className="my-2 font-bold cursor-pointer">Гематологические исследования</p>
                        <p className="my-2 font-bold cursor-pointer">Генетические исследования</p>
                        <p className="my-2 font-bold cursor-pointer">Общеклинические исследования</p>
                        <p className="my-2 font-bold cursor-pointer">Онкомаркеры</p>
                    </div>
                </div>
                <div className="relative sm:hidden border rounded-lg text-[#DA6A00] text-bold text-center border-[#DA6A00]">
                    <img className="absolute right-3 top-3" src={SelectIcon} alt="select icon"/>
                    <div className="my-2 font-bold cursor-pointer">Все анализы</div>
                    <div className="my-2  cursor-pointer">Биохимические исследования</div>
                    <div className="my-2  cursor-pointer">Вирусные гепатиты</div>
                    <div className="my-2  cursor-pointer">Витамины</div>
                    <div className="my-2  cursor-pointer">Гематологические исследования</div>
                    <div className="my-2  cursor-pointer">Генетические исследования</div>
                    <div className="my-2  cursor-pointer">Общеклинические исследования</div>
                    <div className="my-2  cursor-pointer">Онкомаркеры</div>
                </div>
                <div className="">
                    <div className="sm:w-4/4 sm:ml-2 xs:mt-5 lg:w-full">
                        <div className="sm:px-2 lg:px-4 sm:py-0 lg:py-5">
                            <div className="flex justify-between text-center font-bold text-base mb-3">
                                <p className="w-1/2">Анализ</p>
                                <p>Срок, дни</p>
                                <p>Цена, ₸</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center mb-2 overflow-hidden rounded-xl p-2 px-4 border-solid border-[1px] border-[#DA6A00]">
                                <p className="w-1/2">Клинический анализ крови: общий анализ, лейкоформула, СОЭ</p>
                                <p>1</p>
                                <p>1 990</p>
                            </div>
                            <div className="flex justify-between items-center mb-2 overflow-hidden rounded-xl p-2 px-4 border-solid border-[1px] border-[#DA6A00]">
                                <p className="w-1/2">Клинический анализ крови: общий анализ, лейкоформула, СОЭ</p>
                                <p>1</p>
                                <p>1 990</p>
                            </div>
                            <div className="flex justify-between items-center mb-2 overflow-hidden rounded-xl p-2 px-4 border-solid border-[1px] border-[#DA6A00]">
                                <p className="w-1/2">Клинический анализ крови: общий анализ, лейкоформула, СОЭ</p>
                                <p>1</p>
                                <p>1 990</p>
                            </div>
                            <div className="flex justify-between items-center mb-2 overflow-hidden rounded-xl p-2 px-4 border-solid border-[1px] border-[#DA6A00]">
                                <p className="w-1/2">Клинический анализ крови: общий анализ, лейкоформула, СОЭ</p>
                                <p>1</p>
                                <p>1 990</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices;
