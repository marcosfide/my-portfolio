"use client"

import CountUp from "react-countup";
import { dataCounter } from "@/data";

const CounterServices = () => {
    return ( 
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 relative z-50 md:flex md:grid-cols-4 md:gap-6">
            {dataCounter.map(({id, endCounter, text, lineRight, lineRightMobile}) => (
                <div key={id} className={`${lineRight && 'ltr'}`}>
                    <div style={{ minHeight: "5.2rem" }} className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`}>
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-yellow-600">
                             <CountUp 
                                end={endCounter} 
                                start={0} 
                                duration={5} 
                                decimals={endCounter % 1 !== 0 ? 1 : 0} // Mostrar 1 decimal si es necesario
                              />
                        </p>
                        <p className="text-xs upercase max-w-[100px]">{text}</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default CounterServices;
