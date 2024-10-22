import Carousel from "../body/Carousel";
import Languages from "../body/Languages";
import PageVisitor from "../body/PageVisitor";

export default function BodyFunction(){
    return(
        <div className="mx-5">
            <div>
                <Carousel/>
            </div>
        {/* <div className="flex columns-2">
            <div className="w-2/4 justify-center">
                 <img className="object-contain" src="/images/person.jpg" alt="img-1" />
            </div>
            <div className="w-1/3 flex items-center">
            <div>
                <p className='font-bla indent-8 text-justify leading-10'>Over 9 years of working experience in Software Development field as Project Leader.</p>
                <p className='font-bla indent-8 text-justify leading-10'>Strong experience in planning, scheduling, budgeting, execution, and delivery of software and web project.</p>
                <p className='font-bla indent-8 text-justify leading-10'>
Good experience in developing reports on project progress, testing the product prototypes, providing
quality assurance tests on the final products</p><p className='font-bla indent-8 text-justify leading-10'>
Have experience in determining and overseeing consistent testing, evaluation, and troubleshooting of all
products in all stages of completion</p><p className='font-bla indent-8 text-justify leading-10'>
Report to Project Manager and supervised the software development team </p>
            </div>
            </div>
        </div> */}
            <PageVisitor/>
            <Languages />
        </div>
    );
}