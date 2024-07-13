import React from 'react';
import {Expression} from "../../core/models/Expression";

type ScreenComponentProps = {
    expression: Expression,
    result: string
}

export const ScreenComponent = ({ expression, result }: ScreenComponentProps) => {

    return (
        <section className="screen-container">
            <h5>{ expression.value }</h5>
            <h3>{ result }</h3>
        </section>
    );
};
