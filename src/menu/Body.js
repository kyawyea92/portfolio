import Languages from "../body/Languages";
import PageVisitor from "../body/PageVisitor";

export default function BodyFunction(){
    return(
        <div className="mx-5">
        <div className="flex columns-2">
            <div className="w-2/4 justify-center">
                 <img className="object-contain" src="/images/person.jpg" alt="img-1" />
            </div>
            <div className="w-1/3 flex items-center">
                <p className='font-bla indent-8 text-justify leading-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
            </div>
        </div>
            <PageVisitor/>
            {/* <Languages /> */}
        </div>
    );
}