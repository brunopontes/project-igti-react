import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../component/grid';
import IconButton from '../component/iconButton';

import {search, add} from './contatosActions';

class ContatosForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    };

    keyHandler(e) {
        const {add, search, description, clear} = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            clear();
        };
    };

    componentWillMount() {
        this.props.search();
    };

    render() {
        const {search, add} = this.props;

        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control"
                        placeholder="Pesquise um contato"
                        value={this.props.description}
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}></input>
                </Grid>
        
                <Grid cols="12 3 2">
                    <IconButton style="info" icon="search"
                        onClick={search}/>

                </Grid>
            </div>
        )
    };
}

// const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => 
    bindActionCreators({search, add}, dispatch);

export default connect(null, mapDispatchToProps)(ContatosForm);