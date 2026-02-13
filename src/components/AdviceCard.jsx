import {useState} from 'react'

function AdviceCard() {

    const adviceUrl = "https://api.adviceslip.com/advice";

    const [adviceData, setAdviceData] = useState({
        id:null,
        advice:"Click The Button To Generate Advice",
    });

    const [error, setError] = useState(null); 
    


    const getAdvice = async ()=>{
        try {
            const adviceSlip = await (await fetch(adviceUrl)).json();
            setAdviceData(adviceSlip.slip);
            setError(null);
        } catch (error) {
            console.log(error);
            setError(()=>error.message);
        }
    }




    return (
        <div className='advice-card bg-Blue900 rounded-lg text-center p-4 md:p-8 font-theme-manrope relative max-w-106.25 md:min-w-106.25'>
            <div className="wrapper w-full flex flex-col gap-4 justify-center items-center ">
                <h1 className='title uppercase text-Green300 tracking-[.25rem] text-xs'>Advice <span>#{error? "☹":adviceData.id}</span></h1>
                <p className='advice text-Blue200 text-size-theme-quote font-theme-bold'>
                    {error || adviceData.advice}
                </p>
                <div className='pattern-divider w-full h-4 items-center md:mt-8  mb-8 md:mb-6 bg-[url(/images/pattern-divider-mobile.svg)] md:bg-[url(/images/pattern-divider-desktop.svg)] bg-contain md:bg-cover bg-center bg-no-repeat'>
                {/* pattern design here */}
                </div>
                <button className='button absolute bottom-0 translate-y-1/2 bg-Green300 h-12 w-12 flex flex-row justify-center items-center rounded-full cursor-pointer transform hover:scale-120  hover:shadow-Green300 hover:shadow-2xl active:scale-90 transition-all duration-200 ease-in-out' onClick={()=> getAdvice()} ><img  src="images/icon-dice.svg" alt="" /></button>
            </div>
        </div>
    )
}

export default AdviceCard
