import Image from 'next/image';

export function Logo() {
    return (
        <a href="#" className="-m-1.5 p-1.5 group">
            <span className="sr-only">4934</span>
            <div className="relative w-14 h-14">
                <Image
                    src="/4934sqw.png"
                    alt=""
                    fill
                    className="transition-opacity duration-200 ease-in-out group-hover:opacity-0"
                />
                <Image
                    src="/4934sqg.png"
                    alt=""
                    fill
                    className="transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
                />
            </div>
        </a>
    );
}

