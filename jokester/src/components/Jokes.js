import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFacts } from '../actions';
import Fact from './Joke'

const FunFacts = props => {
    useEffect(() => {
        props.fetchFacts();
    }, []);

    if (props.isFetching) {
        return <h2>Loading Facts!</h2>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.funFacts.map(fact => (
                <Fact key = {fact._id} fact = {fact} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        funFacts: state.funFacts,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchFacts }
)(FunFacts);