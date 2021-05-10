import React, {useEffect} from 'react';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useDispatch, useSelector} from "react-redux";
import {filterPrice} from "../../../store/action_creatores";

function PriceFilter(props) {
    console.log("props =>",props);
    // const {priceMin, priceMax} = props;

    const Slider = require('rc-slider');
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);

    const dispatch = useDispatch();

    const priceRange = useSelector((store) => store.app.priceRange[0]);
    console.log("priceRange in price" , priceRange)

    // const rangeData = useSelector((store) => store.app.filter.price);
    // console.log("rangeData in price" , rangeData)
    //

    let priceMin = 0;
    let priceMax = 1000;

    if (Object.keys(priceRange).length > 0){
        priceMin = +priceRange.priceMin
        priceMax = +priceRange.priceMax
        dispatch(filterPrice([+priceMin, +priceMax]))
        // console.log("OBNOVILLL")
        // console.log("priceMin" , priceMin)
        // console.log("priceMax" , priceMax)
    }

    useEffect(()=>{
        dispatch(filterPrice([+priceMin, +priceMax]))
    },[])

    function handleRangeMove (e) {
        dispatch(filterPrice(e))
    }

    return (
            <Range
                min={+priceMin}
                max={+priceMax}
                // value={[+rangeData[0],+rangeData[1]]}
                defaultValue={[+priceMin, +priceMax]}
                onChange={handleRangeMove}
            />
    );
}

export default React.memo(PriceFilter);