import React from "react";
import {Helmet} from "react-helmet";
const MetaData = (Props) =>{
    return (
      
        <Helmet>
        <title>{Props.title}</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    )
}

export default MetaData