import React, {useEffect} from 'react';
import contact from './img/contact.jpg';
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from "../Components/AnyReactComponent";

function Contact(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const center = {
            lat: 59.95,
            lng: 30.33
        };
    const zoom = 11;

    return (
        <>
        {/*}<!-- Title Page -->*/}
        <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m"
                 style={{backgroundImage: `url(${contact})`}}>
            <h2 className="l-text2 t-center">
                Контакты
            </h2>
        </section>

    {/*<!-- content page -->*/}
    <section className="bgwhite p-t-66 p-b-60">
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-b-30">
                    <div style={{ height: '530px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API, language: 'rus',}}
                            defaultCenter={center}
                            defaultZoom={zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="Fashe"
                            />
                        </GoogleMapReact>
                    </div>
                </div>

                <div className="col-md-6 p-b-30">
                    <form className="leave-comment">
                        <h4 className="m-text26 p-b-36 p-t-15">
                            Отправьте нам свое сообщение
                        </h4>

                        <div className="bo4 of-hidden size15 m-b-20">
                            <input className="sizefull s-text7 p-l-22 p-r-22"
                                   type="text"
                                   name="name"
                                   placeholder="Полное имя"/>
                        </div>

                        <div className="bo4 of-hidden size15 m-b-20">
                            <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="phone-number"
                                   placeholder="Телефон"/>
                        </div>

                        <div className="bo4 of-hidden size15 m-b-20">
                            <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="email"
                                   placeholder="E-mail"/>
                        </div>

                        <textarea className="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20"
                                  name="message"
                                  placeholder="Сообщение"></textarea>

                        <div className="w-size25">
                            {/* <!-- Button -->*/}
                            <button className="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
            </>
    );
}

export default Contact;