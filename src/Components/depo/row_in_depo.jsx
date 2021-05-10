import React, {useEffect} from 'react';
import {SERVER_IMAGES} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {updateCart, updateCount, updateQuanCart} from "../../store/action_creatores";
import Badge from 'react-bootstrap/Badge'

function RowInDepo(props) {
    const dispatch = useDispatch();
    const {id, url, title, price, available, colors, category} = props;
    const brandList = useSelector((store) => store.app.brandList);
    const colorList = useSelector((store) => store.app.colorList);

    let color = colorList.filter((i) => i.id === colors)

    let cart = useSelector((store) => store.app.cart);
    console.log('color --- >', color)

    // let quantInt = quant;
    // // let quantInt = useSelector((store) => store.app.count);
    // console.log('quantInt 222222222 - >', quantInt)
    //
    //
    // function handleAddCart(props) {
    //     const newPos = {
    //         id: id,
    //         quant: props,
    //         price: price,
    //         total: price,
    //     };
    //
    //     if ((cart.filter((item) => item.id === newPos.id)).length !== 0){
    //         cart.map((item) => {
    //             if (item.id === newPos.id) {
    //                 item.quant = item.quant+newPos.quant;
    //                 item.total = item.price*item.quant;
    //             }
    //         });} else cart.push(newPos);
    //     dispatch(updateCart(cart));
    //     dispatch(updateQuanCart(cart.length));
    //     console.log('newPos - >', newPos);
    //     console.log('cart222 - >', cart);
    // }
    //
    // function handleClicBattonPlus() {
    //     quantInt++
    //     dispatch(updateCount(quantInt));
    //     handleAddCart(1)
    // }
    // function handleClicBattonMinus() {
    //     if (quantInt > 0) {
    //         quantInt--;
    //         handleAddCart(-1)
    //     } else {quantInt=0}
    //     dispatch(updateCount(quantInt));
    // }
    //
    function handleClicBattonDel() {
        console.log("DEL!!!!!!!!!!!")
        cart = cart.filter((item) => {
            console.log("item.id = >", item.id);
            console.log("id = >", id);
            console.log("item.id !== id = >", item.id !== id);
            return(item.id !== id);
        });
        console.log('cartDEL - >', cart);
        dispatch(updateCart(cart));
        dispatch(updateQuanCart(cart.length));
    }

    useEffect(()=>{dispatch(updateCount(0))
        return (()=>{dispatch(updateCount(0))})
    },[]);

    // useEffect(()=>{dispatch(updateCart(cart))
    //     return (()=>{dispatch(updateCart(cart))})
    // },[]);

    return (
        <tr className="table-row" key={id}>
            <td className="column-1">{id}</td>
            <td className="column-2">
                <div className="cart-img-product b-rad-4 o-f-hidden">
                    <img src={`${SERVER_IMAGES}${url}`} alt="IMG-PRODUCT"/>
                </div>
            </td>
            <td className="column-3">{title}</td>
            <td className="column-4">${price}</td>
            <td className="column-5">{available}</td>
            <td className="column-6">{color[0].title}
                {/*<Badge*/}
                {/*    pill variant="danger"*/}
                {/*    style={{*/}
                {/*        cursor: "pointer",*/}
                {/*        marginLeft: "25%"*/}
                {/*    }}*/}
                {/*    onClick={handleClicBattonDel}*/}
                {/*>*/}
                {/*    X*/}
                {/*</Badge>*/}
            </td>
            <td className="column-7">{category[0].title}
                {/*<Badge*/}
                {/*    pill variant="danger"*/}
                {/*    style={{*/}
                {/*        cursor: "pointer",*/}
                {/*        marginLeft: "25%"*/}
                {/*    }}*/}
                {/*    onClick={handleClicBattonDel}*/}
                {/*>*/}
                {/*    X*/}
                {/*</Badge>*/}
            </td>
        </tr>
    );
}

export default React.memo(RowInDepo);