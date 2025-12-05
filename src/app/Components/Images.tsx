//@ts-nocheck
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
export default function Images({ src, setisloading, haserror, className }) {

    const [url, seturl] = useState(src);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(haserror === "true" ? true : false);
    const [retryCount, setretryCount] = useState(0);

    const loader = "https://media.wired.com/photos/592722c1af95806129f51b71/3:2/w_2560%2Cc_limit/MIT-Web-Loading.jpg";
    const erorImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/1200px-Feedbin-Icon-error.svg.png";

    useEffect(() => {
        if (haserror !== "true") {
            setloading(false);
            seterror(false);

            return;
        }

        if (retryCount < 3) {
            setloading(true);
            seterror(false);

            const timeout = setTimeout(() => {
                setretryCount(prev => prev + 1);
            }, 3000);

            return () => clearTimeout(timeout);
        } else {
            setloading(false);
            seterror(true);
            setisloading(false);
        }

    }, [retryCount, haserror]);

    return (
        <div>
            {loading ? (
                <Loader2 className={`animate-spin ${className || ""}`}  />
            ) : error ? (
                <img src={erorImg} className={className} />
            ) : (
                <img src={url} className={className} />
            )}
        </div>
    )
}