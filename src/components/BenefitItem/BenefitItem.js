import { Link } from 'react-router-dom';
import Item from '../Item/Item';

function BenefitItem() {

    const squareOne = {
        id1: 'мы',
        id2: '1',
        id3: 'на рынке',
        background:'linear-gradient(to top left,rgba(25, 30, 41,1) 0%,rgba(125,185,232,0) 40%)',
        textDecoration: 'none'
    }
    
    /*const squareOnestyle = {
        background: 'linear-gradient(to top left,rgba(25, 30, 41,1) 0%,rgba(125,185,232,0) 40%)'
    }*/

    const squareTwo = {
        id1: 'гарантируем',
        id2: '50%',
        id3: 'безопасность',
        background:'linear-gradient(to top right,rgba(25, 30, 41,1) 0%,rgba(125,185,232,0) 40%)',
        textDecoration: 'none'
    }
    /*const squareTwostyle = {
        background: 'linear-gradient(to top right,rgba(25, 30, 41,1) 0%,rgba(125,185,232,0) 40%)'
    }*/

    const squareThree = {
        id1: 'календарик за',
        id2: '2001г',
        id3: 'в подарок',
        background:'linear-gradient(to bottom left,rgba(25, 30, 41,1) 0%,rgba(125,185,232,0) 40%)',
        textDecoration: 'none'
    }
    /*const squareThreestyle = {
        background: 'linear-gradient(to bottom left,rgba(25, 30, 41,1) 0%,rgba(125,185,232,0) 40%)'
    }*/
    const squareFour = {
        id1: 'путешествие',
        id2: '597',
        id3: 'дней',
        background:'linear-gradient(to bottom right,rgba(25, 30, 41,1) 0%,rgba(125,185,232,0) 40%)',
        textDecoration: 'none'
    }

    /*const squareFourstyle = {
        background: 'linear-gradient(to bottom right,rgba(25, 30, 41,1) 0%,rgba(125,185,232,0) 40%)'
    }*/

    return (
        <section className="BenefitItem">
            <Link style={squareOne}>
                <Item upperText = {squareOne.id1} mediumText={squareOne.id2} bottomText={squareOne.id3} />
            </Link>
            <Link style={squareTwo}>
                <Item upperText = {squareTwo.id1} mediumText={squareTwo.id2} bottomText={squareTwo.id3} />
            </Link>
            <Link style={squareThree}>
                <Item upperText = {squareThree.id1} mediumText={squareThree.id2} bottomText={squareThree.id3} />
            </Link>
            <Link style={squareFour}>
                <Item upperText = {squareFour.id1} mediumText={squareFour.id2} bottomText={squareFour.id3} />
            </Link>
        </section>
    );
}

export default BenefitItem;