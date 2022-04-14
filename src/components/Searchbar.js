export default function Searchbar({ onSubmit }) {

    return (    <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
            <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
            </button>

            <input
                className="SearchForm-input"
                name="searchName"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>)

}