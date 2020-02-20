import React from 'react';

export const Project = ({
    name = "",
    link = {}
}) => (
    <a 
        href={link.address}
        alt={link.description}
    >
        {name}
    </a>
)