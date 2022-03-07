import React, {useContext, useState} from 'react';

const Context = React.createContext()

export const DataHeroStats =()=>{
    return useContext(Context)
}

export function HeroStats({children}) {
    const [wsStarting, setWsStarting] = useState(25)
    const [bsStarting, setBsStarting] = useState(40)
    const [sStarting, setSStarting] = useState(36)
    const [tStarting, setTStarting] = useState(26) 
    const [agStarting, setAgStarting] = useState(30)
    const [intStarting, setIntStarting] = useState(30)
    const [wpStarting, setWpStarting] = useState(21)
    const [felStarting, setFelStarting] = useState(22)
    const [aStarting, setAStarting] = useState(1)
    const [wStarting, setWStarting] = useState(12)
    const [sbStarting, setSbStarting] = useState(3)
    const [tbStarting, setTbStarting] = useState(2) 
    const [mStarting, setMStarting] = useState(4)
    const [magStarting, setMagStarting] = useState(0)
    const [ipStarting, setIpStarting] = useState(0)
    const [fpStarting, setFpStarting] = useState(3)

    const [wsAdvance, setWsAdvance] = useState(0)
    const [bsAdvance, setBsAdvance] = useState(0)
    const [sAdvance, setSAdvance] = useState(5)
    const [tAdvance, setTAdvance] = useState(5) 
    const [agAdvance, setAgAdvance] = useState(10)
    const [intAdvance, setIntAdvance] = useState(5)
    const [wpAdvance, setWpAdvance] = useState(10)
    const [felAdvance, setFelAdvance] = useState(0)
    const [aAdvance, setAAdvance] = useState(0)
    const [wAdvance, setWAdvance] = useState(2)
    const [sbAdvance, setSbAdvance] = useState(0)
    const [tbAdvance, setTbAdvance] = useState(0) 
    const [mAdvance, setMAdvance] = useState(0)
    const [magAdvance, setMagAdvance] = useState(0)
    const [ipAdvance, setIpAdvance] = useState(0)
    const [fpAdvance, setFpAdvance] = useState(0)

    const [wsCurrent, setWsCurrent] = useState(25)
    const [bsCurrent, setBsCurrent] = useState(40)
    const [sCurrent, setSCurrent] = useState(36)
    const [tCurrent, setTCurrent] = useState(26) 
    const [agCurrent, setAgCurrent] = useState(30)
    const [intCurrent, setIntCurrent] = useState(30)
    const [wpCurrent, setWpCurrent] = useState(21)
    const [felCurrent, setFelCurrent] = useState(22)
    const [aCurrent, setACurrent] = useState(1)
    const [wCurrent, setWCurrent] = useState(12)
    const [sbCurrent, setSbCurrent] = useState(3)
    const [tbCurrent, setTbCurrent] = useState(2) 
    const [mCurrent, setMCurrent] = useState(4)
    const [magCurrent, setMagCurrent] = useState(0)
    const [ipCurrent, setIpCurrent] = useState(0)
    const [fpCurrent, setFpCurrent] = useState(3)
    
    return(
        <Context.Provider value={{starting: [wsStarting, setWsStarting, bsStarting, setBsStarting, sStarting, setSStarting, tStarting, setTStarting, agStarting, setAgStarting, intStarting, setIntStarting,wpStarting,setWpStarting,felStarting,setFelStarting,aStarting,setAStarting,wStarting,setWStarting,sbStarting, setSbStarting, tbStarting,setTbStarting,mStarting,setMStarting,magStarting,setMagStarting,ipStarting,setIpStarting,fpStarting,setFpStarting],
                                  advance:[wsAdvance, setWsAdvance, bsAdvance, setBsAdvance, sAdvance, setSAdvance, tAdvance, setTAdvance, agAdvance, setAgAdvance, intAdvance, setIntAdvance,wpAdvance,setWpAdvance,felAdvance,setFelAdvance,aAdvance,setAAdvance,wAdvance,setWAdvance,sbAdvance, setSbAdvance, tbAdvance,setTbAdvance,mAdvance,setMAdvance,magAdvance,setMagAdvance,ipAdvance,setIpAdvance,fpAdvance,setFpAdvance],
                                  current:[wsCurrent, setWsCurrent, bsCurrent, setBsCurrent, sCurrent, setSCurrent, tCurrent, setTCurrent, agCurrent, setAgCurrent, intCurrent, setIntCurrent,wpCurrent,setWpCurrent,felCurrent,setFelCurrent,aCurrent,setACurrent,wCurrent,setWCurrent,sbCurrent, setSbCurrent, tbCurrent,setTbCurrent,mCurrent,setMCurrent,magCurrent,setMagCurrent,ipCurrent,setIpCurrent,fpCurrent,setFpCurrent],}}>
            {children}
        </Context.Provider>
    )
}