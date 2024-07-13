import React from 'react';

type PrimaryInputComponentProps = {
    input: string,
    parenthesesCount: number,
    parentheses: string
}

export const PrimaryInputComponent = ({input, parenthesesCount, parentheses}: PrimaryInputComponentProps) => {


    return (
        <h3>
            { input }
            <span style={{opacity: 0.5}}>{ parenthesesCount > 0 && parentheses}</span>
        </h3>
    );
};
