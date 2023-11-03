import Step1 from 'assets/img/tick.png';
import Step3 from 'assets/img/3.png';
import Step4 from 'assets/img/4.png';
interface StepProps{
    mark: number;
    content: string;
};

export const StepItem:React.FC<StepProps> = ({content, mark}) => {
    return(
        <div className="flex flex-row items-center sm:flex-col md:flex-col lg:flex-col gap-[20px] lg:gap-[8px] md:gap-[8px] sm:gap-[8px]">
            <img src={mark < 3 ? (Step1) : (mark === 3 ? Step3 : Step4)} className='w-[40px] h-[40px] sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px]' alt='Mark'/>
            <div className="text-[20px] md:text-[12px] sm:text-[12px] sm:leading-[9px] font-normal text-black capitalize text-center" style={{fontWeight: mark === 3 ? 700 : 400}}>
                <span className="sm:hidden md:hidden">Step {mark} : </span>{content}
            </div>
        </div>
    );
};