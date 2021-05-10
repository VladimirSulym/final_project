import React from "react";
import PropTypes from 'prop-types';

function Topbar () {
    return (
        <div className="topbar">
            <div className="topbar-social">
                <a href="#" className="topbar-social-item fa fa-facebook"/>
                <a href="#" className="topbar-social-item fa fa-instagram"/>
                <a href="#" className="topbar-social-item fa fa-pinterest-p"/>
                <a href="#" className="topbar-social-item fa fa-snapchat-ghost"/>
                <a href="#" className="topbar-social-item fa fa-youtube-play"/>
            </div>

            <span className="topbar-child1">
					Бесплатная доставка при стандартном заказе от 100 $
				</span>

            <div className="topbar-child2">
					<span className="topbar-email">
						fashe@example.com
					</span>
            </div>
        </div>
    )
}


export default React.memo(Topbar);