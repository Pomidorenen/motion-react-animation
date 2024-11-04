import Button from "./Button.jsx";

const Header = () => {

    return (
        <header className="App-header">
            <Button>
                Home
            </Button>
            <Button >
                Profile
            </Button>
            <Button >
                other section...
            </Button>
        </header>
    );
};

export default Header;