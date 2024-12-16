import Image from 'next/image';

export function Logo() {
    return (
        <a href="#" className="-m-1.5 p-1.5 group">
            <span className="sr-only">4934</span>
            <Image
                src="/4934sqw.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-auto group-hover:hidden"
            />
            <Image
                src="/4934sqg.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-auto hidden group-hover:block"
            />
        </a>
    );
}

