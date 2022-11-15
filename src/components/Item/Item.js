function Item ({upperText, mediumText, bottomText}) {

    return (
        < div className="Item">
            <p className="Item__text"> {upperText} </p>
            <p className="Item__number"> {mediumText} </p>
            <p className="Item__text"> {bottomText} </p>
        </div>
    );
}

export default Item;