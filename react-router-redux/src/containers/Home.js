import { Link } from 'react-router-dom';
import { getItemIDs } from '../actions';
import { connect } from 'react-redux';

import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        this.props.getItemIDs();
    }

    render() {
        const { itemIDs } = this.props;
        return (
            <ul>
                {itemIDs.map((id) => (
                    <li key={id}>
                        <Link to={id}>
                            product {id}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    itemIDs: state.itemIDs
});

const mapDispatchToProps = {
    getItemIDs
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
