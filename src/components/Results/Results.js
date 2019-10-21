import React from 'react';
import Card from '../QuestionCard/Card';
import './Results.css';

const Results = ({ results }) => {
    if (results === 'none' || results === undefined) {
        return (null);
    }

    if (results.length === 0) {
        return (
            <div>
                <p>No Questions Found</p>
            </div>
        );
    }

    return (
        <div className="resultsDiv">
            {results.map((result) => {
                return (
                    <Card value={result.value} category={result.category.title} question={result.question} answer={result.answer} airDate={(result.airdate+"").toString()} />
                );
            })}
        </div>
    )
}

export default Results;