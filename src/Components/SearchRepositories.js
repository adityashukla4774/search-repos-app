import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as repoActions from '../Redux/Actions/repoActions';
import PropTypes from 'prop-types';
import RepositoriesCollection from './RepositoriesCollection';
import '../CSS/SearchRepositoriesStyleClasses.css';

class SearchRepositories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchRepoValue: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        }, () => {
            if(this.state.searchRepoValue === '') {
                this.props.actions.setReposToEmptyArray()
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.loadRepos(this.state.searchRepoValue);
    }

    render() {
        const { searchRepoValue } = this.state;
        const { repos } = this.props;

        return (
            <div>
                <h2>Search for the user's repositories here !!</h2>
                <form className = "formStyle" onSubmit = {this.handleSubmit}>
                    <input
                        type="text"
                        name="searchRepoValue"
                        className = "inputUserName" 
                        placeholder = "Enter username here" 
                        value = {searchRepoValue} 
                        onChange = {this.handleChange} />
                    <br />
                    {
                        searchRepoValue !== '' && <button type="submit" className = "submitButton"> Submit </button>
                    }
                </form>
                <br />
                <RepositoriesCollection repos = {repos}/>
            </div>
        );
    }
}

SearchRepositories.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        repos: state.repos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(repoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRepositories);