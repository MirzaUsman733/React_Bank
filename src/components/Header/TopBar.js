import { useEffect, useState } from 'react';
import { BsFacebook, BsGithub } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";

import dayjs from 'dayjs';

function TopBar() {

    const [time, setTime] = useState("")

    useEffect(() => {

        setInterval(() => {
            setTime(dayjs().format("DD/MM/YYYY, hh:mm:ss A"))
        })

    }, [])

    return (
        <header className='topbar pt-2'>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <p className="mb-0 text-white">{time}</p>
                    </div>
                    <div className="col-5 text-end">
                        <a href="https://www.facebook.com/profile.php?id=61559305890018" className='text-light' target="_blank"><BsFacebook className="mb-0 me-2" /></a>
                        <a href="https://github.com/MirzaUsman733" className='text-light' target="_blank"><BsGithub className="mb-0 me-2" /></a>
                        <a href="https://www.fiverr.com/mirza_usman733" className='text-light' target="_blank"><SiFiverr size={30} className="mb-0 me-2" /></a>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default TopBar;