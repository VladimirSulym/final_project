import React, {useEffect} from 'react';
import stiry from './img/story.jpg';
import about from './img/about.jpg';

function About(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        {/*<!-- Title Page -->*/}
        <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m"
                 style={{backgroundImage: `url(${about})`}}>
            <h2 className="l-text2 t-center">
                О нас
            </h2>
        </section>

    {/*<!-- content page -->*/}
    <section className="bgwhite p-t-66 p-b-38">
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-b-30">
                    <div className="hov-img-zoom">
                        <img src={stiry} alt="IMG-ABOUT"/>
                    </div>
                </div>

                <div className="col-md-8 p-b-30">
                    <h3 className="m-text26 p-t-15 p-b-16">
                        Наша история
                    </h3>

                    <p className="p-b-28">
                        В детстве часто ходили купаться на пруд с друзьями. Как-то купались и начался гром с градом.
                        Помню, как большие льдинки падали прямо в воду, гремел гром. Кто-то сразу
                        вышел из пруда, а мы и большинство народа купались - это было так необычно и весело, пока через
                        минут пять все не замёрзли. Оделись, завернулись в полотенца и потом грелись в местном кафе
                        горячим чаем и пирожками. Одно из самых тёплых воспоминаний детства.
                    </p>

                    <div className="bo13 p-l-29 m-l-9 p-b-10">
                        <p className="p-b-11">
                            Творчество просто соединяет вещи. Когда вы спрашиваете творческих людей, как они что-то сделали,
                            они чувствуют себя немного виноватыми, потому что на самом деле они этого не делали, они просто
                            что-то видели. Через некоторое время это показалось им очевидным.

                        </p>

                        <span className="s-text7">
							- Стив Джобс
						</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </>
    );
}

export default About;