import React from 'react';

class Searchbar extends React.Component {
    state = {
        query: '',
    };

    handleInput = (e) => {
        this.setState({ query: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.query) this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.onSubmit}>
                    <button type="submit" className="SearchForm-button" >
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleInput}
                    />
                </form>
            </header>
        );
    }
    
};

export default Searchbar;