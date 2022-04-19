function IconSwitch(props) {
    const { icon, onSwitch } = props;

    const style = {
        fontSize: 32,
        width: 32,
    };

    const clickHandler = () => {
        onSwitch();
    }

    return (
        <button className={'switch-button'} onClick={clickHandler}>
            <span className={'material-icons'} style={style}>{icon}</span>
        </button>
    )
}

export default IconSwitch;
