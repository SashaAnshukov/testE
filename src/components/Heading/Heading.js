
import mars from '../../images/SpaceX-Logo-PNG.png';

function Heading() {
      
    return (
        <section className="Heading">
            <h1 className="heading__title">ПУТЕШЕСТВИЕ</h1>
            <p className="heading__description">На красную планету</p>
            <div className="container">
              <div className="btn"><a href="#" >Начать путешествие</a></div>
              <hr className="hr-right-down"></hr>	
            </div>
            <div className="Round"></div>
        </section>
    );
}

export default Heading;