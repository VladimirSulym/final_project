import React from "react";

function Shipping () {
    return (
        <section className="shipping bgwhite p-t-62 p-b-46">
            <div className="flex-w p-l-15 p-r-15">
                <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
                    <h4 className="m-text12 t-center">
                        Бесплатная доставка по всему миру
                    </h4>

                    <a href="#" className="s-text11 t-center">
                        Нажмите для дополнительной информации
                    </a>
                </div>

                <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
                    <h4 className="m-text12 t-center">
                        30 дней возврата
                    </h4>

                    <span className="s-text11 t-center">
					Просто верните товар в течение 30 дней для обмена
				</span>
                </div>

                <div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
                    <h4 className="m-text12 t-center">
                        Время Работы
                    </h4>

                    <span className="s-text11 t-center">
					Магазин открыт с понедельника по воскресенье
				</span>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Shipping);