import BenefitItem from '../BenefitItem/BenefitItem';

function Benefits({children}) {


    return (
        <section className="Benefits">
            {children}
            <BenefitItem />
        </section>
    );
}

export default Benefits;