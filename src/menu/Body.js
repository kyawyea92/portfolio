import React, { Component }  from 'react';
import Carousel from "../body/Carousel";
import Languages from "../body/Languages";
import PageVisitor from "../body/PageVisitor";

export default function BodyFunction(){
    return(
        <div className="mx-5">
            <Carousel/>
            <PageVisitor/>
            <Languages />
        </div>
    );
}