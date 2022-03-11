import React from 'react'
import FooterStyle from './FooterStyle.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    return (
        <div className={FooterStyle.mainContainer}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{color:"#ECA442",fontSize:"32px",fontWeight:"600"}}>Pizzarola</div>
                <div>2022 © Pizzarola™ Ltd. All rights reserved</div>
            </div>
            <div style={{display:"flex",alignItems:'center',justifyContent:"center"}}>Made with <FavoriteIcon style={{ color: "red",margin:"0px 5px" }} /> by Nishchay Verma </div>
        </div>

    )
}

export default Footer